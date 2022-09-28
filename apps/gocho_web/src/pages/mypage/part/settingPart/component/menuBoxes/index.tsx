import { FunctionComponent } from "react";
import Link from "next/link";
import { FiHome, FiSettings } from "react-icons/fi";

import { MYPAGE_URL } from "shared-constant/internalURL";

import { MenuBoxesProps } from "./type";
import { buttonWrapper } from "./style";

export const MenuBoxes: FunctionComponent<MenuBoxesProps> = ({ currentMenu, handleSettingModal }) => {
  return (
    <>
      <Link href={MYPAGE_URL} passHref>
        <a css={buttonWrapper(currentMenu === "MY 홈")}>
          <FiHome />
          MY 홈
        </a>
      </Link>

      <button css={buttonWrapper(currentMenu === "계정설정")} type="button" onClick={handleSettingModal}>
        <FiSettings />
        계정설정
      </button>
    </>
  );
};
