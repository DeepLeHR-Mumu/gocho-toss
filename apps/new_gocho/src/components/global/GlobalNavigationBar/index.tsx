import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "shared-ui/deeple-ds";

import { URL } from "@/pages/constants";
import logoWhite from "@/public/logoWhite.svg";

import { Layout } from "../../Layout";
import { LoginModal } from "../../modal/LoginModal";
import { SearchModal } from "../../modal/SearchModal";
import { cssObj } from "./style";

export const GlobalNavigationBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  return (
    <>
      <header css={cssObj.wrapper}>
        <Layout>
          <div css={cssObj.titleArea}>
            <Link href={URL.MAIN} css={cssObj.logoWrapper}>
              <Image src={logoWhite} alt="고초대졸_로고" />
            </Link>
            <div css={cssObj.searchBarWrapper}>
              <SearchBar
                onClick={() => {
                  setSearchModal(true);
                }}
              />
            </div>
          </div>
          <div css={cssObj.navigationArea}>
            <nav>
              <ul css={cssObj.navigationWrapper}>
                <li>
                  <Link href={URL.JOBS_LIST}>채용공고</Link>
                </li>
                <li>
                  <Link href={URL.COMPANY}>기업정보</Link>
                </li>
                <li>
                  <Link href={URL.COMMUNITY}>커뮤니티</Link>
                </li>
              </ul>
            </nav>
            <div css={cssObj.etcWrapper}>
              <a
                href="https://gocho.biz/?utm_source=gochodaejoldotcom&utm_medium=GNB"
                target="_blank"
                rel="noreferrer"
                css={cssObj.businessServiceButton}
              >
                기업서비스
              </a>
              <button
                type="button"
                css={cssObj.loginButton}
                onClick={() => {
                  setLoginModal(true);
                }}
              >
                로그인/회원가입
              </button>
            </div>
          </div>
        </Layout>
      </header>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
      {searchModal && (
        <SearchModal
          close={() => {
            setSearchModal(false);
          }}
        />
      )}
    </>
  );
};
