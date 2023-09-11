import { useState } from "react";

import { Checkbox, DropDown } from "shared-ui/deeple-ds";
import { FiChevronDown } from "react-icons/fi";

import { useUserInfo } from "@/apis/auth/useUserInfo";
import { useUserJdBookmarkArr } from "@/apis/jd";

import { JdRow } from "@/components";

import { NoListCard } from "../NoListCard";
import { cssObj } from "./style";
import { JdBookmarkFilterType } from "./type";

export const JDBookmarkPart = () => {
  const [isExpiredJdView, setExpiredJdView] = useState<boolean>(false);

  const [filter, setFilter] = useState<JdBookmarkFilterType>("recent");
  const [dropTitle, setTitle] = useState<string>("최근 찜한 순");

  const filterOption = [
    {
      key: 1,
      content: "최근 찜한 순",
      filter: "recent",
      setState: () => {
        setFilter("recent");
      },
    },
    {
      key: 2,
      content: "찜 많은 순",
      filter: "popular",
      setState: () => {
        setFilter("popular");
      },
    },
    {
      key: 3,
      content: "공고 게시 순",
      filter: "upload",
      setState: () => {
        setFilter("upload");
      },
    },
    {
      key: 4,
      content: "마감일 임박 순",
      filter: "end",
      setState: () => {
        setFilter("end");
      },
    },

    {
      key: 5,
      content: "조회수 순",
      filter: "view",
      setState: () => {
        setFilter("view");
      },
    },
  ];

  const { data: userInfo } = useUserInfo();
  const { data: jdList } = useUserJdBookmarkArr({
    userId: userInfo?.id,
    order: filter,
    filter: isExpiredJdView ? "valid" : undefined,
    size: 100,
  });

  const handlerExpiredView = () => {
    setExpiredJdView(!isExpiredJdView);
  };

  return (
    <>
      {!jdList && <NoListCard text="아직 찜한 공고가 없습니다." linkText="공고 보러가기" href="jd" />}
      {jdList && (
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
                  <p css={cssObj.filterText}>{dropTitle}</p>
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
                    focused: dropTitle === content,
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
            {jdList.userJdBookmarkArr.map(({ id, title, endTime, company }) => {
              return (
                <JdRow jdId={id} key={id} dueDate={endTime} jdTitle={title} bookmarked companyName={company.name} />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
