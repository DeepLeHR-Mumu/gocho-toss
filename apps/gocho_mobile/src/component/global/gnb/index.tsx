import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiSearch, FiMenu, FiArrowLeft } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import { MAIN_URL } from "shared-constant/internalURL";
import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";
import { Layout } from "@component/layout";

import {
  headerWrapper,
  headerContainer,
  logo,
  icon,
  unifiedSearchWrapper,
  backIcon,
  unifiedSearch,
  searchButton,
} from "./style";

export const GNB: FunctionComponent = () => {
  const [isUnifiedSearch, setIsUnifiedSearch] = useState<boolean>(false);
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
        <div css={headerContainer(isUnifiedSearch)}>
          <div css={logo}>
            <Link href={MAIN_URL} passHref>
              <Image src={colorLogoSrc} alt="고초대졸닷컴" objectFit="contain" />
            </Link>
          </div>
          <button
            type="button"
            css={icon}
            onClick={() => {
              setIsUnifiedSearch((prev) => {
                return !prev;
              });
            }}
          >
            <FiSearch />
          </button>
          <button type="button" css={icon}>
            <FiMenu />
          </button>
        </div>
        <form onSubmit={handleSubmit} css={unifiedSearchWrapper(isUnifiedSearch)}>
          <button
            css={backIcon}
            type="button"
            onClick={() => {
              setIsUnifiedSearch((prev) => {
                return !prev;
              });
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
    </header>
  );
};
