import { useState } from "react";

import { useUserInfo } from "@/apis/auth/useUserInfo";
import { useUserCompanyHistoryArr } from "@/apis/company/useUserCompanyHistoryArr";
import { useUserJdHistoryArr } from "@/apis/jd/useUserJdHistoryArr";

import { CompanyRow, JdRow } from "@/components";

import { NoListCard } from "../../component";
import { RecentMenu } from "./type";
import { cssObj } from "./style";

export const HistoryPart = () => {
  const [currentMenu, setCurrentMenu] = useState<RecentMenu>("기업");

  const { data: userInfo } = useUserInfo();
  const { data: companyHistoryObj } = useUserCompanyHistoryArr({
    userId: userInfo?.id,
  });
  const { data: jdHistoryObj } = useUserJdHistoryArr({
    userId: userInfo?.id,
  });

  return (
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
          (companyHistoryObj?.companyHistoryDataArr.length ? (
            companyHistoryObj?.companyHistoryDataArr.map(({ id, industry, name, logoUrl, size, isBookmark }) => (
              <CompanyRow
                key={id}
                company={{
                  id,
                  size,
                  industry,
                  name,
                  logo: logoUrl || "",
                  bookmark: { state: isBookmark },
                }}
              />
            ))
          ) : (
            <NoListCard text="최근 본 내역이 없습니다." />
          ))}
        {currentMenu === "공고" &&
          (jdHistoryObj?.userJdHistoryArr.length ? (
            jdHistoryObj.userJdHistoryArr.map(({ id, title, endTime, company, isBookmark }) => (
              <JdRow
                key={id}
                jd={{
                  jdId: id,
                  dueDate: endTime,
                  jdTitle: title,
                  companyName: company.name,
                  bookmarked: isBookmark,
                }}
              />
            ))
          ) : (
            <NoListCard text="최근 본 내역이 없습니다." />
          ))}
      </div>
    </>
  );
};
