import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentDislikeButton } from "shared-ui/pages/common/atom/commentDislikeButton";

export default {
  title: "공용 컴포넌트/common/atom/CommentDislikeButton",
  component: CommentDislikeButton,
  argTypes: {
    setDislikeSubmit: { description: "연막 post 액션 함수" },
    count: { description: "현재 카운트된 연막수" },
  },
  parameters: {
    backgrounds: {
      default: "white",
    },
    componentSubtitle: "채팅창 부분에 공통으로 사용되는 연막버튼 컴포넌트",
  },
} as ComponentMeta<typeof CommentDislikeButton>;

const Template: ComponentStory<typeof CommentDislikeButton> = (args) => {
  return <CommentDislikeButton {...args} />;
};

export const 연막버튼 = Template.bind({});
연막버튼.args = {
  setDislikeSubmit: () => {
    return undefined;
  },
  count: 10,
};
