import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NoDataDesc } from "@pages/jd/detail/part/common/component/noDataDesc";

export default {
  title: "공고/detail/part/common/component/NoDataDesc",
  component: NoDataDesc,
  parameters: {
    backgrounds: {
      default: "white",
    },
    componentSubtitle: "정보가 없을시 사용되는 표기 컴포넌트",
  },
} as ComponentMeta<typeof NoDataDesc>;

const Template: ComponentStory<typeof NoDataDesc> = (args) => {
  return <NoDataDesc {...args} />;
};

export const 기본 = Template.bind({});

기본.args = {};
