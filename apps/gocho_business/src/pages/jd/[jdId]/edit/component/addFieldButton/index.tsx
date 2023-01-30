import { FunctionComponent } from "react";
import { FiPlus } from "react-icons/fi";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { AddFieldButtonProps } from "./type";

export const AddFieldButton: FunctionComponent<AddFieldButtonProps> = ({ onClickHandler }) => (
  <SharedButton
    radius="round"
    fontColor={`${COLORS.GRAY10}`}
    backgroundColor={`${COLORS.GRAY100}`}
    borderColor={`${COLORS.GRAY70}`}
    size="medium"
    iconObj={{ icon: FiPlus, location: "left" }}
    text="입력칸 추가"
    onClickHandler={onClickHandler}
  />
);
