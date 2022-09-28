import { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";

import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_SPEC_LIST } from "shared-constant/meta";

import { AsideMenu } from "./component/asideMenu";
import { CarouselPart } from "./part/carouselPart";
import { ListPart } from "./part/listPart";

import { title, colorPoint, flexBox } from "./style";

const MainList: NextPage = () => {
  const { setCurrentModal, closeModal, currentModal } = useModal();
  const { error } = useUserInfo();

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
    return () => {
      closeModal();
    };
  }, [closeModal, currentModal?.activatedModal, setCurrentModal, error]);

  return (
    <main>
      <MetaHead metaData={META_SPEC_LIST} />
      <CarouselPart />
      <Layout>
        <InvisibleH2 title="전체 스펙 리스트" />
        <strong css={title}>
          <span css={colorPoint}>All </span>
          스펙 List 📃✨
        </strong>
        <div css={flexBox}>
          <AsideMenu />
          <ListPart />
        </div>
      </Layout>
    </main>
  );
};

export default MainList;
