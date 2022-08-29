import { StaticImageData } from "next/image";

export interface GetUserBadgeSrcDef {
  (badge: "default" | "early_bird" | "admin"): StaticImageData;
}

export interface UserBadgeProps {
  badge: "default" | "early_bird" | "admin";
}
