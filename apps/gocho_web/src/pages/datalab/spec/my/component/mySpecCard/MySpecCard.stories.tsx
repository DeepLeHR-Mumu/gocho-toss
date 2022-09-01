import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MySpecCard } from ".";

export default {
  title: "데이터랩/나의스펙내역/component/MySpecCard",
  component: MySpecCard,
  argTypes: {
    mySpecData: {
      description: "MySpecCard에 기입될 데이터 props",
    },
  },
  parameters: {
    componentSubtitle:
      "데이터랩/나의스펙내역에 SimpleCard 선택시 보여지는 디테일카드 컴포넌트",
  },
} as ComponentMeta<typeof MySpecCard>;

const Template: ComponentStory<typeof MySpecCard> = (args) => {
  return <MySpecCard {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  mySpecData: {
    age: 32,
    award: null,
    career: null,
    certificate: null,
    college: {
      department: undefined,
      grade: undefined,
      maxGrade: undefined,
      uturn: undefined,
    },
    createdTime: 1661230517000,
    desiredIndustry: ["2차전지"],
    desiredTask: ["건설/공사/프로젝트", "환경안전"],
    etc: null,
    gender: "남",
    highschool: {
      type: "검정고시",
      naesin: 3,
      absent: 2,
      tardy: 2,
      leaveEarly: 2,
      classMiss: 2,
    },
    id: 1579,
    image: "default",
    language: null,
    lastEducation: "고졸",
    military: "군필",
    nickname: "유저닉네임",
    score: 3,
    scoreCount: 5,
    secret: true,
  },
};
