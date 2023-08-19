import Image from "next/image";
import Link from "next/link";
import { SearchBar, Button } from "shared-ui/deeple-ds";

import logoWhite from "@/public/logoWhite.svg";

import { cssObj } from "./style";

const GlobalNavigationBar = () => {
  return (
    <header css={cssObj.wrapper}>
      <div css={cssObj.titleArea}>
        <Image src={logoWhite} alt="고초대졸_로고" />
        <div css={cssObj.searchBarWrapper}>
          <SearchBar />
        </div>
      </div>
      <div css={cssObj.navigationArea}>
        <nav>
          <ul css={cssObj.navigationWrapper}>
            <li>
              <Link href="/1">채용공고</Link>
            </li>
            <li>
              <Link href="/2">기업정보</Link>
            </li>
            <li>
              <Link href="/3">커뮤니티</Link>
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
          <Button css={cssObj.loginButton}>로그인/회원가입</Button>
        </div>
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
