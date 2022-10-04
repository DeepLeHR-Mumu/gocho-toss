import { FunctionComponent } from "react";

import { Layout } from "@component/layout";

import { InfoBox } from "./component/infoCard";
import { buttonCSS, container, wrapper } from "./style";
import { HeaderPartProps } from "./type";

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({ setActivatedMenu, activatedMenu }) => {
  return (
    <section css={wrapper}>
      <Layout>
        <InfoBox />
        <div css={container}>
          <button
            css={buttonCSS(activatedMenu === "companyInfo")}
            type="button"
            onClick={() => {
              setActivatedMenu("companyInfo");
            }}
          >
            기업 정보
          </button>
          <button
            css={buttonCSS(activatedMenu === "jdList")}
            type="button"
            onClick={() => {
              setActivatedMenu("jdList");
            }}
          >
            채용공고 모음
          </button>
        </div>
      </Layout>
    </section>
  );
};
