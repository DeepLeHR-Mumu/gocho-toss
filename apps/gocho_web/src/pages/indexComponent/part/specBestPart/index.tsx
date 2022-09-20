import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

import { useSpecArr } from "shared-api/spec";
import { MAIN_URL } from "shared-constant/internalURL";
import { Layout } from "@component/layout";

import { BestUserList } from "./component/bestUserList";
import { BestUserBox } from "./component/bestUserInfo";
import { specBestWrapper, colorPoint, title, linkButton, bestUserWrapper } from "./stye";

export const SpecBestPart: FunctionComponent = () => {
  const [activeUserID, setActiveUserID] = useState(0);

  const {
    data: selectedSpecArr,
    isError,
    isLoading,
    isSuccess,
  } = useSpecArr({
    order: "-score",
    limit: 9,
  });

  // LATER - 데이터 로딩 검사방안 변경
  if (!selectedSpecArr || !isSuccess || isError) {
    return <div>데이터 없을시 처리방법 고민</div>;
  }

  if (isLoading) {
    return <div>데이터 없을시 처리방법 고민</div>;
  }

  return (
    <section css={specBestWrapper}>
      <Layout>
        <h2 css={title}>
          <span>
            스펙평가 <span css={colorPoint}>BEST</span>
          </span>
          {/* LATER - Link를 h2 밖으로 꺼내기 */}
          <Link href={MAIN_URL} passHref>
            <a css={linkButton}>
              <span>전체보기</span> <BsChevronRight />
            </a>
          </Link>
        </h2>
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
