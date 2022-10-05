import { FunctionComponent, useEffect } from "react";
import Link from "next/link";
import { FiHome, FiSettings } from "react-icons/fi";

import { useModal } from "@recoil/hook/modal";
import { MYPAGE_URL } from "shared-constant/internalURL";
import { buttonWrapper } from "./style";

export const MenuBoxes: FunctionComponent = () => {
  const { currentModal, setCurrentModal } = useModal();

  const handleSettingModal = () => {
    setCurrentModal("accountSettingModal");
  };

  useEffect(() => {
    if (currentModal?.activatedModal === "accountSettingModal") {
      setCurrentModal("accountSettingModal");
    }
  }, [currentModal?.activatedModal, setCurrentModal]);

  const isCurrentModal = currentModal?.activatedModal === "accountSettingModal";
  return (
    <>
      <Link href={MYPAGE_URL} passHref>
        <a>
          <div css={buttonWrapper(!isCurrentModal)}>
            <FiHome />
            <p>MY 홈</p>
          </div>
        </a>
      </Link>

      <button css={buttonWrapper(isCurrentModal)} type="button" onClick={handleSettingModal}>
        <FiSettings />
        <p>계정설정</p>
      </button>
    </>
  );
};
