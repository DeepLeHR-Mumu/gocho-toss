import { FunctionComponent, useState } from "react";
import { FiRefreshCw, FiChevronDown, FiPlus, FiX, FiFilter } from "react-icons/fi";
import { BsFolderSymlink } from "react-icons/bs";

import { CheckBox } from "../checkbox";
import { filterMenuListArr } from "./constant";
import { FilterProps, filterMenuDef, watchListDef } from "./type";
import {
  filterMenuClose,
  filterSelect,
  title,
  colorPoint,
  flexBox,
  resetButton,
  menuBox,
  menuButton,
  menuArrow,
  setFilterMenu,
  menuCategory,
  userFilterButton,
  activeCategoryContainer,
  activeCategory,
  categoryBox,
  deleteCategory,
  submitButton,
} from "./style";

export const Filter: FunctionComponent<FilterProps> = ({ register, watch, setValue, getValues }) => {
  const [activeMenu, setActiveMenu] = useState<filterMenuDef | null>(null);

  const watchList: watchListDef[] = filterMenuListArr.map((menu) => {
    return { query: menu.query, categoryArr: watch(menu.query) };
  });

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const openMenu = (menu: filterMenuDef) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      {activeMenu !== null && (
        <button
          css={filterMenuClose}
          aria-label="필터 메뉴 닫기"
          type="button"
          onClick={() => {
            return closeMenu();
          }}
        />
      )}

      <div css={filterSelect}>
        <div css={flexBox}>
          {watchList
            .map((list) => {
              return list.categoryArr;
            })
            .every((list) => {
              return list.length === 0;
            }) ? (
            <p css={title}>필터를 선택하세요</p>
          ) : (
            <button
              type="button"
              css={resetButton}
              onClick={() => {
                filterMenuListArr.map((menu) => {
                  return setValue(menu.query, []);
                });
              }}
            >
              <span css={colorPoint}>필터</span>초기화 <FiRefreshCw />
            </button>
          )}
          {filterMenuListArr.map((menu) => {
            const isActiveMenu = menu.name === activeMenu;

            return (
              <div css={menuBox} key={`filterMenu${menu.name}`}>
                <button
                  css={menuButton(isActiveMenu)}
                  type="button"
                  onClick={() => {
                    return isActiveMenu ? closeMenu() : openMenu(menu.name);
                  }}
                >
                  {menu.name}
                  <span css={menuArrow}>
                    <FiChevronDown />
                  </span>
                </button>

                {isActiveMenu && (
                  <div css={setFilterMenu}>
                    {menu.categoryArr.map((category) => {
                      const activeQuery = menu.query;
                      const isMenuEmpty = watch(activeQuery).length === 0;
                      const isCategoryActive = watch(activeQuery).some((watchCategory) => {
                        return watchCategory === category;
                      });

                      // TODO: category 전체 및 전체 아닌 부분 합치기
                      if (category === "전체") {
                        return (
                          <div key={`menuCategory${menu.name}${category}`}>
                            <input
                              type="checkbox"
                              id={`menuCategory${menu.name}${category}`}
                              onClick={() => {
                                setValue(activeQuery, []);
                              }}
                            />
                            <label htmlFor={`menuCategory${menu.name}${category}`} css={menuCategory(isMenuEmpty)}>
                              <CheckBox isChecked={isMenuEmpty} />
                              {category}
                            </label>
                          </div>
                        );
                      }

                      return (
                        <div key={`menuCategory${menu.name}${category}`}>
                          <input
                            type="checkbox"
                            id={`menuCategory${menu.name}${category}`}
                            value={category}
                            {...register(menu.query, {})}
                          />
                          <label htmlFor={`menuCategory${menu.name}${category}`} css={menuCategory(isCategoryActive)}>
                            <CheckBox isChecked={isCategoryActive} />
                            {category}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div css={flexBox}>
          <button type="button" css={userFilterButton} onClick={() => {}}>
            My 필터 불러오기 <BsFolderSymlink />
          </button>
          <button type="button" css={userFilterButton}>
            My 필터 저장 <FiPlus />
          </button>
        </div>
      </div>

      <div css={activeCategoryContainer}>
        <div css={activeCategory}>
          {watchList
            .map((list) => {
              return list.categoryArr;
            })
            .every((list) => {
              return list.length === 0;
            }) && (
            <span css={categoryBox(null)} key="activeMenuCategoryBasic">
              전체 공고
              <button type="button" css={deleteCategory}>
                <FiX />
              </button>
            </span>
          )}
          {watchList.map((list) => {
            return list.categoryArr.map((category) => {
              return (
                <span css={categoryBox(list.query)} key={`activeMenuCategory${category}`}>
                  {category}
                  <button
                    type="button"
                    css={deleteCategory}
                    onClick={() => {
                      setValue(
                        list.query,
                        getValues(list.query).filter((watchCategory) => {
                          return watchCategory !== category;
                        })
                      );
                    }}
                  >
                    <FiX />
                  </button>
                </span>
              );
            });
          })}
        </div>
        <button type="submit" css={submitButton}>
          필터 적용 <FiFilter />
        </button>
      </div>
    </div>
  );
};
