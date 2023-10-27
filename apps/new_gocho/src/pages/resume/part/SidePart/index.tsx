import { FC } from "react";

import { Button } from "shared-ui/deeple-ds";

import { getResumeGenerate } from "@/apis/resume/generater";

import { cssObj } from "./style";

export const SidePart: FC<{ resumeId: number }> = ({ resumeId }) => {
  const onResumeGenerate = async () => {
    const res = await getResumeGenerate(resumeId);

    // https://stackoverflow.com/questions/27120757/failed-to-execute-createobjecturl-on-url/33759534
    const binaryString = res.data;

    const blob = new Blob([binaryString], { type: "application/pdf" });

    const link = document.createElement("a");

    link.href = window.URL.createObjectURL(blob);
    link.download = "이력서";

    link.click();

    // const url = window.URL.createObjectURL(new Blob(res.data, { type: "application/pdf" })); // Blob Url 생성
    // // window.open(url, "blob", "width=1200, height=600, resizeable, scrollbars, noopener");
    // window.open(url, "blob");
    // window.URL.revokeObjectURL(url); // 메모리 누수 방지
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
        <p css={cssObj.previewText}>이력서 미리보기</p>
      </Button>
    </section>
  );
};
