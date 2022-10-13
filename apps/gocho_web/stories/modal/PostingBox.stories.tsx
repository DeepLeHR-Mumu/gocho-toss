import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { PostingBox } from "@component/modal/postingModal";

export default {
  title: "공용 컴포넌트/common/auth/PostingBox",
  component: PostingBox,
  argTypes: {
    nickname: { control: "text", description: "작성사 닉네임" },
    title: { control: "text", description: "posting 제목" },
    body: { control: "text", description: "본문" },
    type: { control: "text", description: "게시글 종류" },
    date: { control: "date", description: "게시글 작성 날짜" },
    like: { control: "number", description: "좋아요 수" },
    view: { control: "number", description: "조회수" },
    commentCount: { control: "number", description: "댓글 갯수" },
    commentList: { control: "list", description: "댓글 리스트" },
  },
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "단일 게시글을 보여주는 모달 창",
  },
} as ComponentMeta<typeof PostingBox>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Template: ComponentStory<typeof PostingBox> = (args) => {
  // const { setCurrentModal } = useModal();

  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <PostingBox {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({
  nickname: "명탐정지훈",
  title: "26살 고졸입니다 ",
  body: "공무원 포기하고 취업하려는데 중견기업 생산직 가능할까요..\r\n효성티엔에스 계약직이랑 이노텍계약직 중소기업 잠깐 다녔었습니다\r\n전기기능사 하나있고\r\n한국사3급이랑지텔프는 공무원준비한다고 해놨습니다 사실상 이건 의미없는거고\r\n현실적으로 취업가능할까요?",
  type: "진로",
  date: "2022-06-24",
  like: 123,
  view: 408,
  commentCount: 2,
  commentList: [
    {
      qna_answer_id: 1229,
      qna_answer_desc: "거기서 안전자격증 하나랑 환경자격증 하나 따서 반도체 대기업 회사 가는게 더 좋을듯 합니다",
      author_id: 4331,
      qna_id: 488,
      re_comment: null,
      user_nickname: "욜롹",
      user_emblem: "null",
    },
    {
      qna_answer_id: 1233,
      qna_answer_desc:
        "산업안전산업기사는 딸예정인데 만약 여기서 자격증을 따게되면 27늦으면 28인데 그때 취업이 가능할까요??",
      author_id: 7860,
      qna_id: 488,
      re_comment: 1229,
      user_nickname: "명탐정지훈",
      user_emblem: "null",
    },
  ],
});
