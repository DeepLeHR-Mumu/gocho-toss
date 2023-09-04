import { NextPage } from "next";
import Link from "next/link";

import { Layout } from "@/components";

import { Account } from "./part/Account";
import { Box } from "./component/Box";
import { cssObj } from "./style";

const MyPage: NextPage = () => {
  return (
    <main>
      <Layout>
        <div css={cssObj.wrapper}>
          <Box>
            <div css={cssObj.sideNavigation}>
              <Link href={{ query: { type: "account" } }}>계정 관리</Link>
              <Link href={{ query: { type: "bookmark" } }}>북마크</Link>
              <Link href={{ query: { type: "alarm" } }}>알림 설정</Link>
            </div>
          </Box>
          <Account />
          <Box>
            <div css={cssObj.sideNavigation}>
              <Link href={{ query: { type: "" } }}>공지사항</Link>
              <Link href={{ query: { type: "" } }}>QnA</Link>
              <Link href={{ query: { type: "" } }}>고객센터</Link>
              <Link href={{ query: { type: "" } }}>약관 및 정책</Link>
              <Link href={{ query: { type: "" } }}>오픈 소스 라이센스</Link>
            </div>
          </Box>
        </div>
      </Layout>
    </main>
  );
};

export default MyPage;
