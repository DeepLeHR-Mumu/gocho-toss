import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

import { useCommunityPostingArr } from "@api/community";
import { Layout } from "@component/layout";
import { CommunityPostingCard } from "@component/card/communityPosting";
import { CommunityPostingPartSkeleton } from "./component/skeleton";

import { changeOrderDef } from "./type";
import { setCarouselSetting } from "./utils";
import { setPostingOrderButtonArr } from "./constant";
import {
  partContainer,
  headerContainer,
  title,
  buttonArrContainer,
  setPostingOrderButton,
  cardListContainer,
  sliderListContainer,
  buttonCSSCreator,
  showMoreCommunityPostingButton,
} from "./style";

export const CommunityPostingPart: FunctionComponent = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const {
    data: communityPostingArrData,
    isLoading,
    isError,
  } = useCommunityPostingArr({
    filter: setPostingOrderButtonArr[activeButtonIndex].filter,
    limit: 6,
  });

  const changeOrder: changeOrderDef = (newId) => {
    setActiveButtonIndex(newId);
  };

  if (!communityPostingArrData || isError || isLoading) {
    return <CommunityPostingPartSkeleton />;
  }

  return (
    <section css={partContainer}>
      <Layout>
        <div>
          <header css={headerContainer}>
            <h2 css={title}>실시간 커뮤니티 글 모음</h2>
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
        </div>

        <div css={cardListContainer}>
          <Slider
            {...setCarouselSetting()}
            ref={sliderRef}
            css={sliderListContainer}
          >
            {communityPostingArrData.map((communityPostingData) => {
              return (
                <CommunityPostingCard
                  communityPostingData={communityPostingData}
                  key={communityPostingData.id}
                />
              );
            })}
          </Slider>
          <button
            css={buttonCSSCreator("left")}
            type="button"
            onClick={() => {
              return sliderRef.current?.slickPrev();
            }}
            aria-label="이전 커뮤니티 게시글 확인하기"
          >
            <BsChevronLeft />
          </button>
          <button
            css={buttonCSSCreator("right")}
            type="button"
            onClick={() => {
              return sliderRef.current?.slickNext();
            }}
            aria-label="다음 커뮤니티 게시글 확인하기"
          >
            <BsChevronRight />
          </button>
        </div>
        <Link href="/community" passHref>
          <a css={showMoreCommunityPostingButton}>
            실시간 커뮤니티
            <span>
              더보기 <BsChevronRight />
            </span>
          </a>
        </Link>
      </Layout>
    </section>
  );
};
