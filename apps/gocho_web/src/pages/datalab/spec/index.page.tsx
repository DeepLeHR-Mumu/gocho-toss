import { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

import { useUserInfo } from "@api/auth";
import { useModal } from "@recoil/hook/modal";

import { CarouselPart } from "./part/carouselPart";
import { ListPart } from "./part/listPart";

const MainList: NextPage = () => {
  const { setCurrentModal, closeModal } = useModal();
  const { error } = useUserInfo();

  useEffect(() => {
    if (
      axios.isAxiosError(error) &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      setCurrentModal("loginModal");
    }
  }, [error, setCurrentModal]);

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, [closeModal]);

  return (
    <main>
      <CarouselPart />
      <ListPart />
    </main>
  );
};

export default MainList;
