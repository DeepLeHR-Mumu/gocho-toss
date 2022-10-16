import Link from "next/link";
import { MAIN_URL } from "@constant/internalURL";
import Image from "next/image";
import { FunctionComponent } from "react";

import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";

import { Layout } from "@component/layout";
import { headerWrapper, headerContainer, logoCSS, title } from "./style";

export const Header: FunctionComponent = () => {
  return (
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer}>
          <div css={logoCSS}>
            <Link href={MAIN_URL} passHref>
              <a>
                <Image src={colorLogoSrc} alt="고초대졸닷컴" objectFit="contain" layout="fill" />
              </a>
            </Link>
          </div>
          <p css={title}>매니저 페이지</p>
        </div>
      </Layout>
    </header>
  );
};
