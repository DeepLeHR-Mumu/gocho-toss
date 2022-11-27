export const BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https://gocho-back.com/v1" : "https://dev.gocho-back.com/v1"
}`;
// export const BACKEND_URL = process.env.API_URL || "https://dev.gocho-back.com/v1";
export const MANAGER_BACKEND_URL = `${
  process.env.NODE_ENV === "development" ? "https://dev.manager.gocho-back.com" : "https://manager.gocho-back.com"
}`;
export const CDN_URL = "http://cdn.gocho-back.com/";
