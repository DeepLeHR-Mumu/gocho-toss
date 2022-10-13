import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";

export default {
  title: "공용 컴포넌트/common/atom/CommentLikeButton",
  component: CommentLikeButton,
  argTypes: {
    setLikeSubmit: { description: "추천 post 액션 함수" },
    count: { description: "현재 카운트된 추천수" },
  },
  parameters: {
    backgrounds: {
      default: "white",
    },
    componentSubtitle: "채팅창 부분에 공통으로 사용되는 추천버튼 컴포넌트",
  },
} as ComponentMeta<typeof CommentLikeButton>;

const Template: ComponentStory<typeof CommentLikeButton> = (args) => {
  return <CommentLikeButton {...args} />;
};

export const 추천버튼 = Template.bind({});
추천버튼.args = {
  setLikeSubmit: () => {
    return undefined;
  },
  count: 10,
};
