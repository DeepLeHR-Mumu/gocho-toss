import { FunctionComponent, useEffect, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";
import { useUserInfo } from "shared-api/auth";
import { globalSearchEvent } from "shared-ga/search";
import { MAIN_URL } from "shared-constant";

import { Layout } from "@component/layout";
import { Profile } from "@component/common/molecule/profile";
import { UnAuthMenu } from "@component/common/molecule/unAuthMenu";
import { useToast, useModal } from "@/globalStates";
import { blogUrl, menuArr } from "./constant";

import { SubMenuButton } from "./component/subMenuButton";
import {
  headerWrapper,
  headerContainer,
  logoCSS,
  navWrapper,
  globalNavBarContainer,
  downIconCSS,
  activeRouter,
  subMenuToggleWrapper,
  unifiedSearchWrapper,
  unifiedSearch,
  searchButton,
  flexBox,
  logoLink,
  newBox,
} from "./style";

export const Header: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const { closeModal } = useModal();

  const router = useRouter();
  const { setToastMessage } = useToast();
  const { pathname } = router;

  const handleParam = (typeKeyword: ChangeEvent<HTMLInputElement>) => {
    return setQuery(typeKeyword.target.value);
  };

  const preventRefresh = (goNewPage: (event: FormEvent) => void) => {
    return (submitForm: FormEvent) => {
      submitForm.preventDefault();
      goNewPage(submitForm);
    };
  };

  const submitHandler = preventRefresh(() => {
    const regExp = /[{}[\]/?.,;:|)*~`!^_+<>@#$%&\\=('"]/g;

    if (query.match(regExp)) {
      setToastMessage("검색어에 특수문자는 포함될 수 없습니다.");
      return;
    }
    globalSearchEvent(query);
    router.push({
      pathname: "/search",
      query: { q: query },
    });
  });

  useEffect(() => {
    closeModal();
  }, [closeModal, pathname]);

  const { isSuccess } = useUserInfo();
  const menuMainUrl = pathname.split("/")[1];

  return (
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer}>
          <div css={logoCSS}>
            <Link href={MAIN_URL} passHref>
              <div css={logoLink}>
                <Image src={colorLogoSrc} alt="" fill />
              </div>
            </Link>
          </div>

          <nav css={navWrapper}>
            <ul css={globalNavBarContainer}>
              {menuArr.map((menu, index) => {
                return (
                  <li
                    key={`navMenu_${menu.menuTitle}`}
                    css={activeRouter(menuMainUrl === menu.mainUrl)}
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
                        <Link href={menu.menuLink} passHref>
                          {menu.menuTitle}
                          <BsChevronDown css={downIconCSS} />
                        </Link>

                        <ul css={subMenuToggleWrapper(activeIndex === index)}>
                          {menu.subMenuArr.map((subMenu) => {
                            return (
                              <SubMenuButton
                                subMenuData={subMenu}
                                key={subMenu.menuTitle}
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
              <li key="navMenu_blog" css={activeRouter(false)}>
                <a href={blogUrl} target="_blank" rel="noreferrer" css={flexBox}>
                  블로그
                  <span css={newBox}>N</span>
                </a>
              </li>
            </ul>
            <div css={flexBox}>
              <form onSubmit={submitHandler} css={unifiedSearchWrapper}>
                <input css={unifiedSearch} placeholder="궁금한 기업명이나 공고를 검색해보세요" onChange={handleParam} />
                <button type="submit" css={searchButton} aria-label="통합검색 실행">
                  <FiSearch />
                </button>
              </form>
              {isSuccess ? <Profile /> : <UnAuthMenu />}
            </div>
          </nav>
        </div>
      </Layout>
    </header>
  );
};
