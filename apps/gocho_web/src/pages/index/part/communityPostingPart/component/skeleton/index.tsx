import { FunctionComponent } from "react";

import { COMMUNITY_POSTINGS_LIST_URL } from "shared-constant/internalURL";
import { LinkButton } from "shared-ui/common/atom/button";
import { Layout } from "@component/layout";
import { CommunityPostingCardSkeleton } from "@component/card/communityPosting/skeleton";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { setPostingOrderButtonArr } from "../../constant";
import {
  partContainer,
  title,
  buttonArrContainer,
  postingOrderButton,
  cardListContainer,
  colorPoint,
  sliderListContainer,
  linkButtonBox,
} from "./style";

export const CommunityPostingPartSkeleton: FunctionComponent = () => {
  return (
    <section css={partContainer}>
      <Layout>
        <div>
          <header>
            <InvisibleH2 title="생산/기능직 커뮤니티 게시글" />
            <p css={title}>
              <span css={colorPoint}>NEW</span> 실시간 커뮤니티 글 모음 💬
            </p>
            <div css={buttonArrContainer}>
              {setPostingOrderButtonArr.map((button) => {
                return (
                  <button type="button" key={button.text} css={postingOrderButton}>
                    {button.text}
                  </button>
                );
              })}
            </div>
          </header>
        </div>

        <div css={cardListContainer}>
          <div css={sliderListContainer}>
            {dummyArrCreator(4).map((dummy) => {
              return <CommunityPostingCardSkeleton key={`posting${dummy}`} />;
            })}
          </div>
        </div>

        <div css={linkButtonBox}>
          <LinkButton text="실시간 커뮤니티 더보기" linkTo={COMMUNITY_POSTINGS_LIST_URL} variant="filled" />
        </div>
      </Layout>
    </section>
  );
};
