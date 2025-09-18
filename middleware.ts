import { next } from '@vercel/edge';

export default function middleware(request) {

  const origin = request.headers.get('origin');

  const allowedOrigins = 'https://html-starter-mab.vercel.app';

  const isAllowedOrigin = origin && allowedOrigins.includes(origin);
  return next({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
      'Referrer-Policy': 'origin-when-cross-origin',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'on',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    },
  });
}