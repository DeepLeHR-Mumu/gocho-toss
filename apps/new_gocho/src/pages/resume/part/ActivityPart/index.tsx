import { ListActivityItem, ListCard } from "../../component";

const itemProps: {
  type: "수상" | "봉사" | "기타";
  title: string;
  titleDes: string;
  desciption: string;
  date: string[];
}[] = [
  {
    type: "수상",
    title: "국제 패션 일러스트레이션 공모전",
    titleDes: "한국패션일러스트레이션협회",
    desciption:
      "장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력란 장문의 입력...",
    date: ["2018.09", "2021.02"],
  },
  {
    type: "봉사",
    title: "유기견센터 화제 복구",
    titleDes: "파주유기견센터",
    desciption: "유기견 봉사활동을 했다! 강아지와 고양이 기타축종들이 귀여웠다.",
    date: ["2020.09", "2022.03"],
  },
  {
    type: "기타",
    title: "기타 독주회",
    titleDes: "우리집 앞 놀이터",
    desciption: "기타 독주를 매주 수요일마다 했습니다. 동네 아기 친구들과 함께하는 기타 리코더 합주회~",
    date: ["2020.09"],
  },
];

export const ActivityPart = () => {
  // TODO: 유저아이디 가져오기
  const userId = 12;

  return (
    <div>
      <ListCard title="대외활동" userId={userId}>
        {itemProps.map((obj) => (
          <ListActivityItem key={obj.title} {...obj} />
        ))}
      </ListCard>
    </div>
  );
};
