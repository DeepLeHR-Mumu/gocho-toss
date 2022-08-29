import { FunctionComponent, useEffect, useRef } from "react";

import { useInfiniteTipArr } from "@api/tip";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { TipCardListProps } from "./type";
import { TipCard } from "../tipCard";

export const TipCardList: FunctionComponent<TipCardListProps> = ({
  companyId,
  q,
}) => {
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
  }, [infiniteTipArrData]); // res 값이 변경될때마다 실행

  if (!infiniteTipArrData || isError || isLoading) {
    return (
      <div>
        {dummyArrCreator(9).map((dummy) => {
          return <TipCard isSkeleton key={`TipCardSkeleton${dummy}`} />;
        })}
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
      {/* LATER 마지막에 도달했을 시 무한 요청 해결 */}
      <div ref={boxRef} />
    </div>
  );
};
