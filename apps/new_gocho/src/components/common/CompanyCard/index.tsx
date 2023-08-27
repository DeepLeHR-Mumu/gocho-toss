import { Profile, FollowButton } from "shared-ui/deeple-ds";

import { useGetDeviceType } from "@/globalStates";

import { CompanyCardProps } from "./type";
import { cssObj } from "./style";

export const CompanyCard = ({ logoSrc, name, hashTagArr = [], buttonHandler }: CompanyCardProps) => {
  const { isMobile } = useGetDeviceType();
  const isButtonExist = !!buttonHandler;

  const getProfileSize = () => {
    if (isMobile) {
      return 72;
    }

    return isButtonExist ? 120 : 100;
  };

  return (
    <div css={cssObj.cardWrapper(isButtonExist)}>
      <Profile src={logoSrc} size={getProfileSize()} />
      <h3 css={cssObj.name(isButtonExist)}>{name}</h3>
      {!isMobile && (
        <p css={cssObj.hashTags(isButtonExist)}>
          {hashTagArr
            .map((hashTag) => {
              return `#${hashTag}`;
            })
            .join(" ")}
        </p>
      )}
      {isButtonExist && <FollowButton onClick={buttonHandler}>팔로우</FollowButton>}
    </div>
  );
};
