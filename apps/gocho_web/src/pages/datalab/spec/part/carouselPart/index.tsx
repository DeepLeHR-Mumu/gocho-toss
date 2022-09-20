import { FunctionComponent } from "react";

import { useUserInfo } from "shared-api/auth";
import { Layout } from "@component/layout";

import { partContainer, title, colorPoint } from "./style";
import { RecommendCardList } from "../../component/recommendCardList";

export const CarouselPart: FunctionComponent = () => {
  const { data: userInfoData, error } = useUserInfo();

  if (!userInfoData || error) {
    return <section css={partContainer} />;
  }

  return (
    <section css={partContainer}>
      <Layout>
        <h2 css={title}>
          <span css={colorPoint}>New </span>
          {userInfoData.nickname} 님의 스펙 평가를 기다리고 있어요.
        </h2>
        <RecommendCardList />
      </Layout>
    </section>
  );
};
