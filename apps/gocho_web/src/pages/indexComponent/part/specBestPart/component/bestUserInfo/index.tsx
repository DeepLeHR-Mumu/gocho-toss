import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import headerIcon from "@public/images/global/common/box_heart.svg";
import { ProfileImg } from "@component/common/atom/profileImg";
import { SPEC_DETAIL_URL } from "@constant/internalURL";

import {
  bestUserInfoWrapper,
  cardWrapper,
  cardHeader,
  userProfileImageBox,
  cardHeaderInfo,
  userNickname,
  recruSectorDesc,
  scoreDesc,
  scoreTitle,
  currentScore,
  totalScore,
  userEvalCount,
  cardInfo,
  infoArrCSS,
  infoValueCSS,
  cardFooter,
  moreButton,
  bestUserDesc,
  bestUserNickName,
  bounceIcon,
} from "./style";
import { BestUserInfoProps } from "./type";

export const BestUserBox: FunctionComponent<BestUserInfoProps> = ({ bestUserData }) => {
  const educationTypeTitle = bestUserData.college ? "학과" : "학교종류";
  const educationType = bestUserData.college ? `${bestUserData.college.department}` : `${bestUserData.highschool.type}`;

  return (
    <div css={bestUserInfoWrapper}>
      <div css={cardWrapper}>
        <div css={cardHeader}>
          <div css={userProfileImageBox}>
            <ProfileImg imageStr={bestUserData.profileImg} size="L" />
          </div>
          <div css={cardHeaderInfo}>
            <p>
              <strong css={userNickname}>{bestUserData.nickname}</strong>
            </p>
            <p css={scoreDesc}>
              <span css={scoreTitle}>총 점</span>
              <span css={currentScore}>{bestUserData.score} </span>
              <span css={totalScore}> / 5</span>
              <span css={userEvalCount}>평가수 : {bestUserData.scoreCount}</span>
            </p>
            <p css={recruSectorDesc}>{bestUserData.desiredTask}</p>
          </div>
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
          {bestUserData.certificate && (
            <ul css={infoArrCSS}>
              <li>
                기능사
                <span css={infoValueCSS}>{bestUserData.certificate.level1}</span>
              </li>
              <li>
                산업기사
                <span css={infoValueCSS}>{bestUserData.certificate.level2}</span>
              </li>
              <li>
                산업기사+
                <span css={infoValueCSS}>{bestUserData.certificate.level3}</span>
              </li>
            </ul>
          )}

          <div css={cardFooter}>
            <p css={bestUserDesc}>
              화제의 스펙
              <span css={bestUserNickName}>
                {bestUserData.nickname}
                <span css={bounceIcon}>
                  <Image src={headerIcon} alt="" layout="fixed" />
                </span>
              </span>
              님
            </p>
            <Link href={`${SPEC_DETAIL_URL}/${bestUserData.id}`} passHref>
              <a css={moreButton}>평가/상세보기</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
