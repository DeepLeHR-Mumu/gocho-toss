import { FunctionComponent } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight, MdClear } from "react-icons/md";

import { Layout } from "@component/layout";
import { COMMUNITY_TIPS_LIST_URL } from "shared-constant/internalURL";

import { topBannerWrapper, topBannerPosition, topBannerContainer, bannerDesc, closeButton, linkButton } from "./style";

export const TopBannerPart: FunctionComponent = () => {
  return (
    <article css={topBannerWrapper}>
      <Layout>
        <div css={topBannerPosition}>
          <div css={topBannerContainer}>
            <p css={bannerDesc}>
              <span>인기 취업 꿀팁</span>을 보고 싶다면?
            </p>
            <Link href={COMMUNITY_TIPS_LIST_URL} passHref>
              <a css={linkButton}>
                꿀팁보기 <MdKeyboardArrowRight />
              </a>
            </Link>
          </div>
          <button css={closeButton} type="button" aria-label="광고 바 닫기">
            <MdClear />
          </button>
        </div>
      </Layout>
    </article>
  );
};
