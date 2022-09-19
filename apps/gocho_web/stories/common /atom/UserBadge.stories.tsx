import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UserBadge } from "shared-ui/common/atom/userBadge";

export default {
  title: "공용 컴포넌트/common/atom/UserBadge",
  component: UserBadge,
  argTypes: {
    badge: {
      description: "뱃지 종류",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "유저의 뱃지 호출 컴포넌트",
  },
} as ComponentMeta<typeof UserBadge>;

const Template: ComponentStory<typeof UserBadge> = (args) => {
  return <UserBadge {...args} />;
};

export const 기본 = Template.bind({});

기본.args = {
  badge: "default",
};
