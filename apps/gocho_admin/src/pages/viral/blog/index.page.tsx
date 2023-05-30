import { dateConverter } from "shared-util";

import { ReactElement } from "react";
import { useJdArr } from "@/api";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { LoadingScreen, ErrorScreen, GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { JobDef } from "../type";
import { sectionContainer, sectionTitle, buttonContainer, naverButton, jdButton } from "./style";

const Blog: NextPageWithLayout = () => {
  const {
    data: jdDataArr,
    isLoading,
    isError,
  } = useJdArr({
    order: "popular",
    filter: "viral",
    size: 50,
  });

  const copyViral = async (jobList: JobDef[]) => {
    let text = "";
    const date = new Date();
    text += "💡 고초대졸닷컴 오늘의 채용공고 소식\n";
    text += `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}\n\n`;
    text += `------ \n\n`;

    jobList.map((job) => {
      const { year: jobYear, date: jobDate } = dateConverter(job.endTime);
      const deadline = jobYear === "9999" ? "상시" : `~ ${jobDate} 까지`;

      text += `🚀 ${job.companyName}\n${job.title}\n- 접수기간 : ${deadline}\n`;
      text += `- 직무: ${job.task}\n`;
      text += `- 채용형태: ${job.contract}\n`;
      text += `- 근무지: ${job.placeArr[0]} ${job.placeArr.length !== 1 ? `외 ${job.placeArr.length - 1}곳` : ""}\n`;
      text += `- 근무형태: ${job.rotationArr[0]} ${
        job.rotationArr.length !== 1 ? `외 ${job.rotationArr.length - 1}형태` : ""
      }\n`;
      text += `https://고초대졸.com/jd/detail/${job.id}?utm_source=kakaotalk&utm_medium=chat&utm_campaign=viral\n\n`;
      return text;
    });

    try {
      await navigator.clipboard.writeText(text);
      alert("오늘의 채용공고가 복사되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  const copyBlogTodayJob = async (jobList: JobDef[]) => {
    let text = "";
    jobList.map((job) => {
      const { year: endYear, date: endDate } = dateConverter(job.endTime);
      const deadline = endYear === "9999" ? "상시" : `~ ${endDate} 까지`;

      text += `🚀 ${job.companyName}\n${job.title}\n- 접수기간 : ${deadline}\n`;
      text += `- 직무: ${job.task}\n`;
      text += `- 채용형태: ${job.contract}\n`;
      text += `- 근무지: ${job.placeArr[0]} ${job.placeArr.length !== 1 ? `외 ${job.placeArr.length - 1}곳` : ""}\n`;
      text += `- 근무형태: ${job.rotationArr[0]} ${
        job.rotationArr.length !== 1 ? `외 ${job.rotationArr.length - 1}형태` : ""
      }\n\n`;
      return text;
    });
    text += "https://고초대졸.com?utm_source=naver&utm_medium=blog&utm_campaign=today";

    try {
      await navigator.clipboard.writeText(text);
      alert("네이버 블로그 오늘의 채용공고가 복사되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  const copyBlogTag = async (jobList: JobDef[]) => {
    let text =
      "#고초대졸 #고초대졸닷컴 #생산직 #현장직 #기능직 #대기업생산직 #채용 #취업 #구인구직 #고초채용 #생산직채용 #취업플랫폼 ";
    jobList.map((job) => {
      text += `#${job.companyName} `;
      return text;
    });
    try {
      await navigator.clipboard.writeText(text);
      alert("네이버 블로그 하단 태그가 복사되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  if (!jdDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>바이럴 마케팅</h2>
      <section css={sectionContainer}>
        <h3 css={sectionTitle}>오늘의 공고</h3>
        <div css={buttonContainer}>
          <button css={jdButton} type="button" onClick={() => copyViral(jdDataArr.jdDataArr)}>
            오늘의 공고 복사하기
          </button>
        </div>
      </section>

      <section css={sectionContainer}>
        <h3 css={sectionTitle}>네이버 블로그</h3>
        <div css={buttonContainer}>
          <button css={naverButton} type="button" onClick={() => copyBlogTodayJob(jdDataArr.jdDataArr)}>
            오늘의 채용공고 복사하기
          </button>
          <button css={naverButton} type="button" onClick={() => copyBlogTag(jdDataArr.jdDataArr)}>
            태그 복사하기
          </button>
        </div>
      </section>
    </main>
  );
};

Blog.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default Blog;
