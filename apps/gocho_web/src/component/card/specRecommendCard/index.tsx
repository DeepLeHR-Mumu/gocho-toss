import { FunctionComponent } from "react";

import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { SPEC_DETAIL_URL } from "shared-constant";
import { LinkButton } from "shared-ui/common/atom/button";

import { SpecRecommendCardProps, SkeletonCardProps } from "./type";
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
  schoolTypeCSS,
  strongCSS,
  cardSkeletonContainer,
} from "./style";

export const SpecRecommendCard: FunctionComponent<SpecRecommendCardProps | SkeletonCardProps> = ({
  isSkeleton,
  specData,
}) => {
  if (isSkeleton || !specData) {
    return <article css={cardSkeletonContainer} />;
  }

  const schoolType = specData.lastEducation === "초대졸" ? specData.college?.department : specData.highschool.type;
  const pointType = specData.lastEducation === "초대졸" ? "평균 학점" : "내신 등급";
  const grade =
    specData.lastEducation === "초대졸" && specData.college !== undefined
      ? specData.college?.grade
      : specData.highschool.naesin;

  return (
    <article css={cardWrapper}>
      <div css={userInfoContainer}>
        <ProfileImg imageStr={specData.user.image} size="M" />
        <div css={userInfoBox}>
          <p css={nicknameCSS}>{specData.user.nickname}</p>
          <p css={genderCSS}>
            {specData.gender} {specData.age}살
          </p>
        </div>
      </div>

      <div css={bodyContainer}>
        <p css={schoolTypeCSS}>{specData.lastEducation}</p>

        <div css={schoolInfo}>
          <p css={schoolCSS}>{schoolType}</p>
          <p css={gradeCSSTitle}>
            {pointType}
            <span css={gradeCSS}>
              {specData.lastEducation === "고졸" && `${String(grade).slice(0, 1)}등급`}

              <span css={maxGradeCSS}>
                {specData.lastEducation === "초대졸" && (
                  <>
                    <strong css={strongCSS}>{grade?.toFixed(1)}</strong> / {specData.college?.maxGrade.toFixed(1)}
                  </>
                )}
              </span>
            </span>
          </p>
        </div>

        <ul css={attendance}>
          <li css={infoTitle}>
            무단 결석
            <span css={info}>
              {String(specData.highschool.absent).length >= 2
                ? `${String(specData.highschool.absent).slice(0, 1)}..`
                : specData.highschool.absent}
            </span>
          </li>
          <li css={infoTitle}>
            무단 조퇴
            <span css={info}>
              {String(specData.highschool.leaveEarly).length >= 2
                ? `${String(specData.highschool.leaveEarly).slice(0, 1)}..`
                : specData.highschool.leaveEarly}
            </span>
          </li>
          <li css={infoTitle}>
            무단 결과
            <span css={info}>
              {String(specData.highschool.classMiss).length >= 2
                ? `${String(specData.highschool.classMiss).slice(0, 1)}..`
                : specData.highschool.classMiss}
            </span>
          </li>
          <li css={infoTitle}>
            무단 지각
            <span css={info}>
              {String(specData.highschool.tardy).length >= 2
                ? `${String(specData.highschool.tardy).slice(0, 1)}..`
                : specData.highschool.tardy}
            </span>
          </li>
        </ul>
        <ul css={certi}>
          {/* TODO 자격증 정보 유연한 */}
          <li css={certiLabel}>
            기능사
            {specData.certificate?.level1 !== undefined && specData.certificate?.level1 !== 0 && (
              <span css={certiNumber}>{specData.certificate.level1}</span>
            )}
          </li>

          <li css={certiLabel}>
            산업기사
            {specData.certificate?.level2 !== undefined && specData.certificate?.level2 !== 0 && (
              <span css={certiNumber}>{specData.certificate.level2}</span>
            )}
          </li>
          <li css={certiLabel}>
            기사+
            {specData.certificate?.level3 !== undefined && specData.certificate?.level3 !== 0 && (
              <span css={certiNumber}>{specData.certificate.level3}</span>
            )}
          </li>
        </ul>
      </div>

      <div css={buttonContainer}>
        <LinkButton
          text={specData.isMine ? "평가 내역 보기" : "평가하기"}
          variant="filled"
          linkTo={`${SPEC_DETAIL_URL}/${specData.id}`}
        />
      </div>
    </article>
  );
};
