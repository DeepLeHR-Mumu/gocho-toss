import { useEffect } from "react";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";

export const useShowUnLoginModal = () => {
  const { setCurrentModal, currentModal } = useModal();
  const { error: userInfoError } = useUserInfo();

  useEffect(() => {
    if (
      axios.isAxiosError(userInfoError) &&
      (userInfoError.response?.status === 401 || userInfoError.response?.status === 403)
    )
      setCurrentModal("loginModal", { button: "home" });
    if (currentModal?.activatedModal === "signUpModal") setCurrentModal("signUpModal");
    if (currentModal?.activatedModal === "findPasswordModal") setCurrentModal("findPasswordModal");
  }, [currentModal?.activatedModal, setCurrentModal, userInfoError]);
};
