import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiAirplay } from "react-icons/fi";

import { CommonStatusChip } from "@/components/common";

export default {
  title: "CommonStatusChip",
  component: CommonStatusChip,
  argTypes: {
    infoName: {
      description: "출력할 정보의 이름, 구분",
    },
    infoData: {
      description: "출력할 데이터",
    },
    Icon: {
      description: "출력할 정보에 해당되는 아이콘, react-icons",
    },
  },
  parameters: {
    componentSubtitle: "각종 정보 출력을 위한 박스",
  },
} as ComponentMeta<typeof CommonStatusChip>;

const Template: ComponentStory<typeof CommonStatusChip> = (args) => <CommonStatusChip {...args} />;

export const Default = Template.bind({});
Default.args = { infoName: "조회수", infoData: "3399", Icon: FiAirplay };
