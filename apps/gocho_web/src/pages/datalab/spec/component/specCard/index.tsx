import { FunctionComponent } from "react";

import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { SPEC_DETAIL_URL } from "@constant/internalURL";
import { ProfileImg } from "@component/common/atom/profileImg";
import { LinkButton } from "@component/common/atom/Button";

import { SpecCardProps, SpecCardSkeleton } from "./type";
import {
  specCardSkeleton,
  cardWrapper,
  userInfoContainer,
  userInfoBox,
  nicknameCSS,
  genderCSS,
  bodyContainer,
  schoolInfo,
  schoolCSS,
  gradeCSSTitle,
  gradeCSS,
  maxGradeCSS,
  attendance,
  infoTitle,
  info,
  certi,
  certiLabel,
  certiNumber,
  buttonContainer,
} from "./style";

export const SpecCard: FunctionComponent<SpecCardProps | SpecCardSkeleton> = ({
  specData,
  isSkeleton,
}) => {
  if (isSkeleton || typeof specData === "undefined") {
    return (
      <div css={specCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const schoolDept =
    specData.college === null
      ? specData.highschool.type
      : specData.college.department;
  const gradeType =
    specData.lastEducation === "초대졸" ? "평균 학점" : "내신 등급";
  const grade =
    specData.lastEducation === "초대졸" && specData.college !== null
      ? specData.college.grade
      : specData.highschool.naesin;
  const isCerti = specData.certificate !== null;

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
        <div css={schoolInfo}>
          <p css={schoolCSS}>{specData.lastEducation}</p>
          <p css={schoolCSS}>{schoolDept}</p>
          <p css={gradeCSSTitle}>
            {gradeType}
            <span css={gradeCSS}>
              {grade}
              <span css={maxGradeCSS}>
                {specData.lastEducation === "초대졸" &&
                  specData.college !== null &&
                  `/${specData.college?.maxGrade}`}
              </span>
            </span>
          </p>
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
          {isCerti ? (
            <>
              <div css={certiLabel}>
                기능사
                <span css={certiNumber}>{specData.certificate?.level1}</span>
              </div>
              <div css={certiLabel}>
                산업기사
                <span css={certiNumber}>{specData.certificate?.level2}</span>
              </div>
              <div css={certiLabel}>
                기사+
                <span css={certiNumber}>{specData.certificate?.level3}</span>
              </div>
            </>
          ) : (
            <div css={certiLabel}>자격증 정보가 없습니다.</div>
          )}
        </div>
      </div>
      <div css={buttonContainer}>
        <LinkButton
          text="평가하기"
          variant="filled"
          linkTo={`${SPEC_DETAIL_URL}/${specData.id}`}
        />
      </div>
    </article>
  );
};
