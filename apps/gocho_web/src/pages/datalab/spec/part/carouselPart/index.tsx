import { FunctionComponent } from "react";

import { useUserInfo } from "shared-api/auth";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { partContainer, title, colorPoint } from "./style";
import { RecommendCardList } from "../../component/recommendCardList";

export const CarouselPart: FunctionComponent = () => {
  const { data: userInfoData, error } = useUserInfo();

  if (!userInfoData || error) {
    return (
      <section css={partContainer}>
        <InvisibleH2 title="평가되지 않은 스펙" />
        <Layout>
          <strong css={title}>
            <span css={colorPoint}>New </span>
            스펙 평가를 기다리고 있어요 👀
          </strong>
          <RecommendCardList />
        </Layout>
      </section>
    );
  }

  return (
    <section css={partContainer}>
      <InvisibleH2 title="평가되지 않은 스펙" />
      <Layout>
        <strong css={title}>
          <span css={colorPoint}>New </span>
          {userInfoData.nickname} 님의 스펙 평가를 기다리고 있어요 👀
        </strong>
        <RecommendCardList />
      </Layout>
    </section>
  );
};
