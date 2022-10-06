import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { useJobArr } from "shared-api/job";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util/date";

import {
  sectionContainer,
  jobContainer,
  companyInfo,
  infoName,
  jobTitle,
  companyLogo,
  infoBox,
  info,
  buttonContainer,
} from "./style";

const Instagram: NextPage = () => {
  const { data: jobDataArr } = useJobArr({
    order: "popular",
    filter: "valid",
    limit: 10,
  });

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>바이럴 마케팅</h2>
      <h3>인스타그램 & 카카오뷰 복사하기</h3>
      <section css={sectionContainer}>
        {jobDataArr?.jobDataArr.map((job) => {
          const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
          const { year: endYear, month: endMonth, date: endDate } = dateConverter(job.endTime);

          return (
            <div>
              <div css={jobContainer}>
                <div css={companyInfo}>
                  <div css={infoName}>{job.companyName}</div>
                  <div css={companyLogo}>
                    <Image layout="fill" objectFit="contain" src={job.companyLogo || defaultCompanyLogo} alt="" />
                  </div>
                </div>

                <div css={jobTitle}>{job.title}</div>
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
                    {job.placeArr[0][0]} {job.placeArr[0][1]}{" "}
                    {job.placeArr.length !== 1 && `외 ${job.placeArr.length - 1}곳`}
                  </div>
                  <p css={infoName}>교대</p>
                  <div css={info}>
                    {job.rotationArr[0]} {job.rotationArr.length !== 1 && `외 ${job.rotationArr.length - 1}형태`}
                  </div>
                </div>
                <div css={infoBox}>
                  <p css={infoName}>조회수</p>
                  <div css={info}>{job.view}</div>
                </div>
              </div>
              <div css={buttonContainer}>
                <strong>카카오뷰</strong>
                <button type="button">제목 복사</button>
                <button type="button">내용 복사</button>
                <button type="button">URL 복사</button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Instagram;
