export const BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https://gocho-back.com/v1" : "https://dev.gocho-back.com/v1"
}`;
export const MANAGER_BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://manager.gocho-back.com"
    : "https://dev.manager.gocho-back.com"
}`;
export const CDN_URL = "http://cdn.gocho-back.com/";
