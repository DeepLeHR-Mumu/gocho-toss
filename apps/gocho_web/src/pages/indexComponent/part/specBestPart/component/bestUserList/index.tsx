import { FunctionComponent } from "react";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import {
  bestUserArrWrapper,
  setUserCard,
  profileBox,
  userNickname,
  scoreCSS,
  setPointColor,
  recruitSectorCSS,
} from "./style";
import { BestUserArrProps } from "./type";

export const BestUserList: FunctionComponent<BestUserArrProps> = ({
  setActiveUserID,
  activeUserID,
  bestUserDataArr,
}) => {
  const handleActiveUser = (index: number) => {
    setActiveUserID(index);
  };

  return (
    <div css={bestUserArrWrapper}>
      {bestUserDataArr.map((user, index) => {
        const isActive = index === activeUserID;
        return (
          <section
            onClick={() => {
              handleActiveUser(index);
            }}
            onKeyDown={() => {
              handleActiveUser(index);
            }}
            role="presentation"
            key={user.id}
            css={setUserCard(isActive)}
          >
            <div css={profileBox}>
              <ProfileImg imageStr={user.profileImg} size="S" />
            </div>
            <p>
              <strong css={userNickname}>{user.nickname}</strong>
            </p>
            {user.score && (
              <p css={scoreCSS}>
                <span css={setPointColor(isActive)}>{user.score}</span> / 5
              </p>
            )}

            <p css={recruitSectorCSS}>{user.desiredTask}</p>
          </section>
        );
      })}
    </div>
  );
};
