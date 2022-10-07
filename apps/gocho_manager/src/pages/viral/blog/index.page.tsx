import type { NextPage } from "next";

import { mainContainer, pageTitle } from "@style/commonStyles";

import { useJobArr } from "shared-api/job";

import { dateConverter } from "shared-util/date";
import { JobDef } from "../type";
import { sectionContainer, sectionTitle, buttonContainer, naverButton } from "./style";

const Blog: NextPage = () => {
  const { data: jobDataArr } = useJobArr({
    order: "popular",
    filter: "valid", // 나중에 todayUpload로 변경
    limit: 10,
  });

  const copyBlogTodayJob = async (jobList: JobDef[]) => {
    let text = "";
    jobList.map((job) => {
      const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
      const { year: endYear } = dateConverter(job.endTime);
      const endDate = endYear === 9999 ? "상시" : `~ ${startYear}-${startMonth}-${startDate} 까지`;

      text += `🚀 ${job.companyName}\n${job.title}\n- 접수기간 : ${endDate}\n`;
      text += `- ${job.placeArr[0][0]} ${job.placeArr[0][1]} ${
        job.placeArr.length !== 1 ? `외 ${job.placeArr.length - 1}곳` : ""
      }\n`;
      text += `- ${job.high ? "고졸, " : ""}${job.college ? "초대졸, " : ""}`;
      let taskString = "";
      job.taskArr.map((task, index, taskArr) => {
        taskString += index + 1 === taskArr.length ? `${task}` : `${task}/`;
        return taskString;
      });
      text += `${taskString}\n`;
      text += `- ${job.rotationArr[0]} ${
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

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>바이럴 마케팅</h2>
      <section css={sectionContainer}>
        <h3 css={sectionTitle}>오늘의 공고 복사하기</h3>
      </section>

      <section css={sectionContainer}>
        <h3 css={sectionTitle}>네이버 블로그 복사하기</h3>
        {jobDataArr && (
          <div css={buttonContainer}>
            <button
              css={naverButton}
              type="button"
              onClick={() => {
                return copyBlogTodayJob(jobDataArr.jobDataArr);
              }}
            >
              오늘의 채용공고 복사하기
            </button>
            <button
              css={naverButton}
              type="button"
              onClick={() => {
                return copyBlogTag(jobDataArr.jobDataArr);
              }}
            >
              태그 복사하기
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
