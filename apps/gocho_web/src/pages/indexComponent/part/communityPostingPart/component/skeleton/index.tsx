import { FunctionComponent } from "react";
import { BsChevronRight } from "react-icons/bs";

import { Layout } from "@component/layout";
import { CommunityPostingCardSkeleton } from "@component/card/communityPosting/skeleton";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { setPostingOrderButtonArr } from "../../constant";
import {
  partContainer,
  headerContainer,
  title,
  buttonArrContainer,
  postingOrderButton,
  cardListContainer,
  sliderListContainer,
  showMoreCommunityPostingButton,
} from "./style";

export const CommunityPostingPartSkeleton: FunctionComponent = () => {
  return (
    <section css={partContainer}>
      <Layout>
        <div>
          <header css={headerContainer}>
            <InvisibleH2 title="생산/기능직 커뮤니티 게시글" />
            <p css={title}>실시간 커뮤니티 글 모음</p>
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
            {dummyArrCreator(3).map((dummy) => {
              return <CommunityPostingCardSkeleton key={`posting${dummy}`} />;
            })}
          </div>
        </div>
        <div css={showMoreCommunityPostingButton}>
          실시간 커뮤니티
          <span>
            더보기 <BsChevronRight />
          </span>
        </div>
      </Layout>
    </section>
  );
};
