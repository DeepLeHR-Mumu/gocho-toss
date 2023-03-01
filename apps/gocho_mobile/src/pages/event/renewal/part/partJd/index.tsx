import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import jdCardMobile from "shared-image/event/renewal/jd_card_mobile.png";

import { Layout } from "@component/layout";

import { JOBS_LIST_URL } from "shared-constant/internalURL";
import { desc, flexBox, imgBox, infoBox, infoDesc, linkCSS, title, wrapper } from "./style";

export const PartJd: FunctionComponent = () => {
  return (
    <section css={wrapper}>
      <Layout>
        <strong css={title}>
          중복 채용공고를
          <br />
          하나로 합치다 👀
        </strong>
        <p css={desc}>공고 한번에 채용직무와 지역, 교대정보까지 한눈에 훑어보세요</p>
        <div css={flexBox}>
          <div css={imgBox}>
            <Image src={jdCardMobile} alt="" fill />
          </div>
          <div css={infoBox}>
            <p css={infoDesc}>
              채용시즌 페이지를 가득 채우던 같은 회사의 여러직무공고를 요약카드에서 한번에 확인할 수 있습니다
            </p>
            <Link
              href={{
                pathname: JOBS_LIST_URL,
                query: {
                  page: 1,
                  order: "recent",
                },
              }}
              css={linkCSS}
              passHref
            >
              <FiArrowRight /> 채용공고 보러가기
            </Link>
          </div>
        </div>
      </Layout>
    </section>
  );
};
