import { FunctionComponent } from "react";
import Link from "next/link";

import { linkArr } from "./constant";
import { CompanyInfoBox } from "./component/companyInfoBox";
import { UserInfoBox } from "./component/userInfoBox";
import { container, iconCSS, linkCSS, wrapper } from "./style";

export const SideBar: FunctionComponent = () => (
  <nav css={wrapper}>
    <div css={container}>
      <CompanyInfoBox name="a" />
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
    <UserInfoBox name="s" />
  </nav>
);
