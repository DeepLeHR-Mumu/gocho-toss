import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { FiArrowUpLeft, FiSearch } from "react-icons/fi";
import { SearchBar } from "shared-ui/deeple-ds";

import recentLogo from "@/public/recent.svg";

import { useSearch } from "../../util";

import { SearchDropDownProps } from "./type";
import { cssObj } from "./style";

export const SearchDropDown = ({ recentWordArr = [] }: SearchDropDownProps) => {
  type SearchFormProps = { search: string };
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<SearchFormProps>();
  const { searchAndSave } = useSearch();

  const searchHandler: SubmitHandler<SearchFormProps> = (searchObj) => {
    searchAndSave(searchObj.search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(searchHandler)}>
        <SearchBar
          border="grayLine"
          prefix={
            <button type="submit">
              <FiSearch css={cssObj.searchIcon} />
            </button>
          }
          onFocus={() => {
            setDropDownVisible(true);
          }}
          autoComplete="off"
          {...register("search")}
        />
      </form>
      {recentWordArr.length !== 0 && dropDownVisible && (
        <div css={cssObj.dropDownWrapper}>
          <ul>
            {recentWordArr.slice(0, isDirty ? 2 : 5).map((recentWord, index) => {
              return (
                <li key={index} css={cssObj.listItem}>
                  <Image src={recentLogo} alt="recent" />
                  <button
                    type="button"
                    css={cssObj.word}
                    onClick={() => {
                      searchAndSave(recentWord);
                    }}
                  >
                    {recentWord}
                  </button>
                  <FiArrowUpLeft css={cssObj.arrow} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
