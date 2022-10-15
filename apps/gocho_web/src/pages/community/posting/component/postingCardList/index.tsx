import { FunctionComponent, useEffect, useRef, useState } from "react";

import { useInfiniteCommunityPostingArr } from "shared-api/community";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { postingListInfinityScroll } from "shared-ga/posting";

import { useModal } from "@recoil/hook/modal";

import { PostingCardListProps } from "./type";
import { PostingCard } from "../postingCard";
import { noSearchDataBox, noSearchDataDesc } from "./style";

export const PostingCardList: FunctionComponent<PostingCardListProps> = ({ keyword, hashTag, activeButtonFilter }) => {
  const {
    data: communityPostingArrData,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteCommunityPostingArr({
    limit: 10,
    filter: activeButtonFilter,
    q: keyword,
    hashTag,
    order: hashTag,
  });
  const { setCurrentModal } = useModal();
  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 관찰하고 있는 entry가 화면에 보여지는 경우
          io.unobserve(entry.target); // entry 관찰 해제
          setScrollCount((prev) => {
            return prev + 1;
          });
          fetchNextPage(); // 다음 페이지 데이터 요청
        }
      });
    };

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(intersectionObserver, {
      threshold: 0.2,
    });
    if (boxRef.current) observerRef.current.observe(boxRef.current);
  }, [fetchNextPage, communityPostingArrData]);

  useEffect(() => {
    if (scrollCount !== 0) postingListInfinityScroll(scrollCount);
  }, [scrollCount]);

  if (!communityPostingArrData || isError || isLoading) {
    return (
      <div>
        {dummyArrCreator(9).map((dummy) => {
          return <PostingCard isSkeleton key={`PostingCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (communityPostingArrData.pages[0].length === 0) {
    return (
      <div css={noSearchDataBox}>
        <p css={noSearchDataDesc}>일치하는 검색 결과가 없습니다</p>
      </div>
    );
  }

  return (
    <div>
      {communityPostingArrData.pages.map((page) => {
        return page.map((postingData) => {
          return (
            <PostingCard
              modalOpen={() => {
                setCurrentModal("postingModal", postingData);
              }}
              postingData={postingData}
              key={postingData.id}
            />
          );
        });
      })}
      <div ref={boxRef} />
    </div>
  );
};
