export const BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://user.gocho-back.com"
    : "https://dev.user.gocho-back.com"
}`;

export const BUSINESS_BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://business.gocho-back.com"
    : "https://dev.business.gocho-back.com"
}`;

export const MANAGER_BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://admin.gocho-back.com"
    : "https://dev.admin.gocho-back.com"
}`;

export const CDN_URL = "http://cdn.gocho-back.com/";
