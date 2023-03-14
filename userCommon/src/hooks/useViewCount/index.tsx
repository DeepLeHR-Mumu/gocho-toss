import { useEffect } from "react";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

import { ViewObjType } from "../../utils/storage/type";
import { userSetLocalStorageItem, userGetLocalStoargetItem } from "../../utils";
import { UseViewCountProps } from "./type";

export const useViewCount = ({ id, target, viewMutation }: UseViewCountProps) => {
  useEffect(() => {
    dayjs.extend(isToday);

    if (!id) return;

    const parsedViewObj = userGetLocalStoargetItem("VIEW_OBJ");
    // date가 오늘이 아니거나 parsedViewObj가 없을 때
    if (!parsedViewObj || !dayjs(parsedViewObj.date).isToday()) {
      userSetLocalStorageItem("VIEW_OBJ", { [target]: [id], date: new Date().getTime() });
      viewMutation();
      return;
    }

    if (parsedViewObj[target] === undefined) {
      userSetLocalStorageItem("VIEW_OBJ", { ...parsedViewObj, [target]: [id] });
      viewMutation();
      return;
    }

    if (parsedViewObj[target]) {
      const viewObj = userGetLocalStoargetItem("VIEW_OBJ") as ViewObjType;
      const isSameId = viewObj[target]?.find((foundId) => foundId === id);

      // 같은 id가 없을 때
      if (!isSameId && parsedViewObj[target]) {
        userSetLocalStorageItem("VIEW_OBJ", {
          ...parsedViewObj,
          [target]: [...(parsedViewObj[target] as number[]), id],
        });
        viewMutation();
        return;
      }
    }
  }, [id, target, viewMutation]);
};
