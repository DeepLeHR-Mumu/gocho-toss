import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import payStart from "shared-image/page/companyDetail/payStart.svg";
import payAvg from "shared-image/page/companyDetail/payAvg.svg";
import { UpdateInfoLink } from "@pages/companies/component/updateInfoLink";
import { useCompanyDetail } from "shared-api/company";
import { COLORS } from "shared-style/color";

import { Layout } from "@component/layout";

import { asideContainer, container, imageBox, menuBox, menuText, moneyInfoContainer, payStartContainer } from "./style";
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
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 22.5rem;
            `}
          >
            {companyDetailData.data.payStart && (
              <div css={payStartContainer}>
                <div css={asideContainer}>
                  <div css={imageBox}>
                    <Image src={payStart} objectFit="fill" />
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
              <div
                css={css`
                  display: flex;
                  padding-bottom: 1.6875rem;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  `}
                >
                  <div
                    css={css`
                      width: 5rem;
                      height: 5rem;
                    `}
                  >
                    <Image src={payAvg} objectFit="fill" />
                  </div>
                  <div
                    css={css`
                      padding: 0.5rem;
                      box-shadow: 0px 2px 8px rgba(123, 123, 123, 0.2);
                      border-radius: 1.5rem;
                      width: 116px;
                      text-align: center;
                      width: 7.25rem;
                    `}
                  >
                    <p
                      css={css`
                        color: ${COLORS.BLUE_NEON40};
                        font-weight: 700;
                        font-size: 0.875rem;
                      `}
                    >
                      평균 연봉
                    </p>
                  </div>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  `}
                >
                  <p
                    css={css`
                      font-size: 1.375rem;
                    `}
                  >
                    <span
                      css={css`
                        color: ${COLORS.BLUE_NEON40};
                        font-weight: 700;
                        margin-right: 0.2rem;
                      `}
                    >
                      {companyDetailData.data.payAvg}
                    </span>
                    만원
                  </p>
                </div>
              </div>
            )}
            {companyDetailData.data.payDesc && (
              <div
                css={css`
                  display: flex;
                  align-items: flex-start;
                  gap: 0.5rem;
                  margin-bottom: 1.5rem;
                `}
              >
                <div
                  css={css`
                    padding: 0.5rem;
                    box-shadow: 0px 2px 8px rgba(123, 123, 123, 0.2);
                    border-radius: 1.5rem;
                    width: 7.25rem;
                    text-align: center;
                    flex-shrink: 0;
                  `}
                >
                  <p
                    css={css`
                      color: ${COLORS.GRAY60};
                      font-weight: 700;
                      font-size: 0.875rem;
                      flex-shrink: 0;
                    `}
                  >
                    기타 연봉 정보
                  </p>
                </div>
                <div
                  css={css`
                    border-radius: 1.5rem;
                    background-color: ${COLORS.GRAY90};
                    padding: 0.5rem 1rem;
                  `}
                >
                  <p
                    css={css`
                      font-size: 0.875rem;
                      color: ${COLORS.GRAY10};
                      font-weight: 400;
                    `}
                  >
                    {companyDetailData.data.payDesc}
                  </p>
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
