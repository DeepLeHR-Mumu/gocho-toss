import { useRouter } from "next/router";
import { FunctionComponent, useState, useEffect } from "react";
import { FiList } from "react-icons/fi";

import { useModal } from "@recoil/hook/modal";
import { MYPAGE_URL } from "@constant/internalURL";

import { MenuBoxes } from "./component/menuBoxes";
import { menuOpenBox } from "./style";
import { MenuType } from "./type";
import { CurrentMenuBox } from "./component/currentMenuBox";

export const SettingPart: FunctionComponent = () => {
  const { pathname } = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<MenuType>(pathname as MenuType);
  const { currentModal, setCurrentModal } = useModal();

  const handleSettingModal = () => {
    setCurrentModal("accountSettingModal");
  };
  useEffect(() => {
    if (currentModal?.activatedModal === "accountSettingModal") {
      setCurrentMenu("계정설정");
      return;
    }
    if (pathname === MYPAGE_URL) {
      setCurrentMenu("MY 홈");
    }
  }, [currentMenu, currentModal, pathname]);

  return (
    <section>
      <div
        onMouseEnter={() => {
          return setIsMenuOpen(true);
        }}
        onPointerOver={() => {
          return setIsMenuOpen(true);
        }}
        onMouseLeave={() => {
          return setIsMenuOpen(false);
        }}
      >
        <div css={menuOpenBox(isMenuOpen)}>
          <FiList />
        </div>
        {isMenuOpen ? (
          <MenuBoxes currentMenu={currentMenu} handleSettingModal={handleSettingModal} />
        ) : (
          <CurrentMenuBox currentMenu={currentMenu} />
        )}
      </div>
    </section>
  );
};
