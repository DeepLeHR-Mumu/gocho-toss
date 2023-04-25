import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import payStart from "shared-image/page/companyDetail/payStart.svg";
import payAvg from "shared-image/page/companyDetail/payAvg.svg";
import { useCompanyDetail } from "shared-api/company";

import { UpdateInfoLink } from "@pages/company/[companyId]/component/updateInfoLink";
import { Layout } from "@component/layout";

import { NoRegisteredInfoBox } from "../../component/noRegisterdInfoBox";
import { StrongTitle } from "../../component/strongTitle";
import {
  asideContainer,
  container,
  descContainer,
  descMenuBox,
  descMenuText,
  descText,
  flexContainer,
  menuBox,
  menuText,
  moneyInfoContainer,
  payContainer,
  payIconBox,
} from "./style";

export const PayInfoPart: FunctionComponent = () => {
  const router = useRouter();
  const { data: companyDetailData, isLoading } = useCompanyDetail({
    companyId: Number(router.query.companyId) as number,
    isStatic: false,
  });

  if (isLoading || !companyDetailData) {
    return <>loading</>;
  }

  if (companyDetailData.payAvg === null && companyDetailData.payAvg === null) {
    return (
      <section css={container}>
        <NoRegisteredInfoBox infoName="연봉" />
      </section>
    );
  }

  return (
    <>
      <StrongTitle title="연봉 정보" />
      <section css={container}>
        <Layout>
          <div css={flexContainer}>
            <div>
              {companyDetailData.payStart && (
                <div css={payContainer}>
                  <div css={asideContainer}>
                    <div css={payIconBox}>
                      <Image alt="" src={payStart} fill />
                    </div>
                    <div css={menuBox}>
                      <p css={menuText}>평균 초봉</p>
                    </div>
                  </div>
                  <div css={moneyInfoContainer}>
                    <p>
                      <span>{companyDetailData.payStart.toLocaleString("Ko-KR")}</span>
                      만원
                    </p>
                  </div>
                </div>
              )}
              {companyDetailData.payAvg && (
                <div css={payContainer}>
                  <div css={asideContainer}>
                    <div css={payIconBox}>
                      <Image alt="" src={payAvg} fill />
                    </div>
                    <div css={menuBox}>
                      <p css={menuText}>평균 연봉</p>
                    </div>
                  </div>
                  <div css={moneyInfoContainer}>
                    <p>
                      <span>{companyDetailData.payAvg.toLocaleString("Ko-KR")}</span>
                      만원
                    </p>
                  </div>
                </div>
              )}
              {companyDetailData.payDesc && (
                <div css={descContainer}>
                  <div css={descMenuBox}>
                    <p css={descMenuText}>기타 연봉 정보</p>
                  </div>
                  <div css={descText}>
                    <p>{companyDetailData.payDesc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <UpdateInfoLink infoName="연봉" />
        </Layout>
      </section>
    </>
  );
};
