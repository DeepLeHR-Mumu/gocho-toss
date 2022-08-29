import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillCaretDown } from "react-icons/ai";

import colorLogoSrc from "@public/images/global/deepLeLogo/smallColor.svg";
import grayLogoSrc from "@public/images/global/deepLeLogo/smallMono.svg";

import { MAIN_URL } from "@constant/internalURL";
import { Layout } from "@component/layout";
import { useUserInfo } from "@api/auth";
import { Profile } from "@component/common/molecule/profile";
import { UnAuthMenu } from "@component/common/molecule/unAuthMenu";
import { menuArr } from "@constant/menuArr";

import { SubMenuButton } from "./component/subMenuButton";
import {
  headerWrapper,
  headerContainer,
  logoCSS,
  navWrapper,
  globalNavBarContainer,
  downIconCSS,
  subMenuToggleWrapper,
  activeRouter,
} from "./style";

export const Header: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();
  const { pathname } = router;

  const { isSuccess } = useUserInfo();
  return (
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer}>
          <div css={logoCSS}>
            <Link href={MAIN_URL} passHref>
              <a>
                <Image
                  src={pathname === MAIN_URL ? colorLogoSrc : grayLogoSrc}
                  alt="고초대졸닷컴"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>

          <nav css={navWrapper}>
            <ul css={globalNavBarContainer}>
              {menuArr.map((menu, index) => {
                return (
                  <li
                    key={menu.menuTitle}
                    css={activeRouter(pathname === menu.menuLink)}
                    onMouseOver={() => {
                      setActiveIndex(index);
                    }}
                    onFocus={() => {
                      setActiveIndex(index);
                    }}
                    onMouseLeave={() => {
                      setActiveIndex(null);
                    }}
                  >
                    {menu.subMenuArr ? (
                      <>
                        {menu.menuTitle}
                        <AiFillCaretDown size={12} css={downIconCSS} />

                        <ul css={subMenuToggleWrapper(activeIndex === index)}>
                          {menu.subMenuArr.map((subMenu) => {
                            return (
                              <SubMenuButton
                                key={subMenu.menuTitle}
                                link={subMenu.menuLink}
                                title={subMenu.menuTitle}
                                setActiveIndex={setActiveIndex}
                              />
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <Link href={menu.menuLink} passHref>
                        {menu.menuTitle}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            {isSuccess ? <Profile /> : <UnAuthMenu />}
          </nav>
        </div>
      </Layout>
    </header>
  );
};
