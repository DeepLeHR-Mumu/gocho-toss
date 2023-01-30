import { Dispatch, SetStateAction } from "react";

export const focusedArrOnFocusHandler = (setIsFocusedArr: Dispatch<SetStateAction<boolean[]>>, index: number) => {
  setIsFocusedArr((prev) =>
    prev.map((stateItem, stateIndex) => {
      if (stateIndex === index) {
        return true;
      }
      return stateItem;
    })
  );
};

export const focusedArrOnBlurHandler = (setIsFocusedArr: Dispatch<SetStateAction<boolean[]>>, index: number) => {
  setIsFocusedArr((prev) =>
    prev.map((stateItem, stateIndex) => {
      if (stateIndex === index) {
        return false;
      }
      return stateItem;
    })
  );
};
