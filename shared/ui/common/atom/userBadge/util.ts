import defaultBadgeImage from "@public/images/global/badge/default.png";
import earlyBirdBadgeImage from "@public/images/global/badge/early_bird.png";
import adminBadgeImage from "@public/images/global/badge/admin.png";

import { GetUserBadgeSrcDef } from "./type";

export const getUserBadgeSrc: GetUserBadgeSrcDef = (badge) => {
  if (badge === "early_bird") {
    return earlyBirdBadgeImage;
  }
  if (badge === "admin") {
    return adminBadgeImage;
  }
  return defaultBadgeImage;
};
