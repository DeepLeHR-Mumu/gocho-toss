import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pagination } from ".";

export default {
  title: "데이터랩/나의스펙내역/component/Pagination",
  component: Pagination,
  argTypes: {
    totalPage: {
      description: "총 페이지 토탈 카운트",
    },
    currentPage: {
      description: "현재 페이지",
    },
    setCurrentPage: {
      description: "선택시 변경될 페이지 setState",
    },
  },
  parameters: {
    componentSubtitle: "데이터랩/나의스펙내역에 배열 카운트에 따른 페이지네이션 컴포넌트",
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  totalPage: 10,
  currentPage: 1,
  setCurrentPage: () => {
    return undefined;
  },
};
