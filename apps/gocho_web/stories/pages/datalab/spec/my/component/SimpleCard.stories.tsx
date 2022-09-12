import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SimpleCard } from "@pages/datalab/spec/my/component/simpleCard";

export default {
  title: "데이터랩/나의스펙내역/component/SimpleCard",
  component: SimpleCard,
  argTypes: {
    index: {
      description: "배열에서 몇번째인지 구분을 위한 index",
    },
    evalCount: {
      description: "유저가 다른 평가리스트를 평가한 평가카운트",
    },
    currentActiveIndex: {
      description: "현재 활성화된 index",
    },
    setActiveCardIndex: {
      description: "활성화된 index를 기반으로 MySpecCard를 부르기위한 setState",
    },
    mySpecData: {
      description: "render를 위한 데이터 props",
    },
  },
  parameters: {
    componentSubtitle: "데이터랩/나의스펙내역에 단순하게 보여질 나의 평가로그 컴포넌트",
  },
} as ComponentMeta<typeof SimpleCard>;

const Template: ComponentStory<typeof SimpleCard> = (args) => {
  return <SimpleCard {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  index: 1,
  evalCount: 0,
  currentActiveIndex: 0,
  setActiveCardIndex: () => {
    return undefined;
  },
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
