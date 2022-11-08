import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { META_SPEC_REGISTER } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL, SPEC_LIST_URL } from "shared-constant/internalURL";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { specRegisterFunnelEvent } from "shared-ga/spec";

import { useShowUnLoginModal } from "@recoil/hook/unLoginModal";
import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";

import { ProgressPart } from "./part/progressPart";
import { SpecWritePart } from "./part/carouselCardPart";

import { wrapper, title } from "./style";

const Register: NextPage = () => {
  const router = useRouter();
  const { setCurrentModal } = useModal();
  useShowUnLoginModal();

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      const isCurrentSpecObj = Boolean(sessionStorage.getItem("specObj") === null);

      if (!isCurrentSpecObj) {
        setCurrentModal("pageBlockModal", { url, text: "작성 중인 스펙이 초기화됩니다. 나가시겠습니까?" });
        router.events.emit("routeChangeError");
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    };

    router.events.on("routeChangeStart", routeChangeStart);
    window.addEventListener("beforeunload", () => {
      routeChangeStart(SPEC_LIST_URL);
    });
    router.beforePopState(() => {
      routeChangeStart(SPEC_LIST_URL);
      return true;
    });
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      window.removeEventListener("beforeunload", () => {
        routeChangeStart(SPEC_LIST_URL);
      });

      router.beforePopState(() => {
        return true;
      });
    };
  }, [router, router.events, setCurrentModal]);

  useEffect(() => {
    specRegisterFunnelEvent();
  }, []);

  return (
    <main css={wrapper}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_SPEC_REGISTER} />

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
