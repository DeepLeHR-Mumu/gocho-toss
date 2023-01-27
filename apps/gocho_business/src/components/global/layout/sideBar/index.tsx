import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useUserState } from "@/globalStates/useUserState";
import { INTERNAL_URL } from "@/constants/url";

import { linkArr } from "./constant";
import { CompanyInfoBox } from "./component/companyInfoBox";
import { UserInfoBox } from "./component/userInfoBox";
import { cssObj } from "./style";

export const SideBar: FunctionComponent = () => {
  const router = useRouter();
  const { jdId } = router.query;
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
      <div css={cssObj.marginContainer}>
        <div css={cssObj.container}>
          <CompanyInfoBox name={userInfoData.companyName} img={userInfoData.companyLogo} />
          {linkArr.map((linkObj) => {
            const isRoute = router.asPath === linkObj.url;
            const isUpload = linkObj.name === "공고" && router.asPath === INTERNAL_URL.JD_UPLOAD;
            const isEdit = linkObj.name === "공고" && router.asPath === INTERNAL_URL.JD_EDIT(Number(jdId));

            return (
              <Link href={linkObj.url} key={linkObj.url} passHref>
                <a css={cssObj.linkCSS(isRoute || isUpload || isEdit)}>
                  <linkObj.icon />
                  {linkObj.name}
                </a>
              </Link>
            );
          })}
        </div>
        <UserInfoBox name={`${userInfoData.name}(${userInfoData.department})`} />
      </div>
    </nav>
  );
};
