import { ListCard, ListItem } from "../../component";

const itemProps = [
  {
    title: "짱치바고등학교",
    titleDes: "고등학교",
    desciption: "기계공학부",
    date: ["2018.09", "2021.02"],
  },
  {
    title: "디플에이치알공업대학교",
    titleDes: "대학교(2년제)",
    desciption: "얼마나 다녔겠어요~",
    date: ["2020.09", "2022.03"],
  },
  {
    title: "서울대학교",
    titleDes: "대학교(4년제)",
    isUturn: true,
    desciption: "얼마나 다녔겠어요~",
    date: ["2020.09"],
  },
];

export const EducationPart = () => {
  // TODO: 유저아이디 가져오기
  const userId = 12;

  return (
    <div>
      <ListCard title="학력" isRequired userId={userId}>
        {itemProps.map((obj) => (
          <ListItem key={obj.title} {...obj} />
        ))}
      </ListCard>
    </div>
  );
};
