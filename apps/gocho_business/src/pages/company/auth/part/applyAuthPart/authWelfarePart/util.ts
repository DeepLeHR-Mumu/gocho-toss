import { Entries } from "@/types";

import { AuthWelfareFormProps, WelfareKey } from "../../../component/authWelfareForm/type";
import { WELFARE_DESC_OBJ } from "./constant";
import { PostWelfareSubmitValues } from "./type";

export const welfareArrCreator = (
  welfareObj: PostWelfareSubmitValues | null
): {
  welfareArr: (Pick<AuthWelfareFormProps, "title" | "desc" | "registerKey" | "welfareValueArr"> & { index: number })[];
} => {
  if (!welfareObj) {
    return { welfareArr: [] };
  }

  const welfareEntries = Object.entries(welfareObj) as Entries<PostWelfareSubmitValues>;

  const welfareArr = welfareEntries
    .filter((welfare) => {
      const [, value] = welfare;
      return value;
    })
    .map((welfare) => {
      const [key, value] = welfare;

      const welfareKey: WelfareKey = `welfare.${key}`;

      return {
        welfareValueArr: value,
        registerKey: welfareKey,
        title: WELFARE_DESC_OBJ[key].name,
        desc: WELFARE_DESC_OBJ[key].desc,
        index: WELFARE_DESC_OBJ[key].index,
      };
    });

  return { welfareArr };
};
