import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommonStatusChip } from "@/components/common";

export default {
  title: "CommonStatusChip",
  component: CommonStatusChip,
  argTypes: {
    status: { description: "칩의 상태를 출력하는 문자열" },
  },
  parameters: {
    componentSubtitle: "현재 등록 상태를 출력하는 칩",
  },
} as ComponentMeta<typeof CommonStatusChip>;

const Template: ComponentStory<typeof CommonStatusChip> = (args) => <CommonStatusChip {...args} />;

export const Default = Template.bind({});
Default.args = { status: "검수중" };
