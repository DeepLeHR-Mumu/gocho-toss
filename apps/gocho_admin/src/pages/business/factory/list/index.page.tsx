import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

import { ErrorScreen, LoadingScreen } from "@component/screen";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { useFactoryArr } from "@api/factory/useFactoryArr";

import FactoryCard from "./component/factoryCard";
import {
  sectionContainer,
  listChangeButton,
  tableContainer,
  factoryContainer,
  factoryIdBox,
  factoryNameBox,
  buttonContainer,
} from "./style";
import { FACTORY_SEARCH_LIMIT } from "./constant";

const BusinessFactoryList: NextPage = () => {
  const [factoryStatus, setFactoryStatus] = useState<"upload-waiting" | "modify-waiting">("upload-waiting");
  const router = useRouter();

  const {
    data: factoryDataObj,
    isLoading,
    isError,
  } = useFactoryArr({
    status: factoryStatus,
    limit: FACTORY_SEARCH_LIMIT,
    offset: (Number(router.query.page) - 1) * FACTORY_SEARCH_LIMIT,
  });

  if (!factoryDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const changeFactoryStatusHandler = () => {
    setFactoryStatus((prev) => {
      return prev === "upload-waiting" ? "modify-waiting" : "upload-waiting";
    });
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>{factoryStatus === "upload-waiting" ? "공장 등록 요청 목록" : "공장 수정 요청 목록"}</h2>
      <section css={sectionContainer}>
        <button
          type="button"
          css={listChangeButton}
          onClick={() => {
            changeFactoryStatusHandler();
          }}
        >
          {factoryStatus === "upload-waiting" ? "수정 요청 목록 보기" : "등록 요청 목록 보기"}
        </button>
        <table css={tableContainer}>
          <thead>
            <tr css={factoryContainer}>
              <th css={factoryIdBox}>공장 ID</th>
              <th css={factoryNameBox}>공장 이름</th>
              <th css={buttonContainer}> </th>
            </tr>
          </thead>
          <tbody>
            {factoryDataObj.factoryDataArr.map((factory) => {
              return <FactoryCard factory={factory} key={`ManagerBizFactoryCard${factory.id}`} />;
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default BusinessFactoryList;
