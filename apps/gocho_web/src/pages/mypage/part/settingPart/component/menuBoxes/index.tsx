import { FunctionComponent, useEffect } from "react";
import Link from "next/link";
import { FiHome, FiSettings } from "react-icons/fi";

import { MYPAGE_URL } from "shared-constant";
import { useModal } from "@/globalStates";
import { buttonWrapper } from "./style";

export const MenuBoxes: FunctionComponent = () => {
  const { modal, setModal } = useModal();

  const handleSettingModal = () => {
    setModal("accountSettingModal");
  };

  useEffect(() => {
    if (modal === "accountSettingModal") {
      setModal("accountSettingModal");
    }
  }, [modal, setModal]);

  const isCurrentModal = modal === "accountSettingModal";
  return (
    <>
      <Link href={MYPAGE_URL} passHref>
        <div css={buttonWrapper(!isCurrentModal)}>
          <FiHome />
          <p>MY 홈</p>
        </div>
      </Link>

      <button css={buttonWrapper(isCurrentModal)} type="button" onClick={handleSettingModal}>
        <FiSettings />
        <p>계정설정</p>
      </button>
    </>
  );
};
