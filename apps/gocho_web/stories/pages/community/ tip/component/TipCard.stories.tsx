import { RecoilRoot } from "recoil";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TipCard } from "@pages/community/tip/component/tipCard";

export default {
  title: "커뮤니티/취업꿀팁/TipCard",
  component: TipCard,
  argTypes: {
    imgSrc: {
      control: "string",
      description: "취업꿀팁 본몬 슬라이드의 CDN 링크",
    },
    title: { control: "string", description: "취업꿀팁 제목" },
    body: { control: "string", description: "취업꿀팁 설명" },
    tagList: { control: "string[]", description: "취업꿀팁 태그 리스트" },
    MSDate: { control: "number", description: "취업꿀팁 작성 날짜" },
    like: { control: "number", description: "해당 꿀팁이 받은 좋아요 수" },
    view: { control: "number", description: "해당 꿀팁 조회수" },
    totalPage: {
      control: "number",
      description: "취업꿀팁 슬라이드 페이지 개수",
    },
    isSkeleton: { description: "로딩, 에러 시 true로 설정되는 변수" },
  },
} as ComponentMeta<typeof TipCard>;

const Template: ComponentStory<typeof TipCard> = (args) => {
  return (
    <RecoilRoot>
      <TipCard {...args} />
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  tipData: {
    id: 2,
    thumbnailSrc: "https://d2nnzfahmszi6w.cloudfront.net/tips/9/1.png",
    title: "SK하이닉스 취업 꿀팁",
    description: "스토리북 취업꿀팁 본문",
    tagArr: ["태그1", "태그2", "태그3", "태그4"],
    createdTime: 1658326933324,
    likeCount: 12,
    viewCount: 23,
    imgPageCount: 9,
  },
};

export const 에러 = Template.bind({});
에러.args = {
  isSkeleton: true,
};
