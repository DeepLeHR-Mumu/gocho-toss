import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContainerBox } from "@pages/datalab/spec/register/component";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/ContainerBox",
  component: ContainerBox,
  argTypes: {
    optionObj: {
      description: "콘테이너박스의 스타일을 위한 옵션객체 {location, marginValue, maxWidth}",
    },
  },
  parameters: {
    componentSubtitle: "maxWidth와 마진의 방향,범위를 주기위한 폼전용 콘테이너 컴포넌트",
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof ContainerBox>;

const Template: ComponentStory<typeof ContainerBox> = (args) => {
  return <ContainerBox {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  optionObj: {
    location: "top",
    marginValue: 2,
    maxWidth: 2,
  },
};
