import Default from "shared-image/global/profile/default.png";
import DefaultWork from "shared-image/global/profile/default_work.png";
import Jobi from "shared-image/global/profile/jobi.png";
import JobiSafety from "shared-image/global/profile/jobi_safety.png";
import JobiChat from "shared-image/global/profile/jobi_chat.png";
import JobiPlay from "shared-image/global/profile/jobi_play.png";
import JobiTeach from "shared-image/global/profile/jobi_teach.png";

export const selectImage = (str: string) => {
  if (str === "default") {
    return Default;
  }
  if (str === "default_work") {
    return DefaultWork;
  }
  if (str === "jobi") {
    return Jobi;
  }
  if (str === "jobi_safety") {
    return JobiSafety;
  }
  if (str === "jobi_chat") {
    return JobiChat;
  }
  if (str === "jobi_play") {
    return JobiPlay;
  }
  return JobiTeach;
};
