import { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

import { useMySpecHistory } from "shared-api/spec/useMySpecHistory";
import { useUserInfo } from "shared-api/auth";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { mySpecListFunnelEvent } from "shared-ga/spec";

import { Layout } from "@component/layout";
import { useModal } from "@recoil/hook/modal";

import { META_SPEC_MY } from "shared-constant/meta";
import { AsideMenu } from "../component/asideMenu";
import { SimpleCard } from "./component/simpleCard";
import { Pagination } from "./component/pagination";

import { flexBox, title, wrapper, container, tableHead, cardBox } from "./style";

export const MySpecHistory: NextPage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { setCurrentModal, closeModal } = useModal();
  const activeCardCount = 5;

  const { data: userInfoData, error } = useUserInfo();
  const { data: mySpecHistoryData, isLoading } = useMySpecHistory({
    id: userInfoData?.id,
  });

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    return () => {
      closeModal();
    };
  }, [error, closeModal, setCurrentModal]);

  useEffect(() => {
    setActiveCardIndex(null);
  }, [currentPage]);

  useEffect(() => {
    mySpecListFunnelEvent();
  }, []);

  if (!mySpecHistoryData || isLoading) {
    return (
      <div css={wrapper}>
        <MetaHead metaData={META_SPEC_MY} />
        <Layout>
          <section>
            <strong css={title}>등록한 스펙 내역</strong>
            <div css={flexBox}>
              <AsideMenu isFix={false} />

              <article css={container}>
                <ul css={tableHead}>
                  <li>날짜</li>
                  <li>평균 점수</li>
                  <li>총 평가 수</li>
                  <li>상세보기</li>
                </ul>
              </article>
            </div>
          </section>
        </Layout>
      </div>
    );
  }

  const totalPage = Math.ceil(mySpecHistoryData.specArr.length / activeCardCount);

  const firstArrIndex = (currentPage - 1) * activeCardCount;
  const lastArrIndex = currentPage * activeCardCount;
  const filterMySpecHistoryArr = mySpecHistoryData.specArr.slice(firstArrIndex, lastArrIndex);

  return (
    <main css={wrapper}>
      <MetaHead metaData={META_SPEC_MY} />
      <Layout>
        <section>
          <strong css={title}>등록한 스펙 내역</strong>
          <div css={flexBox}>
            <AsideMenu isFix={false} />

            <article css={container}>
              <ul css={tableHead}>
                <li>날짜</li>
                <li>평균 점수</li>
                <li>총 평가 수</li>
                <li>상세보기</li>
              </ul>

              <div css={cardBox}>
                {filterMySpecHistoryArr.map((mySpecData, index) => {
                  return (
                    <SimpleCard
                      key={`나의스펙내역${mySpecData.id}`}
                      index={index}
                      mySpecData={mySpecData}
                      evalCount={mySpecHistoryData.EvalCount}
                      currentActiveIndex={activeCardIndex}
                      setActiveCardIndex={setActiveCardIndex}
                    />
                  );
                })}
              </div>

              <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </article>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default MySpecHistory;
