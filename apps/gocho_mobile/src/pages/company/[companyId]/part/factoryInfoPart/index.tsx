import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useCompanyDetail } from "shared-api/company";

import { Layout } from "@component/layout";
import { UpdateInfoLink } from "@pages/company/[companyId]/component/updateInfoLink";
import { FactoryCard } from "@component/common/organisms/factoryCard";

import { StrongTitle } from "../../component/strongTitle";
import { cardContainer, container } from "./style";

export const FactoryInfoPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDetailData, isLoading } = useCompanyDetail({
    companyId: Number(router.query.companyId),
    isStatic: false,
  });
  if (isLoading || !companyDetailData) {
    return <>loading</>;
  }

  return (
    <section css={container}>
      <StrongTitle title="공장 정보" />
      <Layout>
        <div css={cardContainer}>
          <div>
            {companyDetailData.factoryArr.map((factory) => {
              return <FactoryCard key={factory.name} factoryInfo={factory} />;
            })}
          </div>
        </div>
        <UpdateInfoLink infoName="연봉" />
      </Layout>
    </section>
  );
};
