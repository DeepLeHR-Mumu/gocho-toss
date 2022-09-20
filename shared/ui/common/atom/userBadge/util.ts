import defaultBadgeImage from "shared-image/global/badge/default.png";
import earlyBirdBadgeImage from "shared-image/global/badge/early_bird.png";
import adminBadgeImage from "shared-image/global/badge/admin.png";

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
