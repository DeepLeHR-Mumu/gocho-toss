import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DdayBox } from "shared-ui/pages/common/atom/dDayBox";

export default {
  title: "공용 컴포넌트/common/atom/DdayBox",
  component: DdayBox,
  argTypes: {
    endTime: { description: "해당 공고의 종료 시간을 표현하는 millisecond" },
  },
  parameters: {
    componentSubtitle: "Dday 표시를 위해 사용되는 박스",
    backgrounds: {
      default: "white",
    },
  },
} as ComponentMeta<typeof DdayBox>;

const Template: ComponentStory<typeof DdayBox> = (args) => {
  return <DdayBox {...args} />;
};

// Dday일 경우 -> getTime ms의 오차 때문에 50000ms 추가
export const Dday = Template.bind({});
Dday.args = { endTime: new Date().getTime() + 5000000 };

// 3.0012일 후
export const D3 = Template.bind({});
D3.args = {
  endTime: new Date().getTime() + 259200000,
};

// 4.0012일 후
export const D4 = Template.bind({});
D4.args = {
  endTime: new Date().getTime() + 345700000,
};

// 500초전
export const 만료500초후 = Template.bind({});
만료500초후.args = { endTime: new Date().getTime() - 500000 };
