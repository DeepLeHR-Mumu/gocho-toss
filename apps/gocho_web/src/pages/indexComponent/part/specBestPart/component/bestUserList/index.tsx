import { FunctionComponent } from "react";

import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import {
  bestUserArrWrapper,
  setUserCard,
  skeletonCardBox,
  userNickname,
  scoreCSS,
  setPointColor,
  recruitSectorCSS,
} from "./style";
import { BestUserArrProps, SkeletonProps } from "./type";

export const BestUserList: FunctionComponent<BestUserArrProps | SkeletonProps> = ({
  setActiveUserID,
  activeUserID,
  bestUserDataArr,
  isSkeleton,
}) => {
  if (isSkeleton || !bestUserDataArr) {
    return (
      <div css={bestUserArrWrapper}>
        {dummyArrCreator(9).map((_) => {
          return (
            <div key={`skeleton_${_}`} css={skeletonCardBox}>
              <SkeletonBox />
            </div>
          );
        })}
      </div>
    );
  }

  const handleActiveUser = (index: number) => {
    setActiveUserID(index);
  };

  return (
    <div css={bestUserArrWrapper}>
      {bestUserDataArr.map((user, index) => {
        const isActive = index === activeUserID;
        return (
          <button
            type="button"
            onClick={() => {
              handleActiveUser(index);
            }}
            key={user.id}
            css={setUserCard(isActive)}
          >
            <ProfileImg imageStr={user.profileImg} size="S" />
            <strong css={userNickname}>
              {user.nickname} <UserBadge badge="admin" />
            </strong>
            <p css={scoreCSS}>
              <span css={setPointColor(isActive)}>{user.score}</span> / 5
            </p>

            <p css={recruitSectorCSS}>평가수 {user.score}</p>
          </button>
        );
      })}
    </div>
  );
};
