import { FunctionComponent, useState } from "react";
import { FiRefreshCw, FiChevronRight, FiPlus, FiX, FiFilter } from "react-icons/fi";
import { BsFolderSymlink } from "react-icons/bs";

import { useUserFilter, useDoUserFilter } from "shared-api/filter";
import { useUserInfo } from "shared-api/auth";
import { CheckBox } from "shared-ui/common/atom/checkbox";

import { filterMenuListArr } from "./constant";
import { FilterProps, filterMenuDef, watchListDef } from "./type";
import {
  filterContainer,
  closeButton,
  flexBox,
  filterText,
  filterSelect,
  title,
  colorPoint,
  resetButton,
  menuButton,
  menuArrow,
  filterCategoryContainer,
  menuCategoryInput,
  menuCategory,
  userFilterButton,
  activeCategoryContainer,
  categoryBox,
  deleteCategory,
  submitButton,
} from "./style";

export const Filter: FunctionComponent<FilterProps> = ({ register, watch, setValue, getValues, setShowFilter }) => {
  const [activeMenu, setActiveMenu] = useState<filterMenuDef>("학력");

  const watchList: watchListDef[] = filterMenuListArr.map((menu) => {
    return { query: menu.query, categoryArr: watch(menu.query) };
  });

  const { data: userInfoData } = useUserInfo();
  const { data: userFilter, refetch: refetchUserFilter } = useUserFilter({ userId: userInfoData?.id });
  const { mutate } = useDoUserFilter();

  const applyUserFilter = () => {
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
    mutate(
      {
        userId: userInfoData?.id,
        q: {
          possibleEdu: watch("possibleEdu"),
          place: watch("place"),
          industry: watch("industry"),
          rotation: watch("rotation"),
          task: watch("task"),
          requiredExp: watch("requiredExp"),
          contractType: watch("contractType"),
        },
      },
      {
        onSuccess: () => {
          refetchUserFilter();
        },
      }
    );
  };

  return (
    <div css={filterContainer}>
      <button
        css={closeButton}
        type="button"
        onClick={() => {
          setShowFilter(false);
        }}
      >
        닫기
      </button>
      <div css={flexBox}>
        <p css={filterText}>필터</p>
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

      <div css={filterSelect}>
        <div>
          {filterMenuListArr.map((menu) => {
            const isActiveMenu = menu.name === activeMenu;

            return (
              <div key={`filterMenu${menu.name}`}>
                <button
                  css={menuButton(isActiveMenu)}
                  type="button"
                  onClick={() => {
                    return setActiveMenu(menu.name);
                  }}
                >
                  {menu.name}
                  <span css={menuArrow}>
                    <FiChevronRight />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div css={filterCategoryContainer}>
          {filterMenuListArr.map((menu) => {
            const isActiveMenu = menu.name === activeMenu;

            return (
              <div key={`filterMenu${menu.name}`}>
                {isActiveMenu && (
                  <div>
                    {menu.categoryArr.map((category) => {
                      const activeQuery = menu.query;
                      const isMenuEmpty = watch(activeQuery).length === 0;
                      const isCategoryActive = watch(activeQuery).some((watchCategory) => {
                        return watchCategory === category;
                      });

                      if (category === "전체") {
                        return (
                          <div key={`menuCategory${menu.name}${category}`}>
                            <input
                              type="checkbox"
                              css={menuCategoryInput}
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
                            css={menuCategoryInput}
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
      </div>

      <div css={activeCategoryContainer}>
        {watchList
          .map((list) => {
            return list.categoryArr;
          })
          .every((list) => {
            return list.length === 0;
          }) && (
          <span css={categoryBox(null)} key="activeMenuCategoryBasic">
            전체 공고
            <button type="button" css={deleteCategory} aria-label="">
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
        <button type="submit" css={submitButton}>
          필터 적용 <FiFilter />
        </button>
      </div>
    </div>
  );
};
