import { FunctionComponent, useEffect, useRef } from "react";

import { useInfiniteCommunityPostingArr } from "@api/community";
import { dummyArrCreator } from "@util/dummyArrCreator";
import { useModal } from "@recoil/hook/modal";

import { PostingCardListProps } from "./type";
import { PostingCard } from "../postingCard";

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

  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰하고 있는 entry가 화면에 보여지는 경우
        io.unobserve(entry.target); // entry 관찰 해제
        fetchNextPage(); // 다음 페이지 데이터 요청
      }
    });
  };

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(intersectionObserver, {
      threshold: 0.2,
    });
    if (boxRef.current) observerRef.current.observe(boxRef.current);
  }, [communityPostingArrData, intersectionObserver]);

  if (!communityPostingArrData || isError || isLoading) {
    return (
      <div>
        {dummyArrCreator(9).map((dummy) => {
          return <PostingCard isSkeleton key={`PostingCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <div>
      {communityPostingArrData?.pages.map((page) => {
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
