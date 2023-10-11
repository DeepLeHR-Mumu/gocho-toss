import { StaticImageData } from "next/image";

import jobiChatProfile from "@/public/image/profile/jobi_chat.png";
import jobiPlayProfile from "@/public/image/profile/jobi_play.png";
import jobiSafetyProfile from "@/public/image/profile/jobi_safety.png";
import jobiTeachProfile from "@/public/image/profile/jobi_teach.png";
import jobiProfile from "@/public/image/profile/jobi.png";

interface ProfileImgObjArrDef {
  key: "default" | "default_work" | "jobi_chat" | "jobi_play" | "jobi_safety" | "jobi_teach" | "jobi";
  image: StaticImageData;
}

export const profileImgObjArr: ProfileImgObjArrDef[] = [
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
