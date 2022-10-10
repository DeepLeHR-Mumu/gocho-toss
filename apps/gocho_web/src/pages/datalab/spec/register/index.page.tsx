import { useEffect, useCallback } from "react";
import { NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";

import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";
import { useProgress } from "@recoil/hook/spec";
import { META_SPEC_REGISTER } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";

import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { ProgressPart } from "./part/progressPart";
import { SpecWritePart } from "./part/carouselCardPart";

import { wrapper, title } from "./style";

const Register: NextPage = () => {
  const router = useRouter();
  const { setCurrentModal, currentModal } = useModal();

  const { error } = useUserInfo();
  const { resetCurrentProgress } = useProgress();

  useEffect(() => {
    resetCurrentProgress();
  }, [resetCurrentProgress]);

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
  }, [currentModal?.activatedModal, error, setCurrentModal]);

  // blocking modal

  const routeChangeStart = useCallback(
    (url: string) => {
      const isCurrentSpecObj = Boolean(sessionStorage.getItem("specObj") !== null);

      if (isCurrentSpecObj) {
        setCurrentModal("pageBlockModal", { url });
        router.events.emit("routeChangeError");
        // 모달을 멈추기 위한 disable
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    },
    [setCurrentModal, router]
  );

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [routeChangeStart, router.events]);

  return (
    <main css={wrapper}>
      <MetaHead metaData={META_SPEC_REGISTER} />
      <ProgressPart />
      <Layout>
        <strong css={title}>
          DataLab <span>스펙등록하기</span>
        </strong>
        <InvisibleH2 title="생산직 스펙 평가 등록하기" />
        <SpecWritePart />
      </Layout>
    </main>
  );
};

export default Register;
