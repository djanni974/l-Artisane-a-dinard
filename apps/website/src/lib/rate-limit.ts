import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

/**
 * Rate limiter for the contact form.
 *
 * Sliding window: 3 requests per 15 minutes per IP.
 * This prevents spam without blocking legitimate users.
 *
 * Requires env vars:
 *   - UPSTASH_REDIS_REST_URL
 *   - UPSTASH_REDIS_REST_TOKEN
 */

let _rateLimit: Ratelimit | null = null;

export function getContactRateLimit(): Ratelimit | null {
  if (_rateLimit) return _rateLimit;

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  _rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, "15 m"),
    analytics: true,
    prefix: "lartisane:contact",
  });

  return _rateLimit;
}
