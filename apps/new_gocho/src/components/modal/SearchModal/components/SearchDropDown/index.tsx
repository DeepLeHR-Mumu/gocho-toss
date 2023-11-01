import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { FiArrowUpLeft, FiSearch } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";
import { SearchBar } from "shared-ui/deeple-ds";

import recentImage from "@/public/image/search/recent.svg";
import { globalSearchEvent } from "@/ga/search";

import { SearchDropDownProps } from "./type";
import { cssObj } from "./style";

export const SearchDropDown = ({
  defaultValue = "",
  recentWordArr = [],
  searchHandler,
  onClick,
  autoFocus,
}: SearchDropDownProps) => {
  type SearchFormProps = { search: string };
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const { register, handleSubmit, reset, setValue, getValues, setFocus } = useForm<SearchFormProps>({
    defaultValues: { search: "" },
  });

  const submitHandler: SubmitHandler<SearchFormProps> = (searchObj) => {
    if (searchHandler) {
      globalSearchEvent(searchObj.search);
      searchHandler(searchObj.search);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      setFocus("search");
    }
    setValue("search", defaultValue);
  }, [setValue, defaultValue, autoFocus, setFocus]);

  return (
    <div css={cssObj.wrapper}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SearchBar
          border="grayLine"
          prefix={
            <button type="submit">
              <FiSearch css={cssObj.searchIcon} />
            </button>
          }
          suffix={
            getValues("search").length !== 0 && (
              <RiCloseCircleFill
                css={cssObj.resetIcon}
                onClick={() => {
                  reset();
                }}
              />
            )
          }
          autoComplete="off"
          {...register("search")}
          onClick={onClick}
          onFocus={() => {
            setDropDownVisible(true);
          }}
          onBlur={() => {
            setDropDownVisible(false);
          }}
        />
      </form>
      {recentWordArr.length !== 0 && dropDownVisible && (
        <div css={cssObj.dropDownWrapper}>
          <ul>
            {recentWordArr.slice(0, 10).map((recentWord) => (
              <li key={recentWord} css={cssObj.listItem}>
                <Image src={recentImage} alt="recent" />
                <button
                  type="button"
                  css={cssObj.word}
                  onMouseDown={() => {
                    if (searchHandler) {
                      searchHandler(recentWord);
                    }
                  }}
                >
                  {recentWord}
                </button>
                <FiArrowUpLeft css={cssObj.arrow} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
