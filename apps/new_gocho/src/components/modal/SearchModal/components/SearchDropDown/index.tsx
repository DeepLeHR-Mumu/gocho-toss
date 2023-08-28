import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { FiArrowUpLeft, FiSearch } from "react-icons/fi";
import { SearchBar } from "shared-ui/deeple-ds";

import recentLogo from "@/public/recent.svg";

import { SearchDropDownProps } from "./type";
import { cssObj } from "./style";

export const SearchDropDown = ({
  defaultValue = "",
  recentWordArr = [],
  searchHandler,
  onClick,
}: SearchDropDownProps) => {
  type SearchFormProps = { search: string };
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<SearchFormProps>({ defaultValues: { search: defaultValue } });

  const submitHandler: SubmitHandler<SearchFormProps> = (searchObj) => {
    // eslint-disable-next-line no-unused-expressions
    searchHandler && searchHandler(searchObj.search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SearchBar
          border="grayLine"
          prefix={
            <button type="submit">
              <FiSearch css={cssObj.searchIcon} />
            </button>
          }
          defaultValue={defaultValue}
          onFocus={() => {
            setDropDownVisible(true);
          }}
          autoComplete="off"
          {...register("search")}
          onClick={onClick}
        />
      </form>
      {recentWordArr.length !== 0 && dropDownVisible && (
        <div css={cssObj.dropDownWrapper}>
          <ul>
            {recentWordArr.slice(0, isDirty ? 2 : 5).map((recentWord) => {
              return (
                <li key={recentWord} css={cssObj.listItem}>
                  <Image src={recentLogo} alt="recent" />
                  <button
                    type="button"
                    css={cssObj.word}
                    onMouseDown={() => {
                      // eslint-disable-next-line no-unused-expressions
                      searchHandler && searchHandler(recentWord);
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
