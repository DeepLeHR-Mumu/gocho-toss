import { searchMenuDef } from "@pages/search/type";
import { useRouter } from "next/router";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { useCompanyArr } from "shared-api/company";
import { useJobArr } from "shared-api/job";

import { searchMenuButtonArr } from "./constant";
import { menuButton, menuElement, menuList } from "./style";

interface MenuListPartProps {
  setMenu: Dispatch<SetStateAction<searchMenuDef>>;
  menu: string;
}

export const MenuListPart: FunctionComponent<MenuListPartProps> = ({ setMenu, menu }) => {
  const router = useRouter();
  const jobPage = Number(router.query.page);
  const companyPage = Number(router.query.page);

  const { data: jobDataArr } = useJobArr({
    q: JSON.stringify({ searchWord: router.query.q }),
    order: "recent",
    filter: "valid",
    limit: 10,
    offset: (jobPage - 1) * 10,
  });

  const { data: companyDataArr } = useCompanyArr({
    q: router.query.q as string,
    order: "recent",
    limit: 12,
    offset: (companyPage - 1) * 12,
  });

  const totalCount = (jobDataArr?.count || 0) + (companyDataArr?.count || 0);

  return (
    <nav>
      <ul css={menuList}>
        {searchMenuButtonArr.map((menuText) => {
          const isActive = menuText === menu;
          return (
            <li css={menuElement} key={menuText}>
              <button
                css={menuButton(isActive)}
                type="button"
                onClick={() => {
                  if (menuText !== "전체") {
                    router.push({
                      pathname: "/search",
                      query: { q: router.query.q, page: 1 },
                    });
                  } else {
                    router.push({
                      pathname: "/search",
                      query: { q: router.query.q },
                    });
                  }
                  setMenu(menuText);
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
