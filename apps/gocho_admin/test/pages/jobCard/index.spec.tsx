import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

import { JobCard } from "@/pages/jd/list/component";

describe("공고 리스트 jobCard 컴포넌트 테스트", () => {
  test("상시공고일경우 마감일 표기 체크", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <JobCard
          job={{
            id: 13994,
            applyUrl: "https://naver.com",
            companyName: "고초대졸닷컴",
            title: "테스트용 공고 제목입니다",
            startTime: "2023-04-26T00:00:00",
            endTime: "9999-12-31T23:59",
            task: "공무",
          }}
        />
      </QueryClientProvider>
    );

    expect(screen.getAllByText("상시공고")).toBeTruthy();
  });
});
