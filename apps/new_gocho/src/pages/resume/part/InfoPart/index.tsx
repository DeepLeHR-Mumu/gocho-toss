import { useState } from "react";
import { ListCard, ResumeDropDown } from "../../component";

const menuArr = [
  {
    content: "고등학교",
  },
  {
    content: "대학교 (2,3년제)",
  },
  {
    content: "대학교 ( 4년제 )",
  },
  {
    content: "기타",
  },
];

export const InfoPart = () => {
  // TODO: 유저아이디 가져오기
  const userId = 12;

  const [education, setEducation] = useState("고등학교");

  return (
    <div>
      <ListCard title="기본정보" isRequired iconType="edit" userId={userId}>
        <ResumeDropDown setValue={setEducation} value={education} menuArr={menuArr} />
      </ListCard>
    </div>
  );
};
