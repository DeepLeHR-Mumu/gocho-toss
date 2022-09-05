import { FunctionComponent } from "react";
import { BsStars } from "react-icons/bs";

import { ProfileImg } from "@component/common/atom/profileImg";
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
  divider,
  certiList,
} from "./style";
import { CertificateBox } from "./component/certifiacateBox";
import { NotExistingBox } from "../component/notExistingBox";

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({ basicData }) => {
  return (
    <div css={container}>
      <button css={backButton} type="button">
        {"<"}리스트로 돌아가기
      </button>
      <div css={imageContainer}>
        <ProfileImg imageStr={basicData.profileImg} size="L" />
      </div>
      <section css={basicInfoContainer}>
        <h2 css={userId}>{basicData.nickname}</h2>
        <ul css={characteristicCSS}>
          <li>{basicData.gender}</li>
          <li>{basicData.age}</li>
          <li>{basicData.military}</li>
        </ul>
        <div css={preferenceContainer}>
          <h3 css={descTitle}>희망직무</h3>
          {basicData.desiredTask && (
            <ul css={preference}>
              {basicData.desiredTask?.map((task) => {
                return <li key={task}>{task}</li>;
              })}
            </ul>
          )}
        </div>
        {basicData.desiredIndustry && (
          <div css={preferenceContainer}>
            <h3 css={descTitle}>희망업종</h3>
            <ul css={preference}>
              {basicData.desiredIndustry?.map((industry) => {
                return <li key={industry}>{industry}</li>;
              })}
            </ul>
          </div>
        )}
      </section>
      {basicData.lastEducation === "초대졸" && basicData.college && (
        <section css={descContainer}>
          <div css={schoolInfo}>
            <h3>최종학력</h3>
            <p>{basicData.lastEducation}</p>
          </div>
          <div css={schoolInfo}>
            <h3>학과</h3>
            <p>{basicData.college.department}</p>
          </div>
          <div css={schoolInfo}>
            <h3>평균학점</h3>
            <p>
              {basicData.college.grade}/{basicData.college.maxGrade}
            </p>
          </div>
          {basicData.college.isUturn && (
            <div css={schoolInfo}>
              <h3> </h3>
              <p>U-턴함</p>
            </div>
          )}
        </section>
      )}
      <section css={descContainer}>
        {basicData.lastEducation === "고졸" && (
          <div css={schoolInfo}>
            <h3>최종학력</h3>
            <p>{basicData.lastEducation}</p>
          </div>
        )}
        <div css={schoolInfo}>
          <h3>고등학교종류</h3>
          <p>{basicData.highschool.type}</p>
        </div>
        <div css={schoolInfo}>
          <h3>내신등급</h3>
          <p>{basicData.highschool.naesin}등급</p>
        </div>
        <div css={schoolInfo}>
          <h3>무단 결석</h3>
          <p>{basicData.highschool.absent}일</p>
        </div>
        <div css={schoolInfo}>
          <h3>무단 지각</h3>
          <p>{basicData.highschool.tardy}일</p>
        </div>
        <div css={schoolInfo}>
          <h3>무단 조퇴</h3>
          <p>{basicData.highschool.leaveEarly}일</p>
        </div>
        <div css={schoolInfo}>
          <p>{basicData.highschool.classMiss}일</p>
          <h3>무단 결과</h3>
        </div>
      </section>
      {basicData.certificate && (
        <section css={certiContainer}>
          <div css={certiTitle}>
            <div>
              <BsStars />
            </div>
            <h3>자격증</h3>
          </div>
          {basicData.certificate.data && (
            <>
              <ul css={certiInfo}>
                <li>기능사 {basicData.certificate.level1}</li>
                <li>산업기사 {basicData.certificate.level2}</li>
                <li>기사 {basicData.certificate.level3}</li>
              </ul>
              <ul css={certiList}>
                {basicData.certificate.data.map((certiData) => {
                  return <CertificateBox key={certiData} value={certiData} />;
                })}
              </ul>
            </>
          )}
          {!basicData.certificate.data && <NotExistingBox />}
        </section>
      )}

      <hr css={divider} />
    </div>
  );
};
