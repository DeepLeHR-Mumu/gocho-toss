import { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

import { useUserInfo } from "@api/auth";
import { useModal } from "@recoil/hook/modal";

import { Layout } from "@component/layout";
import { ProgressPart } from "./part/progressPart";
import { SpecWritePart } from "./part/carouselCardPart";

import { usePageBlocking, useResetProgress } from "./util";
import { wrapper, title } from "./style";

const Register: NextPage = () => {
  const { setCurrentModal, currentModal } = useModal();

  const { error } = useUserInfo();

  // LATER : 에러코드 추가 예정
  useEffect(() => {
    if (
      axios.isAxiosError(error) &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      setCurrentModal("loginModal");
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
  }, [currentModal, error, setCurrentModal]);

  usePageBlocking(setCurrentModal);
  useResetProgress();

  return (
    <main css={wrapper}>
      <ProgressPart />
      <Layout>
        <h2 css={title}>
          DataLab <span>스펙등록하기</span>
        </h2>
        <SpecWritePart />
      </Layout>
    </main>
  );
};

export default Register;
