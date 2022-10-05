import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainJobCard } from "shared-ui/card/MainJobCard";

export default {
  title: "메인페이지/jobPart/MainJobCard",
  component: MainJobCard,
  argTypes: {
    companyName: { control: "text", description: "카드에 출력되는 회사이름" },
    companyId: { control: "number", description: "회사 id" },
    dDay: { control: "number", description: "카드에 출력되는 남은날" },
    title: { control: "text", description: "공고제목" },
    isSkeleton: { description: "로딩, 에러 시 스켈레톤 출력하는 창" },
  },
  parameters: {
    componentSubtitle: "메인페이지 - 실시간 채용 공고에 출력되는 채용공고 카드",
  },
} as ComponentMeta<typeof MainJobCard>;

const Template: ComponentStory<typeof MainJobCard> = (args) => {
  return <MainJobCard {...args} />;
};

export const 기본 = Template.bind({});

기본.args = {
  jobData: {
    id: 3223,
    cut: false,
    companyName: "우리회사",
    companyLogo: "null",
    title: "[물류] 사원0명 채용",
    endTime: 2390878230,
    high: true,
    college: false,
    placeArr: ["서울시", "안성시"],
    rotationArr: ["주간"],
  },
};

export const 에러 = Template.bind({});
에러.args = {
  isSkeleton: true,
};
