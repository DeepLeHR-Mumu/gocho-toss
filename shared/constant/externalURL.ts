export const BACKEND_URL = `${
  process.env.NODE_ENV === "development" ? "https://dev.gocho-back.com/v1" : "https://gocho-back.com/v1"
}`;
export const MANAGER_BACKEND_URL = `${
  process.env.NODE_ENV === "development" ? "http://dev.manager.gocho-back.com" : "https://manager.gocho-back.com"
}`;
export const CDN_URL = "http://cdn.gocho-back.com/";
