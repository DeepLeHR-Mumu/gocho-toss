import { FC, useState } from "react";

import { Button } from "shared-ui/deeple-ds";

import { getResumeGenerate } from "@/apis/resume/generator";

import { cssObj } from "./style";

export const SidePart: FC<{ resumeId: number }> = ({ resumeId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onResumeGenerate = async () => {
    try {
      setIsLoading(true);

      const res = await getResumeGenerate(resumeId);

      const fileURL = URL.createObjectURL(res);

      const pdfWindow = window.open();

      if (pdfWindow) {
        pdfWindow.location.href = fileURL;
      }

      // TODO: 에러처리 어떻게 할지 질문하기
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.contentsIndexWrapper}>
        <ul css={cssObj.contentsIndexList}>
          <li>기본정보</li>
          <li>학력</li>
          <li>경력</li>
          <li>자격증</li>
          <li>어학</li>
          <li>대외활동</li>
        </ul>
      </div>
      <Button size="small" color="outline" css={cssObj.previewButton} onClick={onResumeGenerate}>
        {isLoading ? <h1>로딩중,,,,</h1> : <p css={cssObj.previewText}>이력서 미리보기</p>}
      </Button>
    </section>
  );
};
