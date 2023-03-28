import { FunctionComponent, useState } from "react";
import { FiRefreshCw, FiChevronDown, FiPlus, FiX, FiFilter } from "react-icons/fi";
import { BsFolderSymlink } from "react-icons/bs";

import { useUserFilter, useDoUserFilter } from "shared-api/filter";
import { useUserInfo } from "shared-api/auth";
import { CheckBox } from "shared-ui/common/atom/checkbox";
import { myFilterLoadEvent, myFilterSaveEvent } from "shared-ga/jd";

import { useToast } from "@/globalStates";

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
  submitButton,
} from "./style";

export const Filter: FunctionComponent<FilterProps> = ({ register, watch, setValue, getValues }) => {
  const [activeMenu, setActiveMenu] = useState<filterMenuDef | null>(null);
  const { setToastMessage } = useToast();
  const watchList: watchListDef[] = filterMenuListArr.map((menu) => {
    return { query: menu.query, categoryArr: watch(menu.query) };
  });

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const openMenu = (menu: filterMenuDef) => {
    setActiveMenu(menu);
  };

  const { data: userInfoData, isSuccess } = useUserInfo();
  const {
    data: userFilter,
    isSuccess: userFilterSuccess,
    refetch: refetchUserFilter,
  } = useUserFilter({ userId: userInfoData?.id });
  const { mutate } = useDoUserFilter();

  const applyUserFilter = () => {
    if (!isSuccess) {
      setToastMessage("로그인후 My 필터를 저장해주세요.");
      return;
    }

    if (!userFilter) {
      setToastMessage("My필터를 저장후 불러주세요.");
      return;
    }

    if (userFilterSuccess) {
      myFilterLoadEvent();
      setToastMessage("My필터를 불러왔습니다.");
    }

    const userFilterArr: watchListDef[] = [
      { query: "possibleEdu", categoryArr: userFilter?.possibleEdu || [] },
      { query: "place", categoryArr: userFilter?.place || [] },
      { query: "requiredExp", categoryArr: userFilter?.requiredExp || [] },
      { query: "contractType", categoryArr: userFilter?.contractType || [] },
      { query: "rotation", categoryArr: userFilter?.rotation || [] },
      { query: "industry", categoryArr: userFilter?.industry || [] },
      { query: "task", categoryArr: userFilter?.task || [] },
    ];

    userFilterArr.map((filterMenu) => {
      return setValue(filterMenu.query, filterMenu.categoryArr);
    });
  };

  const saveUserFilter = () => {
    if (!isSuccess) {
      setToastMessage("로그인후 My 필터를 저장해주세요.");
      return;
    }

    mutate(
      {
        userId: userInfoData?.id,
        q: {
          possible_edu: watch("possibleEdu"),
          place: watch("place"),
          industry: watch("industry"),
          rotation: watch("rotation"),
          task: watch("task"),
          required_exp: watch("requiredExp"),
          contract_type: watch("contractType"),
        },
      },
      {
        onSuccess: () => {
          refetchUserFilter();
          myFilterSaveEvent();
          setToastMessage("My필터가 저장되었습니다");
        },
      }
    );
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
            <p css={title}>필터</p>
          ) : (
            <button
              type="button"
              aria-label="필터 초기화"
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
            const isCategoryLengthThen11 = Boolean(menu.categoryArr.length >= 11);

            return (
              <div css={menuBox} key={`filterMenu${menu.name}`}>
                <button
                  aria-label={isActiveMenu ? `${menu.name} 메뉴 닫기` : `${menu.name} 메뉴 열기`}
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
                  <div css={setFilterMenu(isCategoryLengthThen11)}>
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
          <button
            type="button"
            css={userFilterButton}
            onClick={() => {
              applyUserFilter();
            }}
          >
            My 필터 불러오기 <BsFolderSymlink />
          </button>
          <button
            type="button"
            css={userFilterButton}
            onClick={() => {
              saveUserFilter();
            }}
          >
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
            <p css={categoryBox(null)} key="activeMenuCategoryBasic">
              전체
            </p>
          )}
          {watchList.map((list) => {
            return list.categoryArr.map((category) => {
              return (
                <button
                  type="button"
                  key={`activeMenuCategory${category}`}
                  css={categoryBox(list.query)}
                  aria-label={`${category}필터 제거`}
                  onClick={() => {
                    setValue(
                      list.query,
                      getValues(list.query).filter((watchCategory) => {
                        return watchCategory !== category;
                      })
                    );
                  }}
                >
                  <span>{category}</span>
                  <FiX />
                </button>
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
