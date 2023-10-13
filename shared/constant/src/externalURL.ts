export const BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://user.gocho-back.com/v1"
    : "https://dev.user.gocho-back.com/v1"
}`;

export const BUSINESS_BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://business.gocho-back.com"
    : "https://dev.business.gocho-back.com/v1"
}`;

export const MANAGER_BACKEND_URL = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://admin.gocho-back.com"
    : "https://dev.admin.gocho-back.com/v1"
}`;

export const CDN_URL = "http://cdn.gocho-back.com/";

export const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_xgEFxms";
