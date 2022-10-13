import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { COMMUNITY_POSTINGS_LIST_URL } from "shared-constant/internalURL";
import { LinkButton } from "shared-ui/common/atom/button";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useCommunityPostingArr } from "shared-api/community";
import { Layout } from "@component/layout";
import { CommunityPostingCard } from "@component/card/communityPosting";
import { CommunityPostingPartSkeleton } from "./component/skeleton";

import { changeOrderDef } from "./type";
import { setCarouselSetting } from "./utils";
import { setPostingOrderButtonArr } from "./constant";
import {
  partContainer,
  title,
  colorPoint,
  buttonArrContainer,
  setPostingOrderButton,
  cardListContainer,
  sliderListContainer,
  buttonCSSCreator,
  buttonBox,
  linkButtonBox,
} from "./style";

export const CommunityPostingPart: FunctionComponent = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const { data: communityPostingArrData, isLoading } = useCommunityPostingArr({
    filter: setPostingOrderButtonArr[activeButtonIndex].filter,
    limit: 6,
  });

  const changeOrder: changeOrderDef = (newId) => {
    setActiveButtonIndex(newId);
  };

  if (!communityPostingArrData || isLoading) {
    return <CommunityPostingPartSkeleton />;
  }

  return (
    <section css={partContainer}>
      <Layout>
        <header>
          <InvisibleH2 title="생산/기능직 커뮤니티 게시글" />
          <p css={title}>
            <span css={colorPoint}>NEW</span> 실시간 커뮤니티 글 모음 💬
          </p>

          <div css={buttonArrContainer}>
            {setPostingOrderButtonArr.map((button, index) => {
              return (
                <button
                  type="button"
                  key={button.text}
                  css={setPostingOrderButton(index === activeButtonIndex)}
                  onClick={() => {
                    changeOrder(index);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
        </header>

        <div css={cardListContainer}>
          <Slider {...setCarouselSetting()} ref={sliderRef} css={sliderListContainer}>
            {communityPostingArrData.map((communityPostingData) => {
              return <CommunityPostingCard communityPostingData={communityPostingData} key={communityPostingData.id} />;
            })}
          </Slider>

          <div css={buttonBox}>
            <button
              css={buttonCSSCreator}
              type="button"
              onClick={() => {
                return sliderRef.current?.slickPrev();
              }}
              aria-label="이전 커뮤니티 게시글 확인하기"
            >
              <BsChevronLeft />
            </button>
            <button
              css={buttonCSSCreator}
              type="button"
              onClick={() => {
                return sliderRef.current?.slickNext();
              }}
              aria-label="다음 커뮤니티 게시글 확인하기"
            >
              <BsChevronRight />
            </button>
          </div>
        </div>

        <div css={linkButtonBox}>
          <LinkButton text="실시간 커뮤니티 더보기" linkTo={COMMUNITY_POSTINGS_LIST_URL} variant="filled" />
        </div>
      </Layout>
    </section>
  );
};
