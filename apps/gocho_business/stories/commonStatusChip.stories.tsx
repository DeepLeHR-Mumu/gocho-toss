import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommonStatusChip } from "@/components/common";

export default {
  title: "CommonStatusChip",
  component: CommonStatusChip,
  argTypes: {
    status: {
      description:
        "칩의 상태를 출력하는 문자열, 백엔드와 연동 시 백엔드 값 실제로 넣어주어야함 - 자동으로 내부에서 변경되어 텍스트 구성, 없을 시 '등록전'",
    },
  },
  parameters: {
    componentSubtitle: "현재 등록 상태를 출력하는 칩",
  },
} as ComponentMeta<typeof CommonStatusChip>;

const Template: ComponentStory<typeof CommonStatusChip> = (args) => <CommonStatusChip {...args} />;

export const Default = Template.bind({});
Default.args = { status: "진행중" };
