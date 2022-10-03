import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useCompanyDetail } from "shared-api/company";

import { Layout } from "@component/layout";
import { UpdateInfoLink } from "@pages/companies/component/updateInfoLink";

import { FactoryCard } from "./component/factoryCard";
import { container, h2Title } from "./style";

export const FactoryPart: FunctionComponent = () => {
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
  return (
    <section>
      <Layout>
        <h2 css={h2Title}>공장 정보</h2>
        <div css={container}>
          <div>
            {companyDetailData.data.factoryArr.map((factory) => {
              return <FactoryCard key={factory.name} factoryInfo={factory} />;
            })}
          </div>
        </div>
        <UpdateInfoLink infoName="연봉" />
      </Layout>
    </section>
  );
};
