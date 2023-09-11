import { useState } from "react";
import { DropDown } from "shared-ui/deeple-ds";
import { FiChevronDown } from "react-icons/fi";

import { CompanyRow } from "@/components";
import { NoListCard } from "../NoListCard";

import { useUserInfo } from "@/apis/auth/useUserInfo";
import { useUserCompanyBookmarkArr } from "@/apis/company";

import { cssObj } from "./style";
import { BookmarkFilterType } from "./type";

export const FallowPart = () => {
  const [filter, setFilter] = useState<BookmarkFilterType>("recent");
  const [title, setTitle] = useState<string>("팔로우한 순");

  const filterOption = [
    {
      key: 1,
      content: "팔로우한 순",
      filter: "recent",
      setState: () => {
        setFilter("recent");
      },
    },
    {
      key: 2,
      content: "팔로워 많은 순",
      filter: "popular",
      setState: () => {
        setFilter("popular");
      },
    },
    {
      key: 3,
      content: "이름 순",
      filter: "name",
      setState: () => {
        setFilter("name");
      },
    },
    {
      key: 4,
      content: "평균 연봉 순",
      filter: "pay",
      setState: () => {
        setFilter("pay");
      },
    },
  ];

  const { data: userInfo } = useUserInfo();
  const { data: companyList } = useUserCompanyBookmarkArr({
    userId: userInfo?.id,
    order: filter,
    size: 100,
  });

  return (
    <>
      {!companyList && <NoListCard text="아직 팔로우한 기업이 없습니다." linkText="기업보러가기" href="company" />}
      {companyList && (
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
                closeAfterClickEvent: true,
                options: filterOption.map(({ key, content, setState }) => {
                  return {
                    key,
                    focused: title === content,
                    content: <p>{content}</p>,
                    onClick: () => {
                      setTitle(content);
                      setState();
                    },
                  };
                }),
              }}
            />
          </div>
          <div css={cssObj.listWrapper}>
            {companyList.companyBookmarkDataArr.map(({ id, industry, name, logoUrl, size }) => {
              return (
                <CompanyRow
                  key={id}
                  id={id}
                  logo={logoUrl || ""}
                  name={name}
                  size={size}
                  industry={industry}
                  border
                  bookmark={{
                    state: true,
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
