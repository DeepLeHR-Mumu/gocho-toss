import { FunctionComponent } from "react";
import Image from "next/image";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { LinkButton } from "shared-ui/common/atom/button";
import headerIcon from "shared-image/global/common/box_heart.svg";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { SPEC_DETAIL_URL } from "shared-constant";
import { StarEvaluation } from "@component/common/molecule/starEvaluation";

import {
  bestUserInfoWrapper,
  cardWrapper,
  cardHeader,
  cardHeaderInfo,
  userNickname,
  scoreDesc,
  scoreTitle,
  currentScore,
  totalScore,
  userEvalCount,
  cardInfo,
  infoArrCSS,
  infoValueCSS,
  cardFooter,
  colorPoint,
  skeletonBoxCSS,
  userTaskCSS,
  bestUserDesc,
  bestUserNickName,
  bounceIcon,
  noValueText,
} from "./style";
import { BestUserInfoProps, skeletonProps } from "./type";

export const BestUserBox: FunctionComponent<BestUserInfoProps | skeletonProps> = ({ bestUserData, isSkeleton }) => {
  if (!bestUserData || isSkeleton) {
    return (
      <div css={skeletonBoxCSS}>
        <SkeletonBox />
      </div>
    );
  }

  const educationTypeTitle = bestUserData.college ? "학과" : "학교종류";
  const educationType = bestUserData.college ? `${bestUserData.college.department}` : `${bestUserData.highschool.type}`;
  const isCerti = bestUserData.certificate?.data !== null;

  return (
    <div css={bestUserInfoWrapper}>
      <div css={cardWrapper}>
        <div css={cardHeader}>
          <ProfileImg imageStr={bestUserData.profileImg} size="XL" />
          <div css={cardHeaderInfo}>
            <strong css={userNickname}>
              {bestUserData.uploader.nickname} <UserBadge badge={bestUserData.uploader.badge} />
            </strong>
            <p css={scoreDesc}>
              <span css={scoreTitle}>총 점</span>
              <span css={currentScore}>{bestUserData.score} </span>
              <span css={totalScore}> / 5</span>
            </p>
            <StarEvaluation size="M" parentScore={bestUserData.score} />

            {bestUserData.desiredTask && (
              <ul css={userTaskCSS}>
                {bestUserData.desiredTask.map((task) => {
                  return <li key={`userTask_${task}`}>{task}</li>;
                })}
              </ul>
            )}
          </div>
          <p css={userEvalCount}>
            평가수 : <span css={colorPoint}>{bestUserData.scoreCount}</span>{" "}
          </p>
        </div>

        <div css={cardInfo}>
          <ul css={infoArrCSS}>
            <li>
              나이 <span css={infoValueCSS}>{bestUserData.age}</span>
            </li>
            <li>
              학력
              <span css={infoValueCSS}>{bestUserData.lastEducation}</span>
            </li>
            <li>
              {educationTypeTitle}
              <span css={infoValueCSS}>{educationType}</span>
            </li>
          </ul>
          <ul css={infoArrCSS}>
            {isCerti ? (
              <>
                <li>
                  기능사
                  {bestUserData.certificate?.level1 !== null && (
                    <span css={infoValueCSS}>{bestUserData.certificate?.level1}</span>
                  )}
                </li>
                <li>
                  산업기사
                  {bestUserData.certificate?.level2 !== null && (
                    <span css={infoValueCSS}>{bestUserData.certificate?.level2}</span>
                  )}
                </li>
                <li>
                  기사+
                  {bestUserData.certificate?.level3 !== null && (
                    <span css={infoValueCSS}>{bestUserData.certificate?.level3}</span>
                  )}
                </li>
              </>
            ) : (
              <li css={noValueText}>자격증 정보가 없습니다.</li>
            )}
          </ul>
          <div css={cardFooter}>
            <p css={bestUserDesc}>
              화제의 스펙
              <span css={bestUserNickName}>
                {bestUserData.uploader.nickname}
                <span css={bounceIcon}>
                  <Image src={headerIcon} alt="" fill />
                </span>
              </span>
              님
            </p>
            <LinkButton variant="filled" text="평가/상세보기" linkTo={`${SPEC_DETAIL_URL}/${bestUserData.id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
