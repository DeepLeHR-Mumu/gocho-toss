import type { NextPage } from "next";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util/date";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { useJobArr } from "@api/job/useJobArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { JobDef } from "../type";

import {
  sectionContainer,
  sectionTitle,
  jobContainer,
  jobInfoContainer,
  companyInfo,
  infoName,
  jobTitle,
  companyLogo,
  infoBox,
  info,
  buttonContainer,
  buttonBox,
  kakaoButton,
  copyButton,
} from "./style";

const Instagram: NextPage = () => {
  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    order: "popular",
    // filter: "valid",
    limit: 10,
  });

  const copyKakaoTitle = async (job: JobDef) => {
    const text = `🚀 ${job.companyName} ${job.title}`;
    try {
      await navigator.clipboard.writeText(text);
      alert("카카오뷰 제목이 복사 되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  const copyKakaoDesc = async (job: JobDef) => {
    const text = `🚀 ${job.companyName} ${job.title}`;
    try {
      await navigator.clipboard.writeText(text);
      alert("카카오뷰 설명이 복사 되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  const copyKakaoURL = async (job: JobDef) => {
    const text = `https://고초대졸.com/jd/detail/${job.id}?utm_source=kakaoview&utm_medium=blog`;
    try {
      await navigator.clipboard.writeText(text);
      alert("카카오뷰 URL이 복사 되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  const copyInstagramURL = async (job: JobDef) => {
    const text = `https://고초대졸.com/jd/detail/${job.id}?utm_source=instagram&utm_medium=story&utm_campaign=story_detail`;
    try {
      await navigator.clipboard.writeText(text);
      alert("인스타그램 URL이 복사 되었습니다!");
    } catch (error) {
      alert("오류!");
    }
  };

  if (!jobDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>바이럴 마케팅</h2>
      <section css={sectionContainer}>
        <h3 css={sectionTitle}>인스타그램 & 카카오뷰</h3>
        <ul>
          {jobDataArr.jobDataArr.map((job) => {
            const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(job.endTime);

            return (
              <li css={jobContainer}>
                <div css={jobInfoContainer}>
                  <div css={companyLogo}>
                    <Image layout="fill" objectFit="contain" src={job.companyLogo || defaultCompanyLogo} alt="" />
                  </div>
                  <div css={companyInfo}>
                    <div css={infoName}>{job.companyName}</div>
                    <div css={jobTitle}>{job.title}</div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>채용 분야</p>
                    <div css={info}>{job.taskArr}</div>
                    <p css={infoName}>학력</p>
                    <div css={info}>
                      {job.high && "고졸"} {job.college && "초대졸"}
                    </div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>시작 날짜</p>
                    <div css={info}>
                      {startYear}-{startMonth}-{startDate}
                    </div>
                    <p css={infoName}>종료 날짜</p>
                    <div css={info}>{endYear === 9999 ? "상시공고" : `${endYear}-${endMonth}-${endDate}`}</div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>근무지</p>
                    <div css={info}>
                      {job.placeArr[0]} {job.placeArr[1]}
                      <br />
                      {job.placeArr.length !== 1 && `외 ${job.placeArr.length - 1}곳`}
                    </div>
                    <p css={infoName}>교대</p>
                    <div css={info}>
                      {job.rotationArr[0]} <br />
                      {job.rotationArr.length !== 1 && `외 ${job.rotationArr.length - 1}형태`}
                    </div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>조회수</p>
                    <div css={info}>{job.view}</div>
                  </div>
                </div>
                <div css={buttonContainer}>
                  <div css={buttonBox}>
                    <strong>카카오뷰</strong>
                    <button
                      type="button"
                      css={kakaoButton}
                      onClick={() => {
                        copyKakaoTitle(job);
                      }}
                    >
                      제목 복사
                    </button>
                    <button
                      type="button"
                      css={kakaoButton}
                      onClick={() => {
                        copyKakaoDesc(job);
                      }}
                    >
                      내용 복사
                    </button>
                    <button
                      type="button"
                      css={kakaoButton}
                      onClick={() => {
                        copyKakaoURL(job);
                      }}
                    >
                      URL 복사
                    </button>
                  </div>
                  <div css={buttonBox}>
                    <strong>인스타그램 스토리</strong>
                    <button
                      type="button"
                      css={copyButton}
                      onClick={() => {
                        copyInstagramURL(job);
                      }}
                    >
                      URL 복사
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Instagram;
