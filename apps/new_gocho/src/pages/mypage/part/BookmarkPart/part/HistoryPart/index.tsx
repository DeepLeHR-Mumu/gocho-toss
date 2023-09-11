import { NoListCard } from "../NoListCard";

const isHaveList = false;

export const HistoryPart = () => {
  return (
    <>
      {!isHaveList && <NoListCard text="최근 본 내역이 없습니다." />}
      {isHaveList && <h1>최근 본 내역 리스트</h1>}
    </>
  );
};
