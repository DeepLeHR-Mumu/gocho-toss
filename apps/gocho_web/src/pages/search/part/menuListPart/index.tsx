import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import { useJobArr } from "shared-api/job";
import { useCompanyArr } from "shared-api/company";

import { searchMenuButtonArr } from "./constant";
import { menuButton, menuElement, menuList } from "./style";

export const MenuListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jobData } = useJobArr({
    order: "recent",
    filter: "valid",
    searchWord: router.query.q as string,
  });

  const { data: companyData } = useCompanyArr({
    q: router.query.q as string,
    order: "view",
  });

  const totalCount = (jobData?.pageResult.totalElements || 0) + (companyData?.pageResult.totalElements || 0);

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
                {menuText === "공고" && jobData?.pageResult.totalElements.toLocaleString("Ko-KR")}
                {menuText === "기업" && companyData?.pageResult.totalElements.toLocaleString("Ko-KR")}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
