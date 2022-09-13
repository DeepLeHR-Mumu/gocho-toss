import { FunctionComponent } from "react";

import { LinkButton, NormalButton } from "@component/common/atom/button";
import { SPEC_DETAIL_URL } from "@constant/internalURL";
import { ProfileImg } from "@component/common/atom/profileImg";

import { MySpecCardProps } from "./type";
import {
  buttonBox,
  certiCSS,
  circleBox,
  eduInfoCSS,
  highschoolInfoCSS,
  profileBox,
  specInfoBox,
  strongPoint,
  userInfoCSS,
  wrapper,
} from "./style";

export const MySpecCard: FunctionComponent<MySpecCardProps> = ({ mySpecData }) => {
  return (
    <article css={wrapper}>
      <div css={profileBox}>
        <ProfileImg imageStr={mySpecData.image} size="S" />
        <p css={userInfoCSS}>
          {mySpecData.nickname}
          <span>
            {mySpecData.gender} {mySpecData.age}살
          </span>
        </p>
      </div>
      <div css={specInfoBox}>
        <ul css={eduInfoCSS}>
          <li>
            <strong css={strongPoint}>{mySpecData.lastEducation}</strong>
          </li>
          {mySpecData.lastEducation === "고졸" && (
            <>
              <li>
                <strong css={strongPoint}>{mySpecData.highschool.type}</strong>
              </li>
              <li>
                내신등급
                <span css={circleBox}>
                  <strong css={strongPoint}>{mySpecData.highschool.naesin}</strong>
                </span>
              </li>
            </>
          )}
          {mySpecData.lastEducation === "초대졸" && (
            <>
              <li>
                <strong css={strongPoint}>{mySpecData.college?.department}</strong>
              </li>
              <li>
                평균학점
                <span css={circleBox}>
                  <strong css={strongPoint}>{mySpecData.college?.grade}</strong>
                  {mySpecData.college?.maxGrade}
                </span>
              </li>
            </>
          )}
        </ul>

        <ul css={highschoolInfoCSS}>
          <li>
            무단결석 <strong css={strongPoint}>{mySpecData.highschool.absent}</strong>
          </li>
          <li>
            무단지각 <strong css={strongPoint}>{mySpecData.highschool.tardy}</strong>
          </li>
          <li>
            무단조퇴 <strong css={strongPoint}>{mySpecData.highschool.leaveEarly}</strong>
          </li>
          <li>
            무단결과 <strong css={strongPoint}>{mySpecData.highschool.classMiss}</strong>
          </li>
        </ul>

        <ul css={certiCSS}>
          <li>
            기능사
            <strong css={strongPoint}>{mySpecData.certificate?.level1 ? mySpecData.certificate?.level1 : 0}</strong>
          </li>
          <li>
            산업기사
            <strong css={strongPoint}>{mySpecData.certificate?.level2 ? mySpecData.certificate?.level2 : 0}</strong>
          </li>
          <li>
            기사+
            <strong css={strongPoint}>{mySpecData.certificate?.level3 ? mySpecData.certificate?.level3 : 0}</strong>
          </li>
        </ul>
      </div>

      <div css={buttonBox}>
        {/* LATER : button에 aria-label 추가하기 */}
        <NormalButton text="삭제하기" variant="text" wide={false} isSubmit={false} />
        <LinkButton
          text="평가 내역 보기"
          variant="filled"
          linkTo={`${SPEC_DETAIL_URL}/${mySpecData.id}`}
          wide={false}
        />
      </div>
    </article>
  );
};
