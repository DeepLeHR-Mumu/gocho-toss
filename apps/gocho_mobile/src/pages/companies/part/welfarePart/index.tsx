import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useCompanyDetail } from "shared-api/company";

import { NoRegisteredInfoBox } from "../../component/noRegisterdInfoBox";
import { UpdateInfoLink } from "../../component/updateInfoLink";
import { ActivatedMenuType } from "./type";
import { IconSelector } from "./component/iconSelector";
import { container, headerBox, infoBox, informationWrapper, menuList } from "./style";

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
  if (!(money || health || life || holiday || facility || vacation || growth || etc)) {
    return (
      <section css={container}>
        <NoRegisteredInfoBox infoName="복지" />
      </section>
    );
  }
  return (
    <section css={container}>
      <div css={headerBox}>
        <ul css={menuList}>
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
      <div css={informationWrapper}>
        <IconSelector activatedMenu={activatedTab} />
        <div css={infoBox}>
          {companyDetailData.data.welfare[activatedTab]?.map((weflare) => {
            return <p>&#183; {weflare}</p>;
          })}
        </div>
      </div>
      <UpdateInfoLink infoName="복지" />
    </section>
  );
};
