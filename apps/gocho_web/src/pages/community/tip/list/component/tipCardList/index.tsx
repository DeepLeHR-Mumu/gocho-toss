import { FunctionComponent, useEffect, useRef } from "react";

import { useInfiniteTipArr } from "shared-api/tip";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { TipCard } from "../tipCard";

import { TipCardListProps } from "./type";
import { noSearchDataBox, noSearchDataDesc } from "./style";

export const TipCardList: FunctionComponent<TipCardListProps> = ({ companyId, q }) => {
  const {
    data: infiniteTipArrData,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteTipArr({
    limit: 4,
    company: companyId,
    q,
  });

  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          fetchNextPage();
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
  }, [fetchNextPage, infiniteTipArrData]);

  if (!infiniteTipArrData || isError || isLoading) {
    return (
      <div>
        {dummyArrCreator(9).map((dummy) => {
          return <TipCard isSkeleton key={`TipCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (infiniteTipArrData.pages[0].length === 0) {
    return (
      <div css={noSearchDataBox}>
        <p css={noSearchDataDesc}>일치하는 검색 결과가 없습니다</p>
      </div>
    );
  }

  return (
    <div>
      {infiniteTipArrData.pages.map((page) => {
        return page.map((tipData) => {
          return <TipCard tipData={tipData} key={tipData.id} />;
        });
      })}
      <div ref={boxRef} />
    </div>
  );
};
