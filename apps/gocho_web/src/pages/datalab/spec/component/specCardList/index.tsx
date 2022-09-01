import { FunctionComponent, useEffect, useRef } from "react";

import { useInfiniteSpecArr } from "@api/spec/useInfiniteSpecArr";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { SpecCardListProps } from "./type";
import { SpecCard } from "../specCard";

export const SpecCardList: FunctionComponent<SpecCardListProps> = ({
  order,
}) => {
  const {
    data: specArrData,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteSpecArr({
    limit: 20,
    order,
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

    observerRef.current = new IntersectionObserver(intersectionObserver, { threshold: 0.2 }); // IntersectionObserver 새롭게 정의
    if (boxRef.current) observerRef.current.observe(boxRef.current); // boxRef 관찰 시작
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specArrData]); // res 값이 변경될때마다 실행

  if (!specArrData || isError || isLoading) {
    return (
      <div>
        {dummyArrCreator(15).map((dummy) => {
          return <SpecCard isSkeleton key={`PostingCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <div>
      {specArrData?.pages.map((page) => {
        return page.map((spec) => {
          return <SpecCard specData={spec} key={spec.id} />;
        });
      })}
      <div ref={boxRef} />
    </div>
  );
};

// return page.data.map((spec) => {
//   return <SpecCard specData={spec} isSkeleton={false} key={spec.id} />;
// });
