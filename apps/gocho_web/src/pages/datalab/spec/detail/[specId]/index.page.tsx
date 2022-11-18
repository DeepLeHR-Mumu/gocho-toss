import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { useSpecDetail } from "shared-api/spec";
import { useUserInfo } from "shared-api/auth";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";

import { PageHead } from "./component/pageHead";
import { BasicInfoPart } from "./part/basicInfoPart";
import { DetailInfoPart } from "./part/detailInfoPart";
import { ResultInfoPart } from "./part/resultInfoPart";
import { EvaluationPart } from "./part/evaluationPart";
import { container, loadingBox, mainWrapper, wrapper } from "./style";

const Detail: NextPage = () => {
  const router = useRouter();
  const { specId } = router.query;
  const { data: specDetailData, isLoading } = useSpecDetail({ specId: Number(specId) });
  const { error: userError } = useUserInfo();
  const { setCurrentModal, closeModal, currentModal } = useModal();

  useEffect(() => {
    if (axios.isAxiosError(userError) && (userError.response?.status === 401 || userError.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
    return () => {
      closeModal();
    };
  }, [closeModal, currentModal?.activatedModal, setCurrentModal, userError]);

  if (isLoading || !specDetailData) {
    return (
      <div css={wrapper}>
        <Layout>
          <div css={mainWrapper}>
            <div css={loadingBox}>
              <SkeletonBox />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
  return (
    <div css={wrapper}>
      <PageHead
        option={{
          id: Number(specId),
          age: specDetailData.age,
          nickname: specDetailData.user.nickname,
          gender: specDetailData.gender,
          certificate: specDetailData.certificate?.data,
          desiredTask: specDetailData.desiredTask,
          desiredIndustry: specDetailData.desiredIndustry,
        }}
      />
      <InvisibleH1 title={`[${specDetailData.user.nickname.slice(0, 1)}***]님의 생산직 스펙평가 - 고초대졸닷컴`} />

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
    </div>
  );
};
export default Detail;
