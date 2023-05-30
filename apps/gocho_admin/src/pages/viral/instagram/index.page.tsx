import Image from "next/image";
import { ReactElement } from "react";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util";

import { useJdArr } from "@/api";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen, GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

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
  infoText,
  longInfoBox,
  placeContainer,
  buttonContainer,
  buttonBox,
  kakaoButton,
  copyButton,
} from "./style";

const Instagram: NextPageWithLayout = () => {
  const {
    data: jdDataArr,
    isLoading,
    isError,
  } = useJdArr({
    order: "popular",
    filter: "viral",
    size: 50,
  });

  const copyMoreJobLink = async () => {
    const text = `https://고초대졸.com/jd/list/?utm_source=instagram&utm_medium=story&utm_campaign=story_detail`;
    await navigator.clipboard.writeText(text);
  };

  const copyGoWebsiteLink = async () => {
    const text = `https://고초대졸.com/?utm_source=instagram&utm_medium=story&utm_campaign=story_detail`;
    await navigator.clipboard.writeText(text);
  };

  const copyKakaoTitle = async (job: JobDef) => {
    const text = `🚀 ${job.companyName} ${job.title}`;
    await navigator.clipboard.writeText(text);
  };

  const copyKakaoDesc = async (job: JobDef) => {
    let text = "";
    const { year: endYear, date: endDate } = dateConverter(job.endTime);
    const deadline = endYear === "9999" ? "상시" : `~ ${endDate} 까지`;

    text += `🚀 ${job.companyName}\n${job.title}\n- 접수기간 : ${deadline}\n`;
    text += `- 직무: ${job.task}\n`;
    text += `- 채용형태: ${job.contract}\n`;
    text += `- 근무지: ${job.placeArr[0]} ${job.placeArr.length !== 1 ? `외 ${job.placeArr.length - 1}곳` : ""}\n`;
    text += `- 근무형태: ${job.rotationArr[0]} ${
      job.rotationArr.length !== 1 ? `외 ${job.rotationArr.length - 1}형태` : ""
    }\n\n`;
    navigator.clipboard.writeText(text);
  };

  const copyKakaoURL = async (job: JobDef) => {
    const text = `https://고초대졸.com/jd/detail/${job.id}?utm_source=kakaoview&utm_medium=blog`;
    navigator.clipboard.writeText(text);
  };

  const copyInstagramURL = async (job: JobDef) => {
    const text = `https://고초대졸.com/jd/detail/${job.id}?utm_source=instagram&utm_medium=story&utm_campaign=story_detail`;
    navigator.clipboard.writeText(text);
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
        <h3 css={sectionTitle}>인스타그램 & 카카오뷰</h3>
        <div css={buttonContainer}>
          <button type="button" css={copyButton} onClick={copyMoreJobLink}>
            더 많은 채용공고 보러가기 복사
          </button>
          <button type="button" css={copyButton} onClick={copyGoWebsiteLink}>
            고초대졸닷컴 바로가기 복사
          </button>
        </div>

        <ul>
          {jdDataArr.jdDataArr.map((job) => {
            const { date: startDate } = dateConverter(job.startTime);
            const { year: endYear, date: endDate } = dateConverter(job.endTime);

            return (
              <li key={job.id} css={jobContainer}>
                <div css={jobInfoContainer}>
                  <div css={companyLogo}>
                    <Image src={job.companyLogo || defaultCompanyLogo} fill alt="" sizes="1" />
                  </div>
                  <div css={companyInfo}>
                    <div css={infoName}>{job.companyName}</div>
                    <div css={jobTitle}>{job.title}</div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>채용 분야</p>
                    <div css={info}>
                      <p key={job.task} css={infoText}>
                        {job.task}
                      </p>
                    </div>
                    <p css={infoName}>학력</p>
                    <div css={info}>
                      <p key={`${job.id}${job.edu}`} css={infoText}>
                        {job.edu}
                      </p>
                    </div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>교대</p>
                    <div css={info}>
                      {job.rotationArr.map((rotation) => (
                        <p key={`${job.id}${rotation}`} css={infoText}>
                          {rotation}
                        </p>
                      ))}
                    </div>
                    <p css={infoName}>계약 형태</p>
                    <div css={info}>
                      <p key={`${job.id}${job.contract}`} css={infoText}>
                        {job.contract}
                      </p>
                    </div>
                  </div>
                  <div css={longInfoBox}>
                    <p css={infoName}>근무지</p>
                    <div css={placeContainer}>
                      <p>{job.placeArr[0]}</p>
                      <p>{job.placeArr.length === 2 && job.placeArr[1]}</p>
                      <p>{job.placeArr.length > 2 ? `외 ${job.placeArr.length - 2}곳` : ""}</p>
                    </div>
                    <p css={infoName}>날짜</p>
                    <div css={info}>
                      {startDate}~{endYear === "9999" ? "상시공고" : `${endDate}`}
                    </div>
                  </div>
                  <div css={infoBox}>
                    <p css={infoName}>경력 조건</p>
                    <div css={info}>
                      <p key={`${job.id}${job.requiredExp}`} css={infoText}>
                        {job.requiredExp}
                      </p>
                    </div>
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

Instagram.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default Instagram;
