import { COLORS } from "@style/constant";
import { FunctionComponent } from "react";
import { FiHome, FiAward, FiSettings } from "react-icons/fi";

import { activatedBox } from "./style";
import { CurrentMenuBoxProps } from "./type";

export const CurrentMenuBox: FunctionComponent<CurrentMenuBoxProps> = ({
  currentMenu,
}) => {
  return (
    <div css={activatedBox}>
      {currentMenu === "MY 홈" && <FiHome color={COLORS.BLUE_FIRST40} />}
      {currentMenu === "MY 스펙" && <FiAward color={COLORS.BLUE_FIRST40} />}
      {currentMenu === "계정설정" && <FiSettings color={COLORS.BLUE_FIRST40} />}
      <p>{currentMenu}</p>
    </div>
  );
};
