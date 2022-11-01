import { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";
import { META_SPEC_REGISTER } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { CanonicalHead } from "shared-ui/common/atom/canonicalHead";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { specRegisterFunnelEvent } from "shared-ga/spec";

import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";

import { PageBlockingPart } from "./part/pageBlockingPart";
import { ProgressPart } from "./part/progressPart";
import { SpecWritePart } from "./part/carouselCardPart";

import { wrapper, title } from "./style";

const Register: NextPage = () => {
  const { setCurrentModal, currentModal } = useModal();
  const { error } = useUserInfo();

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") setCurrentModal("signUpModal");
    if (currentModal?.activatedModal === "findPasswordModal") setCurrentModal("findPasswordModal");
  }, [currentModal?.activatedModal, error, setCurrentModal]);

  useEffect(() => {
    specRegisterFunnelEvent();
  }, []);

  return (
    <main css={wrapper}>
      <CanonicalHead />
      <MetaHead metaData={META_SPEC_REGISTER} />

      <PageBlockingPart />
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
