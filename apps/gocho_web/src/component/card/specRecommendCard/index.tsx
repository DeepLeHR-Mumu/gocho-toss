import { FunctionComponent } from "react";

import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { SPEC_DETAIL_URL } from "@constant/internalURL";
import { LinkButton } from "shared-ui/common/atom/button";

import { SpecRecommendCardProps } from "./type";
import {
  cardWrapper,
  userInfoContainer,
  userInfoBox,
  nicknameCSS,
  genderCSS,
  bodyContainer,
  schoolInfo,
  schoolCSS,
  attendance,
  gradeCSSTitle,
  gradeCSS,
  maxGradeCSS,
  infoTitle,
  info,
  certi,
  certiLabel,
  certiNumber,
  buttonContainer,
} from "./style";

export const SpecRecommendCard: FunctionComponent<SpecRecommendCardProps> = ({ specData }) => {
  const schoolType = specData.lastEducation === "초대졸" ? specData.college?.department : specData.highschool.type;
  const pointType = specData.lastEducation === "초대졸" ? "평균 학점" : "내신 등급";
  const grade =
    specData.lastEducation === "초대졸" && specData.college !== undefined
      ? specData.college?.grade
      : specData.highschool.naesin;

  return (
    <article css={cardWrapper}>
      <div css={userInfoContainer}>
        <ProfileImg imageStr="default" size="S" />
        <div css={userInfoBox}>
          <p css={nicknameCSS}>{specData.nickname}</p>
          <p css={genderCSS}>
            {specData.gender} {specData.age}살
          </p>
        </div>
      </div>
      <div css={bodyContainer}>
        <div>
          <p css={schoolCSS}>{specData.lastEducation}</p>
          <div css={schoolInfo}>
            <p css={schoolCSS}>{schoolType}</p>
            <p css={gradeCSSTitle}>
              {pointType}
              <span css={gradeCSS}>
                {grade}
                <span css={maxGradeCSS}>{specData.lastEducation === "초대졸" && `/${specData.college?.maxGrade}`}</span>
              </span>
            </p>
          </div>
        </div>
        <div css={attendance}>
          <p css={infoTitle}>
            무단 결석 <span css={info}>{specData.highschool.absent}</span>
          </p>
          <p css={infoTitle}>
            무단 조퇴 <span css={info}>{specData.highschool.leaveEarly}</span>
          </p>
          <p css={infoTitle}>
            무단 결과 <span css={info}>{specData.highschool.classMiss}</span>
          </p>
          <p css={infoTitle}>
            무단 지각 <span css={info}>{specData.highschool.tardy}</span>
          </p>
        </div>
        <div css={certi}>
          {/* TODO 자격증 정보 유연한 */}
          <div css={certiLabel}>
            기능사<span css={certiNumber}>{specData.certificate?.level1}</span>
          </div>
          <div css={certiLabel}>
            산업기사
            <span css={certiNumber}>{specData.certificate?.level2}</span>
          </div>
          <div css={certiLabel}>
            기사+
            <span css={certiNumber}>{specData.certificate?.level3}</span>
          </div>
        </div>
      </div>
      <div css={buttonContainer}>
        <LinkButton text="평가하기" variant="filled" linkTo={`${SPEC_DETAIL_URL}/${specData.id}`} />
      </div>
    </article>
  );
};
