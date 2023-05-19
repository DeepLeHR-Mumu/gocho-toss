import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import { useJobArr } from "shared-api/job";
import { useCompanyArr } from "shared-api/company";

import { searchMenuButtonArr } from "@pages/search/constant";
import { menuButton, menuElement, menuList } from "./style";

export const MenuListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jobDataObj } = useJobArr({
    order: "recent",
    filter: "valid",
    searchWord: router.query.q as string,
    size: 4,
  });

  const { data: companyDataObj } = useCompanyArr({
    q: router.query.q as string,
    order: "view",
    size: 10,
  });

  const totalCount = (jobDataObj?.pageResult.totalElements || 0) + (companyDataObj?.pageResult.totalElements || 0);

  return (
    <nav>
      <ul css={menuList}>
        {searchMenuButtonArr.map((menuText) => {
          const isActive = menuText === router.query.menu;
          return (
            <li css={menuElement} key={menuText}>
              <button
                css={menuButton(isActive)}
                type="button"
                onClick={() => {
                  router.push({
                    pathname: "/search",
                    query: { ...router.query, page: 1, menu: menuText },
                  });
                }}
              >
                {menuText} {menuText === "전체" && totalCount.toLocaleString("Ko-KR")}
                {menuText === "공고" && jobDataObj?.pageResult.totalElements.toLocaleString("Ko-KR")}
                {menuText === "기업" && companyDataObj?.pageResult.totalElements.toLocaleString("Ko-KR")}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
