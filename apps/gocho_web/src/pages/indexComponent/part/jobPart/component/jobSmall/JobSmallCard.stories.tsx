import { ComponentStory, ComponentMeta } from "@storybook/react";

import { JobSmallCard } from ".";

export default {
  title: "메인페이지/jobPart/JobSmallCard",
  component: JobSmallCard,
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
} as ComponentMeta<typeof JobSmallCard>;

const Template: ComponentStory<typeof JobSmallCard> = (args) => {
  return <JobSmallCard {...args} />;
};

export const 기본 = Template.bind({});

기본.args = {
  jobData: {
    companyName: "우리회사",
    companyLogo: "null",
    title: "공고이름인데요",
    endTime: 2390878230,
  },
};

export const 에러 = Template.bind({});
에러.args = {
  isSkeleton: true,
};
