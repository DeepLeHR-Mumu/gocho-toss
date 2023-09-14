import { useState } from "react";
import { DropDown } from "shared-ui/deeple-ds";
import { FiChevronDown } from "react-icons/fi";

import { CompanyRow } from "@/components";

import { useUserInfo } from "@/apis/auth";
import { useUserCompanyBookmarkArr } from "@/apis/company";
import { INTERNAL_URL } from "@/pages/constants";

import { NoListCard } from "../../component";
import { filterOption } from "./constant";
import { cssObj } from "./style";
import { BookmarkFilterType } from "./type";

export const CompanyBookmarkPart = () => {
  const [currentFilter, setCurrentFilter] = useState<BookmarkFilterType>("recent");
  const [title, setTitle] = useState<string>("팔로우한 순");

  const { data: userInfo } = useUserInfo();
  const { data: companyBookmarkDataObj } = useUserCompanyBookmarkArr({
    userId: userInfo?.id,
    order: currentFilter,
    size: 100,
  });

  return companyBookmarkDataObj ? (
    <div css={cssObj.wrapper}>
      <div css={cssObj.dropdownWrapper}>
        <DropDown
          title="팔로우한 순"
          customTitle={
            <div css={cssObj.filterBox}>
              <p css={cssObj.filterText}>{title}</p>
              <p>
                <FiChevronDown css={cssObj.filterIcon} />
              </p>
            </div>
          }
          menu={{
            width: 180,
            options: filterOption.map(({ content, filter }) => ({
              key: content,
              focused: title === content,
              content,
              onClick: () => {
                setTitle(content);
                setCurrentFilter(filter);
              },
            })),
          }}
          menuConfig={{
            closeAfterClickEvent: true,
          }}
        />
      </div>
      <div css={cssObj.listWrapper}>
        {companyBookmarkDataObj.companyBookmarkDataArr.map((company) => (
          <CompanyRow key={company.id} company={{ ...company, bookmark: { state: true } }} border />
        ))}
      </div>
    </div>
  ) : (
    <NoListCard text="아직 팔로우한 기업이 없습니다." linkText="기업보러가기" href={INTERNAL_URL.COMPANY} />
  );
};
