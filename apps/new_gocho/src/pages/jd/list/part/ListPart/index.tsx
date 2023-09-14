import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { FiGrid, FiList } from "react-icons/fi";

import { DropDown } from "shared-ui/deeple-ds";
import { dummyArrCreator } from "shared-util";

import { useJdArr } from "@/apis/jd";
import { JdCard } from "@/components/common/JdCard";
import { JdRow, Pagination } from "@/components";

import { ListPartProps } from "./type";
import { cssObj } from "./style";

export const ListPart = ({ filterObj }: ListPartProps) => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const router = useRouter();
  const order = useMemo(() => {
    switch (router.query.order) {
      case "recent":
        return "recent";
      case "end":
        return "end";
      case "popular":
        return "popular";
      default:
        return "recent";
    }
  }, [router.query.order]);

  const { data: jdArrData } = useJdArr({
    enable: true,
    filter: "valid",
    size: viewMode === "grid" ? 20 : 10,
    page: Number(router.query.page),
    order,
    ...filterObj,
  });

  const getDropDownTitle = (text?: string) => {
    switch (text) {
      case "recent":
        return "최신 순";
      case "end":
        return "마감 임박 순";
      case "popular":
        return "찜 많은 순";
      default:
        return "";
    }
  };

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.dropDownWrapper}>
        <DropDown
          title={getDropDownTitle(order)}
          menu={{
            options: [
              {
                content: "최신 순",
                onClick: () => {
                  router.replace({ query: { ...router.query, order: "recent" } });
                },
              },
              {
                content: "마감 임박 순",
                onClick: () => {
                  router.replace({ query: { ...router.query, order: "end" } });
                },
              },
              {
                content: "찜 많은 순",
                onClick: () => {
                  router.replace({ query: { ...router.query, order: "popular" } });
                },
              },
            ],
          }}
          menuConfig={{
            closeAfterClickEvent: true,
          }}
        />
        <button
          type="button"
          css={cssObj.iconButton(viewMode === "list")}
          onClick={() => {
            setViewMode("list");
          }}
        >
          <FiList />
        </button>
        <button
          type="button"
          css={cssObj.iconButton(viewMode === "grid")}
          onClick={() => {
            setViewMode("grid");
          }}
        >
          <FiGrid />
        </button>
      </div>
      <div css={viewMode === "grid" ? cssObj.jdGridWrapper : cssObj.jdListWrapper}>
        {jdArrData
          ? jdArrData.jdDataArr.map((jd) =>
              viewMode === "grid" ? (
                <JdCard key={jd.id} jd={{ ...jd }} />
              ) : (
                <JdRow
                  key={jd.id}
                  jd={{
                    jdId: jd.id,
                    companyName: jd.company.name,
                    jdTitle: jd.title,
                    dueDate: jd.endTime,
                    bookmarked: jd.isBookmark,
                  }}
                />
              )
            )
          : dummyArrCreator(viewMode === "grid" ? 20 : 10).map((dummy) =>
              viewMode === "grid" ? <JdCard key={`jdPageListPart${dummy}`} /> : <JdRow key={`jdPageListPart${dummy}`} />
            )}
      </div>
      <div css={cssObj.paginationWrapper}>
        <Pagination totalPage={jdArrData ? jdArrData.pageResult.totalPages : 0} />
      </div>
    </section>
  );
};
