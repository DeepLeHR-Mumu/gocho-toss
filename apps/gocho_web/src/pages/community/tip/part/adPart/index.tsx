import { FunctionComponent } from "react";
import Link from "next/link";

import { Layout } from "@component/layout";

import { bannerContainer, partContainer } from "./style";

export const AdPart: FunctionComponent = () => {
  return (
    <section css={partContainer}>
      <Layout>
        <Link href="/" passHref aria-label="임시광고배너">
          <a css={bannerContainer}>사이트 내 핵심메뉴 광고 영역 / 면접리뷰 이벤트 배너 이미지</a>
        </Link>
      </Layout>
    </section>
  );
};
