import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { Checkbox, DropDown } from "shared-ui/deeple-ds";

import { useUserInfo } from "@/apis/auth";
import { useUserJdBookmarkArr } from "@/apis/jd";
import { JdRow } from "@/components";
import { INTERNAL_URL } from "@/constants";

import { NoListCard } from "../../component";
import { filterOption } from "./constant";
import { JdBookmarkFilterType } from "./type";
import { cssObj } from "./style";

export const JdBookmarkPart = () => {
  const [isExpiredJdView, setIsExpiredJdView] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<JdBookmarkFilterType>("recent");
  const [filterText, setFilterText] = useState<string>("최근 찜한 순");

  const { data: userInfo } = useUserInfo();
  const { data: jdBookmarkDataObj } = useUserJdBookmarkArr({
    userId: userInfo?.id,
    order: currentFilter,
    filter: isExpiredJdView ? "valid" : undefined,
    size: 100,
  });

  const handlerExpiredView = () => {
    setIsExpiredJdView(!isExpiredJdView);
  };

  return (
    <>
      <div css={cssObj.wrapper}>
        <div css={cssObj.checkWrapper}>
          <Checkbox checked={isExpiredJdView} onChange={handlerExpiredView} />
          <p>만료된 공고 제외</p>
        </div>
        <DropDown
          title="팔로우한 순"
          customTitle={
            <div css={cssObj.filterBox}>
              <p css={cssObj.filterText}>{filterText}</p>
              <p>
                <FiChevronDown css={cssObj.filterIcon} />
              </p>
            </div>
          }
          menu={{
            width: 180,
            options: filterOption.map(({ content, filter }) => ({
              key: content,
              focused: filterText === content,
              content: <p>{content}</p>,
              onClick: () => {
                setFilterText(content);
                setCurrentFilter(filter);
              },
            })),
          }}
          menuConfig={{
            closeAfterClickEvent: true,
          }}
        />
      </div>
      {jdBookmarkDataObj?.pageResult.totalElements ? (
        <div css={cssObj.listWrapper}>
          {jdBookmarkDataObj?.userJdBookmarkArr.map(({ id, title, endTime, company }) => (
            <JdRow
              key={id}
              jd={{ jdId: id, dueDate: endTime, jdTitle: title, bookmarked: true, companyName: company.name }}
            />
          ))}
        </div>
      ) : (
        <NoListCard text="아직 찜한 공고가 없습니다." linkText="공고 보러가기" href={INTERNAL_URL.JD} />
      )}
    </>
  );
};
