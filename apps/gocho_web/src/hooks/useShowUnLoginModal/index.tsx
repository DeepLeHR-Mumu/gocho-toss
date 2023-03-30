import { useEffect } from "react";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";
import { useModal } from "@/globalStates";

export const useShowUnLoginModal = () => {
  const { setModal, modal } = useModal();
  const { error: userInfoError } = useUserInfo();

  useEffect(() => {
    if (
      axios.isAxiosError(userInfoError) &&
      (userInfoError.response?.status === 401 || userInfoError.response?.status === 403)
    )
      setModal("loginModal", { button: "home" });
    if (modal === "signUpModal") setModal("signUpModal");
    if (modal === "findPasswordModal") setModal("findPasswordModal");
  }, [modal, setModal, userInfoError]);
};
