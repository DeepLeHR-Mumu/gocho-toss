import { FunctionComponent } from "react";
import Link from "next/link";

import { useUser } from "@/globalStates/useUser";

import { linkArr } from "./constant";
import { CompanyInfoBox } from "./component/companyInfoBox";
import { UserInfoBox } from "./component/userInfoBox";
import { container, iconCSS, linkCSS, wrapper } from "./style";

export const SideBar: FunctionComponent = () => {
  const { isLogined, currentUserInfo } = useUser();

  if (!currentUserInfo) {
    // TODO : 스켈레톤
    return <div>..</div>;
  }

  return (
    <nav css={wrapper(isLogined)}>
      <div css={container}>
        <CompanyInfoBox name={currentUserInfo.companyName} />
        {linkArr.map((linkObj) => (
          <Link href={linkObj.url} key={linkObj.url} passHref>
            <a css={linkCSS}>
              <div css={iconCSS}>
                <linkObj.icon />
              </div>
              {linkObj.name}
            </a>
          </Link>
        ))}
      </div>
      <UserInfoBox name={`${currentUserInfo.name}(${currentUserInfo.department})`} />
    </nav>
  );
};
