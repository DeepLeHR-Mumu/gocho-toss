import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// import { dehydrate, QueryClient } from "@tanstack/react-query";

import { useSpecDetail } from "shared-api/spec";
import { useUserInfo } from "shared-api/auth";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
// import { specDetailKeyObj } from "shared-constant/queryKeyFactory/spec/detailKeyObj";

import { Layout } from "@component/layout";
import { useModal } from "@/globalStates";

import { PageHead } from "./pageHead";
import { BasicInfoPart } from "./part/basicInfoPart";
import { DetailInfoPart } from "./part/detailInfoPart";
import { ResultInfoPart } from "./part/resultInfoPart";
import { EvaluationPart } from "./part/evaluationPart";
import { container, loadingBox, mainWrapper, wrapper } from "./style";

const SpecDetail: NextPage = () => {
  const router = useRouter();
  const { specId } = router.query;
  const { data: specDetailData, isLoading } = useSpecDetail({ specId: Number(specId) });
  const { error: userError } = useUserInfo();
  const { setModal, closeModal, modal } = useModal();

  useEffect(() => {
    if (axios.isAxiosError(userError) && (userError.response?.status === 401 || userError.response?.status === 403)) {
      setModal("loginModal", { button: "home" });
    }
    if (modal === "signUpModal") {
      setModal("signUpModal");
    }
    if (modal === "findPasswordModal") {
      setModal("findPasswordModal");
    }
    return () => {
      closeModal();
    };
  }, [closeModal, modal, setModal, userError]);

  if (isLoading || !specDetailData || router.isFallback) {
    return (
      <main css={wrapper}>
        <Layout>
          <div css={mainWrapper}>
            <div css={loadingBox}>
              <SkeletonBox />
            </div>
          </div>
        </Layout>
      </main>
    );
  }

  return (
    <main css={wrapper}>
      <PageHead
        option={{
          id: specDetailData.id,
          age: specDetailData.age,
          nickname: specDetailData.uploader.nickname,
          gender: specDetailData.gender,
          certificate: specDetailData.certificate?.data,
          desiredTask: specDetailData.desiredTask,
          desiredIndustry: specDetailData.desiredIndustry,
        }}
      />
      <InvisibleH1 title={`[${specDetailData.uploader.nickname.slice(0, 1)}***]님의 생산직 스펙평가 - 고초대졸닷컴`} />

      <Layout>
        <div css={container}>
          <div css={mainWrapper}>
            <BasicInfoPart basicData={specDetailData} />
            <DetailInfoPart detailData={specDetailData} />
            <ResultInfoPart resultData={specDetailData} />
          </div>
          <EvaluationPart
            evalCount={specDetailData.evalCount}
            isMine={specDetailData.isMine}
            didEval={specDetailData.didEval}
          />
        </div>
      </Layout>
    </main>
  );
};

export default SpecDetail;

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   const { params } = context;
//   const queryClient = new QueryClient();

//   if (params)
//     await queryClient.prefetchQuery(specDetailKeyObj.detail({ specId: Number(params.specId) }), getSpecDetail);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 600,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };
