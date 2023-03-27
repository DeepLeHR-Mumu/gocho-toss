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
            companyId: 119,
            title: "테스트용 공고 제목입니다",
            view: 0,
            startTime: 1679710980000,
            endTime: 253402268340000,
            taskArr: ["공무"],
            eduArr: ["고졸"],
            placeArr: ["기타 근무지"],
            rotationArr: ["5조 3교대"],
            contractArr: ["계약>정규"],
            requiredExpArr: ["경력"],
          }}
        />
      </QueryClientProvider>
    );

    expect(screen.getAllByText("상시공고")).toBeTruthy();
  });
});
