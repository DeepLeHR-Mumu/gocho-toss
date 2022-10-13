import { FunctionComponent, useState } from "react";
import { FiRefreshCw, FiChevronRight, FiPlus, FiX, FiFilter } from "react-icons/fi";
import { BsFolderSymlink } from "react-icons/bs";

import { useUserFilter, useDoUserFilter } from "shared-api/filter";
import { useUserInfo } from "shared-api/auth";
import { CheckBox } from "shared-ui/common/atom/checkbox";
import { useToast } from "@recoil/hook/toast";

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
  submitButton,
  categoryArr,
  categoryActiveCSS,
} from "./style";

export const Filter: FunctionComponent<FilterProps> = ({ register, watch, setValue, getValues, setShowFilter }) => {
  const [activeMenu, setActiveMenu] = useState<filterMenuDef>("학력");
  const watchList: watchListDef[] = filterMenuListArr.map((menu) => {
    return { query: menu.query, categoryArr: watch(menu.query) };
  });

  const { data: userInfoData, isSuccess } = useUserInfo();
  const { setCurrentToast } = useToast();

  const {
    data: userFilter,
    refetch: refetchUserFilter,
    isSuccess: userFilterSuccess,
  } = useUserFilter({ userId: userInfoData?.id });
  const { mutate } = useDoUserFilter();

  const applyUserFilter = () => {
    if (!isSuccess) {
      setCurrentToast("로그인후 My 필터를 사용해주세요.");
      return;
    }

    if (!userFilter) {
      setCurrentToast("My필터를 저장후 불러주세요.");
      return;
    }

    if (userFilterSuccess) {
      setCurrentToast("My필터를 불러왔습니다.");
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
      setCurrentToast("로그인후 My 필터를 저장해주세요.");
      return;
    }
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
          setCurrentToast("My필터가 저장되었습니다");
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
              <button
                key={`filterMenu${menu.name}`}
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
            );
          })}
        </div>

        <div css={filterCategoryContainer}>
          {filterMenuListArr.map((menu) => {
            const isActiveMenu = menu.name === activeMenu;

            return (
              <div key={`filterMenu${menu.name}`}>
                {isActiveMenu && (
                  <ul css={categoryArr}>
                    {menu.categoryArr.map((category) => {
                      const activeQuery = menu.query;
                      const isMenuEmpty = watch(activeQuery).length === 0;
                      const isCategoryActive = watch(activeQuery).some((watchCategory) => {
                        return watchCategory === category;
                      });

                      if (category === "전체") {
                        return (
                          <li key={`menuCategory${menu.name}${category}`} css={categoryActiveCSS(isCategoryActive)}>
                            <input
                              type="checkbox"
                              css={menuCategoryInput}
                              id={`menuCategory${menu.name}${category}`}
                              onClick={() => {
                                setValue(activeQuery, []);
                              }}
                            />
                            <label htmlFor={`menuCategory${menu.name}${category}`} css={menuCategory}>
                              <CheckBox isChecked={isMenuEmpty} />
                              {category}
                            </label>
                          </li>
                        );
                      }

                      return (
                        <li key={`menuCategory${menu.name}${category}`} css={categoryActiveCSS(isCategoryActive)}>
                          <input
                            type="checkbox"
                            css={menuCategoryInput}
                            id={`menuCategory${menu.name}${category}`}
                            value={category}
                            {...register(menu.query, {})}
                          />
                          <label htmlFor={`menuCategory${menu.name}${category}`} css={menuCategory}>
                            <CheckBox isChecked={isCategoryActive} />
                            {category}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
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
          <button type="button" css={categoryBox(null)} aria-label="" key="activeMenuCategoryBasic">
            전체 공고
            <FiX />
          </button>
        )}
        {watchList.map((list) => {
          return list.categoryArr.map((category) => {
            return (
              <button
                type="button"
                key={`activeMenuCategory${category}`}
                aria-label={`${category}필터 제거`}
                css={categoryBox(list.query)}
                onClick={() => {
                  setValue(
                    list.query,
                    getValues(list.query).filter((watchCategory) => {
                      return watchCategory !== category;
                    })
                  );
                }}
              >
                {category}
                <FiX />
              </button>
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
