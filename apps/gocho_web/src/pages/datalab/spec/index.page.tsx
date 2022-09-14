import { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

import { useUserInfo } from "@api/auth";
import { useModal } from "@recoil/hook/modal";

import { Layout } from "@component/layout";
import { AsideMenu } from "./component/asideMenu";
import { CarouselPart } from "./part/carouselPart";
import { ListPart } from "./part/listPart";

import { title, colorPoint, flexBox } from "./style";

const MainList: NextPage = () => {
  const { setCurrentModal, closeModal } = useModal();
  const { error } = useUserInfo();

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal");
    }
    return () => {
      closeModal();
    };
  }, [error, setCurrentModal, closeModal]);

  return (
    <main>
      <CarouselPart />
      <Layout>
        <h1 css={title}>
          <span css={colorPoint}>All </span>
          스펙 List 📃✨
        </h1>
        <div css={flexBox}>
          <AsideMenu />
          <ListPart />
        </div>
      </Layout>
    </main>
  );
};

export default MainList;
