import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchBar, Button } from "shared-ui/deeple-ds";

import LoginModal from "../LoginModal";
import SearchModal from "../SearchModal";

import { URL } from "@/pages/constants";
import logoWhite from "@/public/logoWhite.svg";

import { cssObj } from "./style";

const GlobalNavigationBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  return (
    <>
      <header css={cssObj.wrapper}>
        <div css={cssObj.titleArea}>
          <Link href={URL.MAIN}>
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
              css={cssObj.businessServicebutton}
            >
              기업서비스
            </a>
            <Button
              size="small"
              css={cssObj.loginButton}
              onClick={() => {
                setLoginModal(true);
              }}
            >
              로그인/회원가입
            </Button>
          </div>
        </div>
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

export default GlobalNavigationBar;
