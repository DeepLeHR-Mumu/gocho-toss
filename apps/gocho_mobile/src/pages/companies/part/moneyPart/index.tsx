import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import payStart from "shared-image/page/companyDetail/payStart.svg";
import payAvg from "shared-image/page/companyDetail/payAvg.svg";
import { UpdateInfoLink } from "@pages/companies/component/updateInfoLink";
import { useCompanyDetail } from "shared-api/company";

import { Layout } from "@component/layout";

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
import { NoRegisteredInfoBox } from "../../component/noRegisterdInfoBox";

export const MoneyPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  if (isLoading || !isSuccess) {
    return <>loading</>;
  }

  if (companyDetailData.data.payAvg === null && companyDetailData.data.payAvg === null) {
    return (
      <section css={container}>
        <NoRegisteredInfoBox infoName="연봉" />
      </section>
    );
  }
  return (
    <section css={container}>
      <Layout>
        <div css={flexContainer}>
          <div>
            {companyDetailData.data.payStart && (
              <div css={payContainer}>
                <div css={asideContainer}>
                  <div css={payIconBox}>
                    <Image src={payStart} layout="fill" objectFit="contain" />
                  </div>
                  <div css={menuBox}>
                    <p css={menuText}>평균 초봉</p>
                  </div>
                </div>
                <div css={moneyInfoContainer}>
                  <p>
                    <span>{companyDetailData.data.payStart}</span>
                    만원
                  </p>
                </div>
              </div>
            )}
            {companyDetailData.data.payAvg && (
              <div css={payContainer}>
                <div css={asideContainer}>
                  <div css={payIconBox}>
                    <Image src={payAvg} layout="fill" objectFit="contain" />
                  </div>
                  <div css={menuBox}>
                    <p css={menuText}>평균 연봉</p>
                  </div>
                </div>
                <div css={moneyInfoContainer}>
                  <p>
                    <span>{companyDetailData.data.payAvg}</span>
                    만원
                  </p>
                </div>
              </div>
            )}
            {companyDetailData.data.payDesc && (
              <div css={descContainer}>
                <div css={descMenuBox}>
                  <p css={descMenuText}>기타 연봉 정보</p>
                </div>
                <div css={descText}>
                  <p>{companyDetailData.data.payDesc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <UpdateInfoLink infoName="연봉" />
      </Layout>
    </section>
  );
};
