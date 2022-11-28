import { FunctionComponent } from "react";
import { BsStars } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

import { SPEC_LIST_URL } from "shared-constant/internalURL";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { BasicInfoPartProps } from "./type";

import {
  backButton,
  basicInfoContainer,
  characteristicCSS,
  container,
  descTitle,
  schoolInfo,
  descContainer,
  imageContainer,
  preference,
  preferenceContainer,
  userId,
  certiTitle,
  certiContainer,
  certiInfo,
  certiList,
  schoolInfoTitle,
  schoolInfoDesc,
  noStrongDesc,
} from "./style";

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({ basicData }) => {
  return (
    <div css={container}>
      <Link href={SPEC_LIST_URL} passHref>
        <a css={backButton}>
          <FiChevronLeft /> 리스트로 돌아가기
        </a>
      </Link>

      <div css={imageContainer}>
        <ProfileImg imageStr={basicData.user.image} size="L" />
      </div>

      <section css={basicInfoContainer}>
        <p css={userId}>{basicData.user.nickname}</p>

        <ul css={characteristicCSS}>
          <li>{basicData.gender}</li>
          <li>{basicData.age}살</li>
          <li>{basicData.military}</li>
        </ul>

        <div css={preferenceContainer}>
          <p css={descTitle}>희망직무</p>
          {basicData.desiredTask && (
            <ul css={preference}>
              {basicData.desiredTask?.map((task) => {
                return <li key={task}>#{task}</li>;
              })}
            </ul>
          )}
        </div>

        {basicData.desiredIndustry && (
          <div css={preferenceContainer}>
            <p css={descTitle}>희망업종</p>
            <ul css={preference}>
              {basicData.desiredIndustry?.map((industry) => {
                return <li key={industry}>#{industry}</li>;
              })}
            </ul>
          </div>
        )}
      </section>

      {basicData.lastEducation === "초대졸" && basicData.college && (
        <section css={descContainer}>
          <div css={schoolInfo}>
            <p css={schoolInfoTitle}>최종학력</p>
            <p css={schoolInfoDesc}>{basicData.lastEducation}</p>
          </div>
          <div css={schoolInfo}>
            <p css={schoolInfoTitle}>학과</p>
            <p css={schoolInfoDesc}>{basicData.college.department}</p>
          </div>
          <div css={schoolInfo}>
            <p css={schoolInfoTitle}>평균학점</p>
            <p css={schoolInfoDesc}>
              {basicData.college.grade.toFixed(1)}{" "}
              <span css={noStrongDesc}>/{basicData.college.maxGrade.toFixed(1)}</span>
            </p>
          </div>
          {basicData.college.isUturn && <p css={schoolInfoDesc}>U-턴함</p>}
        </section>
      )}

      <section css={descContainer}>
        {basicData.lastEducation === "고졸" && (
          <div css={schoolInfo}>
            <p css={schoolInfoTitle}>최종학력</p>
            <p css={schoolInfoDesc}>{basicData.lastEducation}</p>
          </div>
        )}
        <div css={schoolInfo}>
          <p css={schoolInfoTitle}>고등학교종류</p>
          <p css={schoolInfoDesc}>{basicData.highschool.type}</p>
        </div>
        <div css={schoolInfo}>
          <p css={schoolInfoTitle}>내신등급</p>
          <p css={schoolInfoDesc}>{basicData.highschool.naesin}등급</p>
        </div>
        <div css={schoolInfo}>
          <p css={schoolInfoTitle}>무단 결석</p>
          <p css={schoolInfoDesc}>{basicData.highschool.absent}일</p>
        </div>
        <div css={schoolInfo}>
          <p css={schoolInfoTitle}>무단 지각</p>
          <p css={schoolInfoDesc}>{basicData.highschool.tardy}일</p>
        </div>
        <div css={schoolInfo}>
          <p css={schoolInfoTitle}>무단 조퇴</p>
          <p css={schoolInfoDesc}>{basicData.highschool.leaveEarly}일</p>
        </div>
        <div css={schoolInfo}>
          <p css={schoolInfoTitle}>무단 결과</p>
          <p css={schoolInfoDesc}>{basicData.highschool.classMiss}일</p>
        </div>
      </section>

      {basicData.certificate && (
        <section css={certiContainer}>
          <p css={certiTitle}>
            <BsStars /> 자격증
          </p>
          {basicData.certificate.data && (
            <>
              <ul css={certiInfo}>
                <li>기능사 {basicData.certificate.level1}</li>
                <li>산업기사 {basicData.certificate.level2}</li>
                <li>기사 {basicData.certificate.level3}</li>
              </ul>

              <ul css={certiList}>
                {basicData.certificate.data.map((certiData) => {
                  return <li key={certiData}>{certiData}</li>;
                })}
              </ul>
            </>
          )}
        </section>
      )}
    </div>
  );
};
