import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { CommunityPostingCard } from "@component/card/communityPosting";
import { CommunityPostingCardSkeleton } from "@component/card/communityPosting/skeleton";

export default {
  title: "공용 컴포넌트/card/CommunityPostingCard",
  component: CommunityPostingCard,
  argTypes: {
    title: { control: "text", description: "게시글 제목" },
    body: { control: "text", description: "게시글 내용" },
    type: {
      control: "radio",
      options: ["진로", "자유", "기업", "자격증"],
      description: "해당 글의 종류",
    },
    nickname: { control: "text", description: "게시글 작성한 유저 닉네임" },
    comment: {
      control: "object",
      description: "해당 게시글에 존재하는 댓글 객체",
    },
  },
  parameters: {
    layout: "padded",
    componentSubtitle: "메인페이지 - 실시간 커뮤니티 글 모음에 출력되는 커뮤니티 글 카드",
  },
} as ComponentMeta<typeof CommunityPostingCard>;

const Template: ComponentStory<typeof CommunityPostingCard> = (args) => {
  return (
    <div
      css={css`
        width: 300px;
      `}
    >
      <CommunityPostingCard {...args} />
    </div>
  );
};

const TemplateSkelton: ComponentStory<typeof CommunityPostingCardSkeleton> = (args) => {
  return (
    <div
      css={css`
        width: 60%;
      `}
    >
      <CommunityPostingCardSkeleton {...args} />
    </div>
  );
};

export const 기본 = Template.bind({});
export const 에러 = TemplateSkelton.bind({});
export const 로딩 = TemplateSkelton.bind({});

기본.args = {
  communityPostingData: {
    title: "포스팅 제목",
    description:
      "Ullamco amet adipisicing incididunt officia sint consequat laborum ullamco proident occaecat deserunt.",
    type: "진로",
    nickname: "유저닉네임",
    commentArr: [
      {
        description: "Quis sint minim exercitation ipsum.",
        nickname: "대댓글 유저 명",
      },
    ],
  },
};

에러.args = {};
로딩.args = {};
