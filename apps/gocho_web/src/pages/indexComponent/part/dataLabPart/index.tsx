import { FunctionComponent } from "react";

import { Layout } from "@component/layout";
import { DataLabContainer } from "@component/global/datalabCarousel/datalabContainer";

import { dataLabWrapper, title, textPoint } from "./style";

export const DataLabPart: FunctionComponent = () => {
  return (
    <section css={dataLabWrapper}>
      <Layout>
        <p css={title}>
          합격한 인재들의 <span css={textPoint}>데이터 정보</span> 확인하기 🙌🏻
        </p>
      </Layout>
      <DataLabContainer />
    </section>
  );
};
