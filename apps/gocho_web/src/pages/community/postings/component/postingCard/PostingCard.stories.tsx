import { RecoilRoot } from "recoil";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostingCard } from ".";

export default {
  title: "커뮤니티/게시판/PostingCard",
  component: PostingCard,
  argTypes: {
    type: {
      control: '"진로" | "자유" | "기업" | "자격증"',
      description: "게시글의 종류",
    },
    title: { control: "string", description: "게시글 제목" },
    description: { control: "string", description: "게시글 본문" },
    nickname: { control: "string", description: "게시글 작성자의 닉네임" },
    createdTime: {
      control: "number",
      description: "게시글 작성 시간, ms로 표시됨",
    },
    like: { control: "number", description: "게시글이 받은 좋아요 수" },
    view: { control: "number", description: "게시글 조회수" },
    commentCount: {
      control: "number",
      description: "게시글에 달린 댓글 및 대댓글 개수",
    },
    isSkeleton: { description: "로딩, 에러 시 true로 설정되는 변수" },
  },
} as ComponentMeta<typeof PostingCard>;

const Template: ComponentStory<typeof PostingCard> = (args) => {
  return (
    <RecoilRoot>
      <PostingCard {...args} />
    </RecoilRoot>
  );
};
export const 기본 = Template.bind({});
기본.args = {
  postingData: {
    userID: 3742,
    type: "자유",
    title: "제목요",
    description: "설명",
    nickname: "닉네임",
    createdTime: 239082093,
    like: 32,
    view: 23223,
    commentCount: 3,
  },
};

export const 에러 = Template.bind({});
에러.args = {
  isSkeleton: true,
};
