import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutoEndTimeCheckBox } from "@/pages/jd/edit/component";

export default {
  title: "공고/edit/AutoEndTimeCheckBox",
  component: AutoEndTimeCheckBox,
  argTypes: {
    onClickEvent: {
      description: "선택시 행할 액션을 위한 함수",
    },
    isChecked: {
      description: "최초 default checked 상태를 위한 boolean값",
    },
  },
  parameters: {
    componentSubtitle: "공고 상시공고 클릭시 end_time제거 및 setValue 재정립을 위한 컴포넌트",
  },
} as ComponentMeta<typeof AutoEndTimeCheckBox>;

const Template: ComponentStory<typeof AutoEndTimeCheckBox> = (args) => <AutoEndTimeCheckBox {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  onClickEvent: () => undefined,
  isChecked: true,
};
