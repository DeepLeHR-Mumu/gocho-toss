import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BasicInfoPart } from "@pages/datalab/spec/detail/[specId]/part/basicInfoPart";

export default {
  title: "데이터랩/스펙디테일/Part/BasicInfoPart",
  component: BasicInfoPart,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙이 출력되는 페이지",
  },
} as ComponentMeta<typeof BasicInfoPart>;

const Template: ComponentStory<typeof BasicInfoPart> = (args) => {
  return <BasicInfoPart {...args} />;
};

export const 초대졸유턴 = Template.bind({});
초대졸유턴.args = {
  basicData: {
    profileImg: "jobi_play",
    nickname: "회원명",
    gender: "남",
    age: 30,
    military: "면제-해당없음",
    desiredTask: ["생산", "공무", "설비"],
    desiredIndustry: ["제약", "바이오", "반도체"],
    lastEducation: "초대졸",
    college: {
      department: "컴퓨터공학",
      grade: 3.7,
      maxGrade: 4.3,
      isUturn: true,
    },
    highschool: {
      type: "마이스터고",
      naesin: 4,
      absent: 2,
      tardy: 3,
      leaveEarly: 2,
      classMiss: 0,
    },
    certificate: {
      data: null,
      level1: 0,
      level2: 2,
      level3: 5,
    },
  },
};

export const 고졸 = Template.bind({});
고졸.args = {
  basicData: {
    profileImg: "jobi_chat",
    nickname: "회원명",
    gender: "남",
    age: 30,
    military: "면제-해당없음",
    desiredTask: ["생산", "공무", "설비"],
    desiredIndustry: ["제약", "바이오", "반도체"],
    lastEducation: "고졸",
    college: {
      department: "컴퓨터공학",
      grade: 3.7,
      maxGrade: 4.3,
      isUturn: true,
    },
    highschool: {
      type: "마이스터고",
      naesin: 4,
      absent: 2,
      tardy: 3,
      leaveEarly: 2,
      classMiss: 0,
    },
    certificate: {
      data: null,
      level1: 0,
      level2: 2,
      level3: 5,
    },
  },
};
