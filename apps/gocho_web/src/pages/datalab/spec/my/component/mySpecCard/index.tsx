import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { LinkButton, NormalButton } from "shared-ui/common/atom/button";
import { SPEC_DETAIL_URL } from "shared-constant/internalURL";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { useDeleteMySpec } from "shared-api/spec";
import { mySpecHistoryKeyObj } from "shared-constant/queryKeyFactory/spec/userHistoryKeyObj";

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
  const queryClient = useQueryClient();
  const { mutate } = useDeleteMySpec();

  const mySpecDelete = (specId: number) => {
    mutate(
      { id: specId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(mySpecHistoryKeyObj.all);
        },
      }
    );
  };

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
                  <strong css={strongPoint}>{String(mySpecData.highschool.naesin).slice(0, 1)}</strong>
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
                  <strong css={strongPoint}>{mySpecData.college?.grade?.toFixed(1)}</strong>/
                  {mySpecData.college?.maxGrade?.toFixed(1)}
                </span>
              </li>
            </>
          )}
        </ul>

        <ul css={highschoolInfoCSS}>
          <li>
            무단결석
            <strong css={strongPoint}>
              {String(mySpecData.highschool.absent).length >= 2
                ? `${String(mySpecData.highschool.absent).slice(0, 1)}..`
                : mySpecData.highschool.absent}
            </strong>
          </li>
          <li>
            무단지각{" "}
            <strong css={strongPoint}>
              {String(mySpecData.highschool.tardy).length >= 2
                ? `${String(mySpecData.highschool.tardy).slice(0, 1)}..`
                : mySpecData.highschool.tardy}
            </strong>
          </li>
          <li>
            무단조퇴
            <strong css={strongPoint}>
              {String(mySpecData.highschool.leaveEarly).length >= 2
                ? `${String(mySpecData.highschool.leaveEarly).slice(0, 1)}..`
                : mySpecData.highschool.leaveEarly}
            </strong>
          </li>
          <li>
            무단결과
            <strong css={strongPoint}>
              {String(mySpecData.highschool.classMiss).length >= 2
                ? `${String(mySpecData.highschool.classMiss).slice(0, 1)}..`
                : mySpecData.highschool.classMiss}
            </strong>
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
        <NormalButton
          text="삭제하기"
          variant="text"
          wide={false}
          isSubmit={false}
          buttonClick={() => {
            mySpecDelete(mySpecData.id);
          }}
        />
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
