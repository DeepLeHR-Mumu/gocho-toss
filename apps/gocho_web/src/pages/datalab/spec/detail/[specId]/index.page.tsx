import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { useSpecDetail } from "shared-api/spec";
import { META_SPEC_DETAIL } from "shared-constant/meta";
import { useUserInfo } from "shared-api/auth";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { Layout } from "@component/layout";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useModal } from "@recoil/hook/modal";

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
      <MetaHead
        metaData={META_SPEC_DETAIL}
        specDetail={{
          id: Number(specId),
          nickName: specDetailData.user.nickname,
          age: specDetailData.age,
          gender: specDetailData.gender,
          certificate: specDetailData.certificate?.data,
          desiredTask: specDetailData.desiredTask,
          desiredIndustry: specDetailData.desiredIndustry,
        }}
      />

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
