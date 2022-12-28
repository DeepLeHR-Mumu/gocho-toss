import { FunctionComponent } from "react";
import Link from "next/link";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useUserState } from "@/globalStates/useUserState";

import { linkArr } from "./constant";
import { CompanyInfoBox } from "./component/companyInfoBox";
import { UserInfoBox } from "./component/userInfoBox";
import { cssObj } from "./style";

export const SideBar: FunctionComponent = () => {
  const { userInfoData } = useUserState();

  if (!userInfoData) {
    return (
      <nav css={cssObj.wrapper}>
        <Spinner />
      </nav>
    );
  }

  return (
    <nav css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <CompanyInfoBox name={userInfoData.companyName} img={userInfoData.companyLogo} />
        {linkArr.map((linkObj) => (
          <Link href={linkObj.url} key={linkObj.url} passHref>
            <a css={cssObj.linkCSS}>
              <div css={cssObj.iconCSS}>
                <linkObj.icon />
              </div>
              {linkObj.name}
            </a>
          </Link>
        ))}
      </div>
      <UserInfoBox name={`${userInfoData.name}(${userInfoData.department})`} />
    </nav>
  );
};
