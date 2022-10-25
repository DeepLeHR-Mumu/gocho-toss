import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import { useUnifiedJobSearchArr } from "shared-api/job";
import { useUnifiedCompanySearchArr } from "shared-api/company";

import { searchMenuButtonArr } from "./constant";
import { menuButton, menuElement, menuList } from "./style";

export const MenuListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jobDataArr } = useUnifiedJobSearchArr({
    searchWord: router.query.q,
    page: router.query.page,
    limit: 0,
  });

  const { data: companyDataArr } = useUnifiedCompanySearchArr({
    searchWord: router.query.q,
    page: router.query.page,
    limit: 0,
  });

  const totalCount = (jobDataArr?.count || 0) + (companyDataArr?.count || 0);

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
                {menuText === "공고" && jobDataArr?.count.toLocaleString("Ko-KR")}
                {menuText === "기업" && companyDataArr?.count.toLocaleString("Ko-KR")}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
