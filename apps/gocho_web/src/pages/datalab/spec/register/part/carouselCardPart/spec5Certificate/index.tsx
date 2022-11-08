import { FunctionComponent, useState, useRef } from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiX } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { TopTitle, ToggleForm, BottomButton } from "@pages/datalab/spec/register/component";

import { specCardWrapper, formCSS } from "../style";

import { getCertiValue, hasFieldsInIncludes } from "./util";
import { Spec5CertificateProps, PostSubmitValues, filterSearchKeywordArrHandlerDef } from "./type";
import { certificateArr } from "./constant";
import {
  certificateContainer,
  buttonContainer,
  appendButton,
  inputTextCSS,
  certificateArrCSS,
  certificateArrBox,
  appendKeywordButton,
  certificateCardBox,
  certificateCard,
  hideCertificateArrButton,
  noCertiDesc,
} from "./style";

export const Spec5Certificate: FunctionComponent<Spec5CertificateProps> = ({
  isWriteMoreSpec,
  moveNextCard,
  movePrevCard,
}) => {
  const { handleSubmit, register, control, watch } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificate",
  });

  const [isShowCertiBox, setIsShowCertiBox] = useState(false);
  const [filterSearchCertiArr, setFilterSearchCertiArr] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const watchIsCerti = watch("isCertificate");
  const isImpossibleNextMove = watchIsCerti && watch("certificate").length === 0;

  const movePrevSlider = () => {
    movePrevCard("3");
  };

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    if (isImpossibleNextMove) {
      return;
    }

    const { certificate } = formData;
    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, {
      certificate: getCertiValue(certificate),
    });
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard(isWriteMoreSpec ? "5" : "6");
  };

  const filterOverlapArr = certificateArr.filter((keyword, index) => {
    return certificateArr.indexOf(keyword) === index;
  });

  const filterSearchKeywordArrHandler: filterSearchKeywordArrHandlerDef = (onChangeEvent) => {
    const { value } = onChangeEvent.target;

    const filterArr = filterOverlapArr.filter((keyword) => {
      if (value === "") {
        return null;
      }
      return keyword.includes(value);
    });

    setFilterSearchCertiArr(filterArr);
  };

  const handleHideCertificateArrBox = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
    setFilterSearchCertiArr([]);
    setIsShowCertiBox(false);
  };

  return (
    <div css={specCardWrapper}>
      <TopTitle title="자격증" desc="스펙의 꽃! 증 중의 증 자격증!" />
      <button
        type="button"
        aria-label="자격증 검색창 닫기"
        css={hideCertificateArrButton(isShowCertiBox)}
        onClick={handleHideCertificateArrBox}
      />

      <form css={formCSS}>
        <ToggleForm
          id="isCertificate"
          value={watchIsCerti}
          yesDesc="있음"
          noDesc="없음"
          registerObj={register(`isCertificate`)}
        />

        {watchIsCerti && (
          <div css={certificateContainer}>
            <div css={buttonContainer}>
              <button
                type="button"
                css={appendButton}
                onClick={() => {
                  setIsShowCertiBox(true);
                }}
              >
                키워드를 입력하면 관련 자격증이 검색됩니다
                <BsChevronDown />
              </button>

              <div css={certificateArrBox(isShowCertiBox)}>
                <div css={inputTextCSS}>
                  <input
                    type="text"
                    placeholder="자격증 키워드를 검색해보세요."
                    onChange={filterSearchKeywordArrHandler}
                    ref={searchInputRef}
                    onKeyDown={(onKeyDownEvent) => {
                      if (onKeyDownEvent.key === "Escape") {
                        handleHideCertificateArrBox();
                      }
                      if (onKeyDownEvent.key === "Enter") {
                        onKeyDownEvent.preventDefault();
                      }
                    }}
                  />
                  <button type="button" onClick={handleHideCertificateArrBox} aria-label="자격증 검색 닫기">
                    <BsChevronUp />
                  </button>
                </div>
                <ul css={certificateArrCSS}>
                  {filterSearchCertiArr.map((keyword) => {
                    const isOverCerti = fields.some((selectKeyword) => {
                      return selectKeyword.value === keyword;
                    });

                    const getOverCertiIndex = fields.findIndex((field) => {
                      return field.value === keyword;
                    });

                    return (
                      <li key={`certificate_${keyword}`}>
                        <button
                          css={appendKeywordButton}
                          type="button"
                          onClick={() => {
                            handleHideCertificateArrBox();
                            return isOverCerti ? remove(getOverCertiIndex) : append({ value: keyword });
                          }}
                        >
                          <CheckBox isChecked={hasFieldsInIncludes(fields, keyword)} />
                          {keyword}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {isImpossibleNextMove && <p css={noCertiDesc}>자격증을 선택해주세요</p>}
            </div>

            <div css={certificateCardBox}>
              {fields.map((field, index) => {
                return (
                  <button
                    key={field.id}
                    css={certificateCard}
                    aria-label={`${field.value} 제거`}
                    type="button"
                    onClick={() => {
                      return remove(index);
                    }}
                  >
                    {field.value}
                    <FiX />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <BottomButton movePrevCard={movePrevSlider} postSubmit={handleSubmit(postSubmit)} />
      </form>
    </div>
  );
};
