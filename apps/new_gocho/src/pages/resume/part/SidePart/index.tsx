import { FC, useState } from "react";

import { Button } from "shared-ui/deeple-ds";

import { getResumeGenerate } from "@/apis/resume/generator";

import { cssObj } from "./style";

export const SidePart: FC<{ resumeId: number; currentPart: string }> = ({ resumeId, currentPart }) => {
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
          {["기본정보", "학력", "경력", "자격증", "어학", "대외활동"].map((content) => (
            <li key={content} className={content === currentPart ? "current" : "default"}>
              {content}
            </li>
          ))}
        </ul>
      </div>
      <Button size="small" color="outline" css={cssObj.previewButton} onClick={onResumeGenerate}>
        {isLoading ? <h1>로딩중,,,,</h1> : <p css={cssObj.previewText}>이력서 미리보기</p>}
      </Button>
    </section>
  );
};
