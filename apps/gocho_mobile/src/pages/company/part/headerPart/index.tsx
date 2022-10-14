import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { Layout } from "@component/layout";
import { InfoBox } from "./component/infoCard";

import { buttonCSS, container, wrapper } from "./style";

export const HeaderPart: FunctionComponent = () => {
  const router = useRouter();

  return (
    <section css={wrapper}>
      <Layout>
        <InfoBox />
        <div css={container}>
          <button
            css={buttonCSS(router.query.info === "detail")}
            type="button"
            onClick={() => {
              router.replace({
                query: {
                  ...router.query,
                  info: "detail",
                },
              });
            }}
          >
            기업 정보
          </button>
          <button
            css={buttonCSS(router.query.info === "jd")}
            type="button"
            onClick={() => {
              router.replace({
                query: {
                  ...router.query,
                  info: "jd",
                  page: 1,
                },
              });
            }}
          >
            채용공고 모음
          </button>
        </div>
      </Layout>
    </section>
  );
};
