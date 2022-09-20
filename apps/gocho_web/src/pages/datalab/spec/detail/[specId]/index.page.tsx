import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

import { useSpecDetail } from "shared-api/spec";

import { Layout } from "@component/layout";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { BasicInfoPart } from "./part/basicInfoPart";
import { DetailInfoPart } from "./part/detailInfoPart";
import { ResultInfoPart } from "./part/resultInfoPart";
import { EvaluationPart } from "./part/evaluationPart";
import { container, loadingBox, mainWrapper, wrapper } from "./style";

const Detail: NextPage = () => {
  const router = useRouter();
  const { specId } = router.query;
  const { data: specDetailData, error, isLoading } = useSpecDetail({ specId: Number(specId) });

  if (axios.isAxiosError(error) && error.response?.status === 401) {
    return <div>로그인 안됐는데?{JSON.stringify(error.response)}</div>;
  }

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
