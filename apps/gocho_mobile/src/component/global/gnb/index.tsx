import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiSearch, FiMenu, FiArrowLeft } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import { MAIN_URL } from "shared-constant/internalURL";
import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";

import { Layout } from "@component/layout";

import { AuthedMenu } from "./component/authedMenu";
import { UnAuthedMenu } from "./component/unAuthedMenu";
import { SubMenuButton } from "./component/subMenuButton";
import { menuArr } from "./constant";
import { openedElementDef } from "./type";
import {
  headerWrapper,
  headerContainer,
  logo,
  icon,
  unifiedSearchWrapper,
  backIcon,
  unifiedSearch,
  searchButton,
  navContainer,
  menuContainer,
  menuCategory,
} from "./style";

export const GNB: FunctionComponent = () => {
  const [openedElement, setOpenedElement] = useState<openedElementDef>(null);
  const { isSuccess } = useUserInfo();

  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleParam = () => {
    return (typeKeyword: ChangeEvent<HTMLInputElement>) => {
      return setQuery(typeKeyword.target.value);
    };
  };

  const preventRefresh = (goNewPage: (event: FormEvent) => void) => {
    return (submitForm: FormEvent) => {
      submitForm.preventDefault();
      goNewPage(submitForm);
    };
  };

  const handleSubmit = preventRefresh(() => {
    router.push({
      pathname: "/search",
      query: { q: query },
    });
  });

  return (
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer(openedElement === "통합검색")}>
          <div css={logo}>
            <Link href={MAIN_URL} passHref>
              <Image src={colorLogoSrc} alt="고초대졸닷컴" objectFit="contain" />
            </Link>
          </div>
          <button
            type="button"
            css={icon}
            onClick={() => {
              setOpenedElement("통합검색");
            }}
          >
            <FiSearch />
          </button>
          <button
            type="button"
            css={icon}
            onClick={() => {
              setOpenedElement((prev) => {
                return prev === "메뉴" ? null : "메뉴";
              });
            }}
          >
            <FiMenu />
          </button>
        </div>

        <form onSubmit={handleSubmit} css={unifiedSearchWrapper(openedElement === "통합검색")}>
          <button
            css={backIcon}
            type="button"
            onClick={() => {
              setOpenedElement(null);
            }}
          >
            <FiArrowLeft />
          </button>
          <input css={unifiedSearch} placeholder="궁금한 기업/공고를 검색해보세요" onChange={handleParam} />
          <button type="submit" css={searchButton}>
            <FiSearch />
          </button>
        </form>
      </Layout>

      <nav css={navContainer(openedElement === "메뉴")}>
        <Layout>
          <ul css={menuContainer}>
            {menuArr.map((menu) => {
              return (
                <li key={`navMenu_${menu.menuTitle}`}>
                  <p css={menuCategory}>{menu.menuTitle}</p>
                  <ul>
                    {menu.subMenuArr.map((subMenu) => {
                      return (
                        <SubMenuButton key={subMenu.menuTitle} link={subMenu.menuLink} title={subMenu.menuTitle} />
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          {isSuccess ? (
            <AuthedMenu setOpenedElement={setOpenedElement} />
          ) : (
            <UnAuthedMenu setOpenedElement={setOpenedElement} />
          )}
        </Layout>
      </nav>
    </header>
  );
};
