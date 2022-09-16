import { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";
import { useProgress } from "@recoil/hook/spec";

import { Layout } from "@component/layout";
import { ProgressPart } from "./part/progressPart";
import { SpecWritePart } from "./part/carouselCardPart";

import { usePageBlocking } from "./util";
import { wrapper, title } from "./style";

const Register: NextPage = () => {
  const { setCurrentModal, currentModal } = useModal();

  const { error } = useUserInfo();
  const { resetCurrentProgress } = useProgress();

  useEffect(() => {
    resetCurrentProgress();
  }, [resetCurrentProgress]);

  // LATER : 에러코드 추가 예정
  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal");
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
  }, [currentModal?.activatedModal, error, setCurrentModal]);

  usePageBlocking(setCurrentModal);

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
