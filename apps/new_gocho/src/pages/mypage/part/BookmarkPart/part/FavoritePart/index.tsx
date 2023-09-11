import { NoListCard } from "../NoListCard";

const isHaveList = false;

export const FavoritePart = () => {
  return (
    <>
      {!isHaveList && <NoListCard text="아직 찜한 공고가 없습니다." linkText="공고 보러가기" href="jd" />}
      {isHaveList && <h1>찜한 공고 리스트</h1>}
    </>
  );
};
