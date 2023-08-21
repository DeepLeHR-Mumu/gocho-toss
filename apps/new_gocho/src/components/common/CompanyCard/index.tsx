import { Profile } from "shared-ui/deeple-ds";
import FollowButton from "shared-ui/deeple-ds/FollowButton";

import { CompanyCardProps } from "./type";
import { cssObj } from "./style";

export const CompanyCard = ({ logoSrc, name, hashTagArr = [], buttonHandler }: CompanyCardProps) => {
  const isButtonExist = !!buttonHandler;

  // TODO Profile 을 모바일일 때 크기 72로 해야함.
  return (
    <div css={cssObj.cardWrapper(isButtonExist)}>
      <Profile src={logoSrc} size={isButtonExist ? 120 : 100} />
      <div css={cssObj.textArea}>
        <h3 css={cssObj.name(isButtonExist)}>{name}</h3>
        <p css={cssObj.hashTags(isButtonExist)}>
          {hashTagArr
            .map((hashTag) => {
              return `#${hashTag}`;
            })
            .join(" ")}
        </p>
      </div>
      {isButtonExist && <FollowButton onClick={buttonHandler}>팔로우</FollowButton>}
    </div>
  );
};
