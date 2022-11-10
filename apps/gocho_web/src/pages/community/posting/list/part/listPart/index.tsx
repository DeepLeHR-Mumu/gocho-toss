import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useInfiniteCommunityPostingArr } from "shared-api/community";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { postingListInfinityScroll } from "shared-ga/posting";

// import { useModal } from "@recoil/hook/modal";
import { FilterDef, HashtagDef } from "@pages/community/type";

import { PostingCard } from "../../component/postingCard";
import { noSearchDataBox, noSearchDataDesc } from "./style";

export const ListPart: FunctionComponent = () => {
  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const [scrollCount, setScrollCount] = useState(0);

  const router = useRouter();

  // const { setCurrentModal } = useModal();

  const {
    data: communityPostingArrData,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteCommunityPostingArr({
    limit: 10,
    filter: router.query.filter as FilterDef,
    q: router.query.keyword as string,
    hashTag: router.query.hashTag as HashtagDef,
    order: router.query.hashTag as HashtagDef,
  });

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
          return <PostingCard postingData={postingData} key={postingData.id} />;
        });
      })}
      <div ref={boxRef} />
    </div>
  );
};
