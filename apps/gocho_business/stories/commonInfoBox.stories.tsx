import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiAirplay } from "react-icons/fi";

import { CommonInfoBox } from "@/components";

export default {
  title: "CommonInfoBox",
  component: CommonInfoBox,
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
} as ComponentMeta<typeof CommonInfoBox>;

const Template: ComponentStory<typeof CommonInfoBox> = (args) => <CommonInfoBox {...args} />;

export const Default = Template.bind({});
Default.args = { infoName: "조회수", infoData: "3399", Icon: FiAirplay };
