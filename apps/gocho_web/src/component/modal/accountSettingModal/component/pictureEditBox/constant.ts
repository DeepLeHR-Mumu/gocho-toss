import { StaticImageData } from "next/image";

import jobiChatProfile from "shared-image/global/profile/jobi_chat.png";
import jobiPlayProfile from "shared-image/global/profile/jobi_play.png";
import jobiSafetyProfile from "shared-image/global/profile/jobi_safety.png";
import jobiTeachProfile from "shared-image/global/profile/jobi_teach.png";
import jobiProfile from "shared-image/global/profile/jobi.png";

interface ProfileObjArrDef {
  key: "default" | "default_work" | "jobi_chat" | "jobi_play" | "jobi_safety" | "jobi_teach" | "jobi";
  image: StaticImageData;
}

export const profileObjArr: ProfileObjArrDef[] = [
  {
    key: "jobi_chat",
    image: jobiChatProfile,
  },
  {
    key: "jobi_play",
    image: jobiPlayProfile,
  },
  {
    key: "jobi_safety",
    image: jobiSafetyProfile,
  },
  {
    key: "jobi_teach",
    image: jobiTeachProfile,
  },
  {
    key: "jobi",
    image: jobiProfile,
  },
];
