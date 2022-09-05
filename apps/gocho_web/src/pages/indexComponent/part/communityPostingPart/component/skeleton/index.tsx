import { FunctionComponent } from "react";
import { BsChevronRight } from "react-icons/bs";

import { Layout } from "@component/layout";
import { CommunityPostingCardSkeleton } from "@component/card/communityPosting/skeleton";
import { dummyArrCreator } from "@util/dummyArrCreator";

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
            <h2 css={title}>실시간 커뮤니티 글 모음</h2>
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
