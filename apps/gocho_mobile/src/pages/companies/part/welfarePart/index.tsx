import { FunctionComponent, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

import { Layout } from "@component/layout";
import { COLORS } from "shared-style/color";
import { useCompanyDetail } from "shared-api/company";

import { NoRegisteredInfoBox } from "../../component/noRegisterdInfoBox";
import { UpdateInfoLink } from "../../component/updateInfoLink";
import { ActivatedMenuType } from "./type";
import { IconSelector } from "./component/iconSelector";

export const WelfarePart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const [activatedTab, setActivatedTab] = useState<ActivatedMenuType>("money");

  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  useEffect(() => {
    if (!companyDetailData) {
      return;
    }
    if (companyDetailData.data.welfare.money) {
      setActivatedTab("money");
      return;
    }
    if (companyDetailData.data.welfare.health) {
      setActivatedTab("health");
      return;
    }
    if (companyDetailData.data.welfare.life) {
      setActivatedTab("life");
      return;
    }
    if (companyDetailData.data.welfare.holiday) {
      setActivatedTab("holiday");
      return;
    }
    if (companyDetailData.data.welfare.facility) {
      setActivatedTab("facility");
      return;
    }
    if (companyDetailData.data.welfare.vacation) {
      setActivatedTab("vacation");
      return;
    }
    if (companyDetailData.data.welfare.growth) {
      setActivatedTab("growth");
      return;
    }
    setActivatedTab("etc");
  }, [companyDetailData]);

  if (isLoading || !isSuccess) {
    // TODO 스켈레톤 넣자
    return <>Loading</>;
  }
  const { money, health, life, holiday, facility, vacation, growth, etc } = companyDetailData.data.welfare;
  return (
    <section>
      <Layout>
        <h2
          css={css`
            color: ${COLORS.GRAY10};
            font-size: 1.375rem;
            font-weight: 500;
            margin-top: 3rem;
            margin-bottom: 1rem;
          `}
        >
          복지정보
        </h2>
      </Layout>
      {money === null &&
        health === null &&
        life === null &&
        holiday === null &&
        facility === null &&
        vacation === null &&
        growth === null &&
        etc === null && <NoRegisteredInfoBox infoName="복지" />}
      <div
        css={css`
          overflow: hidden;
          overflow-x: scroll;
          width: 100%;
          padding: 1rem 0;
          scrollbar-width: none;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <ul
          css={css`
            display: flex;
            font-size: 16px;
            > li {
              flex-shrink: 0;
              margin: 0 2rem;
              display: flex;
              justify-content: center;
            }
          `}
        >
          {companyDetailData.data.welfare.money && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("money");
                }}
              >
                급여
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.health && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("health");
                }}
              >
                의료
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.life && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("life");
                }}
              >
                생활
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.holiday && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("holiday");
                }}
              >
                명절/경조사
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.facility && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("facility");
                }}
              >
                시설
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.vacation && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("vacation");
                }}
              >
                휴일/휴가
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.growth && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("growth");
                }}
              >
                자기계발
              </button>
            </li>
          )}
          {companyDetailData.data.welfare.etc && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setActivatedTab("etc");
                }}
              >
                기타
              </button>
            </li>
          )}
        </ul>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background-color: ${COLORS.BLUE_SECOND90};
          padding: 1.5rem 0;
          margin-bottom: 1.5625rem;
        `}
      >
        <IconSelector activatedMenu={activatedTab} />
        <div
          css={css`
            width: 16.25rem;
            background-color: ${COLORS.GRAY100};
            padding: 1rem;
            border-radius: 1.5rem 0 1.5rem 1.5rem;
            > p {
              margin-bottom: 0.5rem;
              :last-of-type {
                margin-bottom: 0;
              }
            }
          `}
        >
          {companyDetailData.data.welfare[activatedTab]?.map((weflare) => {
            return <p>&#183; {weflare}</p>;
          })}
        </div>
      </div>
      <UpdateInfoLink infoName="복지" />
    </section>
  );
};
