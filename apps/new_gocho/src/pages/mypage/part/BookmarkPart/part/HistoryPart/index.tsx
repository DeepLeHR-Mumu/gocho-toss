import { useState } from "react";

import { useUserInfo } from "@/apis/auth/useUserInfo";
import { useUserCompanyHistoryArr } from "@/apis/company/useUserCompanyHistoryArr";
import { useUserJdHistoryArr } from "@/apis/jd/useUserJdHistoryArr";

import { CompanyRow, JdRow } from "@/components";
import { NoListCard } from "../NoListCard";

import { RecentMenu } from "./type";
import { cssObj } from "./style";

export const HistoryPart = () => {
  const [currentMenu, setCurrentMenu] = useState<RecentMenu>("기업");

  const { data: userInfo } = useUserInfo();
  const { data: companyArr } = useUserCompanyHistoryArr({
    userId: userInfo?.id,
  });
  const { data: jdArr } = useUserJdHistoryArr({
    userId: userInfo?.id,
  });

  return (
    <>
      {!companyArr && !jdArr && <NoListCard text="최근 본 내역이 없습니다." />}
      {companyArr && jdArr && (
        <>
          <div>
            <div css={cssObj.menuWrapper}>
              <button
                type="button"
                onClick={() => setCurrentMenu("기업")}
                css={currentMenu === "기업" ? cssObj.selectedButton : cssObj.defaultButton}
              >
                기업
              </button>
              <button
                type="button"
                onClick={() => setCurrentMenu("공고")}
                css={currentMenu === "공고" ? cssObj.selectedButton : cssObj.defaultButton}
              >
                공고
              </button>
            </div>
          </div>
          <div css={cssObj.listWrapper}>
            {currentMenu === "기업" &&
              companyArr.companyHistoryDataArr.map(({ id, industry, name, logoUrl, size }) => (
                <CompanyRow
                  key={id}
                  id={id}
                  size={size}
                  logo={logoUrl || ""}
                  name={name}
                  industry={industry}
                  border
                  bookmark={{
                    state: true,
                  }}
                />
              ))}
            {currentMenu === "공고" &&
              jdArr.userJdHistoriesArr.map(({ id, title, endTime, company }) => (
                <JdRow jdId={id} key={id} dueDate={endTime} jdTitle={title} bookmarked companyName={company.name} />
              ))}
          </div>
        </>
      )}
    </>
  );
};
