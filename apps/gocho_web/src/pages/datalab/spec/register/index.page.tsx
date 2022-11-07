import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";
import { META_SPEC_REGISTER } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { specRegisterFunnelEvent } from "shared-ga/spec";

import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";

import { PageBlockingPart } from "./part/pageBlockingPart";
import { ProgressPart } from "./part/progressPart";
import { SpecWritePart } from "./part/carouselCardPart";

import { wrapper, title } from "./style";

const Register: NextPage = () => {
  const router = useRouter();
  const { setCurrentModal, currentModal } = useModal();
  const { error: userInfoError } = useUserInfo();

  // 근본적인 고민을 해보자
  // currentModal.active에 null인 경우에
  useEffect(() => {
    if (
      axios.isAxiosError(userInfoError) &&
      (userInfoError.response?.status === 401 || userInfoError.response?.status === 403)
    ) {
      setCurrentModal("loginModal", { button: "home" });
    }
    // if (currentModal?.activatedModal === "signUpModal") setCurrentModal("signUpModal");
    // if (currentModal?.activatedModal === "findPasswordModal") setCurrentModal("findPasswordModal");
  }, [currentModal?.activatedModal, userInfoError, setCurrentModal]);

  useEffect(() => {
    specRegisterFunnelEvent();
  }, []);

  return (
    <main css={wrapper}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_SPEC_REGISTER} />

      <PageBlockingPart />
      <ProgressPart />
      <Layout>
        <InvisibleH2 title="생산직 스펙 평가 등록하기" />
        <strong css={title}>
          DataLab <span>스펙등록하기</span>
        </strong>
        <SpecWritePart />
      </Layout>
    </main>
  );
};

export default Register;
