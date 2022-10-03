import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

import { Layout } from "@component/layout";
import { COLORS } from "shared-style/color";
import { useCompanyDetail } from "shared-api/company";

import { NoRegisteredInfoBox } from "../../component/noRegisterdInfoBox";
import { UpdateInfoLink } from "../../component/updateInfoLink";

// type ActivatedMenuType = "money" | "health" | "life" | "holiday" | "facility" | "vacation" | "growth" | "etc";

export const WelfarePart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  //   const [activatedTab, setActivatedTab] = useState<ActivatedMenuType>("money");
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  if (isLoading || !isSuccess) {
    // TODO 스켈레톤 넣자
    return <>Loading</>;
  }
  const { money, health, life, holiday, facility, vacation, growth, etc } = companyDetailData.data.welfare;
  return (
    <section>
      <Layout>
        <h2
          css={css`
            color: ${COLORS.GRAY10};
            font-size: 1.375rem;
            font-weight: 500;
            margin-top: 3rem;
            margin-bottom: 1rem;
          `}
        >
          복지정보
        </h2>
      </Layout>
      {money === null &&
        health === null &&
        life === null &&
        holiday === null &&
        facility === null &&
        vacation === null &&
        growth === null &&
        etc === null && <NoRegisteredInfoBox infoName="복지" />}
      <div
        css={css`
          overflow: hidden;
          overflow-x: scroll;
          width: 100%;
          padding: 1rem 0;
          scrollbar-width: none;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <ul
          css={css`
            display: flex;
            font-size: 16px;
            > li {
              flex-shrink: 0;
              margin: 0 2rem;
              display: flex;
              justify-content: center;
            }
          `}
        >
          {companyDetailData.data.welfare.money && <li>급여</li>}
          {companyDetailData.data.welfare.health && <li>의료</li>}
          {companyDetailData.data.welfare.life && <li>생활</li>}
          {companyDetailData.data.welfare.holiday && <li>명절/경조사</li>}
          {companyDetailData.data.welfare.facility && <li>시설</li>}
          {companyDetailData.data.welfare.vacation && <li>휴일/휴가</li>}
          {companyDetailData.data.welfare.growth && <li>자기계발</li>}
          {companyDetailData.data.welfare.etc && <li>기타</li>}
        </ul>
      </div>
      <UpdateInfoLink infoName="복지" />
    </section>
  );
};
