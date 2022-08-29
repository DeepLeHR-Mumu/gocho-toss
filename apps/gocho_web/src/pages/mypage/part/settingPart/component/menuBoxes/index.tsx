import { FunctionComponent } from "react";
import Link from "next/link";
import { FiHome, FiSettings } from "react-icons/fi";

import {  MYPAGE_URL } from "@constant/internalURL";

import { MenuBoxesProps } from "./type";
import { boxWrapper } from "./style";

export const MenuBoxes: FunctionComponent<MenuBoxesProps> = ({
  currentMenu,
  handleSettingModal,
}) => {
  return (
    <>
      <Link href={MYPAGE_URL} passHref>
        <a>
          <div css={boxWrapper(currentMenu === "MY 홈")}>
            <FiHome />
            <p>MY 홈</p>
          </div>
        </a>
      </Link>

      <button
        css={boxWrapper(currentMenu === "계정설정")}
        type="button"
        onClick={handleSettingModal}
      >
        <FiSettings />
        <p>계정설정</p>
      </button>
    </>
  );
};
