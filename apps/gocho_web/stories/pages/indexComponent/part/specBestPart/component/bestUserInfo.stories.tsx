import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BestUserBox } from "@pages/index/part/specBestPart/component/bestUserInfo";

export default {
  title: "메인페이지/specBestPart/BestUserBox",
  component: BestUserBox,
  argTypes: {
    BestUserBox: {
      control: "object",
      description: "props로 전달받은 데이터 배열",
    },
  },
  parameters: {
    componentSubtitle: "메인페이지 - 스펙평가 베스트 9인 유저 리스트 형태",
  },
} as ComponentMeta<typeof BestUserBox>;

const Template: ComponentStory<typeof BestUserBox> = (args) => {
  return <BestUserBox {...args} />;
};

export const 고졸 = Template.bind({});
고졸.args = {
  bestUserData: {
    profileImg: "jobi",
    age: 12,
    score: 3.5,
    desiredTask: ["설계/CAD/CAM"],
    lastEducation: "고졸",
    college: null,
    highschool: { type: "마이스터고" },
    certificate: { level1: 2, level2: 3, level3: 5 },
    user: {
      nickname: "고졸이용자",
      image: "default",
      badge: "default",
    },
    id: 33,
    scoreCount: 33,
  },
};

export const 초대졸 = Template.bind({});
초대졸.args = {
  bestUserData: {
    profileImg: "jobi_chat",
    lastEducation: "초대졸",
    age: 12,
    score: 3.5,
    desiredTask: ["설계/CAD/CAM"],
    college: { department: "화학공학과" },
    highschool: { type: "마이스터고" },
    certificate: { level1: 2, level2: 3, level3: 5 },
    user: {
      nickname: "초대졸이용자",
      image: "default",
      badge: "default",
    },
    id: 33,
    scoreCount: 45,
  },
};
