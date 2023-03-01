import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

import { useSpecArr } from "shared-api/spec";
import { SPEC_LIST_URL } from "shared-constant/internalURL";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { BestUserList } from "./component/bestUserList";
import { BestUserBox } from "./component/bestUserInfo";
import { specBestWrapper, colorPoint, title, linkButton, bestUserWrapper } from "./style";

export const SpecBestPart: FunctionComponent = () => {
  const [activeUserID, setActiveUserID] = useState(0);

  const { data: selectedSpecArr, isLoading } = useSpecArr({
    order: "-score",
    limit: 9,
  });

  if (!selectedSpecArr || isLoading) {
    return (
      <section css={specBestWrapper}>
        <InvisibleH2 title="생산/기능직 구직자 스펙 평가 리스트" />
        <Layout>
          <p css={title}>
            <span css={colorPoint}>BEST</span> 스펙평가 ✨
          </p>
          <Link href={SPEC_LIST_URL} passHref css={linkButton}>
            전체보기 <BsChevronRight />
          </Link>

          <div css={bestUserWrapper}>
            <BestUserList isSkeleton />
            <BestUserBox isSkeleton />
          </div>
        </Layout>
      </section>
    );
  }

  return (
    <section css={specBestWrapper}>
      <InvisibleH2 title="생산/기능직 구직자 스펙 평가 리스트" />
      <Layout>
        <p css={title}>
          <span css={colorPoint}>BEST</span> 스펙평가 ✨
        </p>
        <Link href={SPEC_LIST_URL} passHref css={linkButton}>
          전체보기 <BsChevronRight />
        </Link>

        <div css={bestUserWrapper}>
          <BestUserList
            setActiveUserID={setActiveUserID}
            activeUserID={activeUserID}
            bestUserDataArr={selectedSpecArr}
          />
          <BestUserBox bestUserData={selectedSpecArr[activeUserID]} />
        </div>
      </Layout>
    </section>
  );
};
