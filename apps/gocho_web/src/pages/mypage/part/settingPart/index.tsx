import { useRouter } from "next/router";
import { FunctionComponent, useState, useEffect } from "react";

import { useModal } from "@recoil/hook/modal";
import { MYPAGE_URL } from "shared-constant/internalURL";

import { MenuBoxes } from "./component/menuBoxes";
import { wrapper } from "./style";
import { MenuType } from "./type";

export const SettingPart: FunctionComponent = () => {
  const { pathname } = useRouter();

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
    <section css={wrapper}>
      <MenuBoxes currentMenu={currentMenu} handleSettingModal={handleSettingModal} />
    </section>
  );
};
