import { FunctionComponent, useEffect, useRef } from "react";

import { useInfiniteCommunityPostingArr } from "@api/community";
import { dummyArrCreator } from "@util/dummyArrCreator";
import { useModal } from "@recoil/hook/modal";

import { PostingCardListProps } from "./type";
import { PostingCard } from "../postingCard";

export const PostingCardList: FunctionComponent<PostingCardListProps> = ({
  keyword,
  hashTag,
  activeButtonFilter,
}) => {
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

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) => {
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
      // 기존에 IntersectionObserver이 있을 경우
      observerRef.current.disconnect(); // 연결 해제
    }

    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver 새롭게 정의
    if (boxRef.current) observerRef.current.observe(boxRef.current); // boxRef 관찰 시작
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [communityPostingArrData]); // res 값이 변경될때마다 실행

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
      {/* LATER 마지막에 도달했을 시 무한 요청 해결 */}
      <div ref={boxRef} />
    </div>
  );
};
