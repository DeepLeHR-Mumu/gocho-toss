import { FunctionComponent, useState, useRef } from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiX } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SpecCardTitle, Toggle, MoveCardButtons } from "../common/component";

import { getResData, hasFieldsInIncludes } from "./util";
import { Spec5CertificateProps, PostSubmitValues, ChangeSearchFilterArrDef } from "./type";
import { certificateArr } from "./constant";
import { specCardWrapper, formCSS } from "../common/style";
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
} from "./style";

export const Spec5Certificate: FunctionComponent<Spec5CertificateProps> = ({ moveNextCard, movePrevCard }) => {
  const { handleSubmit, register, control, watch } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificate",
  });

  const [isClick, setIsClick] = useState(false);
  const [searchCertificateArr, setSearchCertificateArr] = useState<string[]>([]);
  const textInputRef = useRef<HTMLInputElement>(null);
  const isCertificateWatch = watch("isCertificate");

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const { certificate } = formData;

    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, {
      certificate: getResData(certificate),
    });
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard(60);
  };

  // 자격증 리스트 중복 제거
  const filterOverlapArr = certificateArr.filter((keyword, index) => {
    return certificateArr.indexOf(keyword) === index;
  });

  // 자격증 검색시 검색 키워드로 필터링
  const changeSearchFilterArr: ChangeSearchFilterArrDef = (onChangeEvent) => {
    const { value } = onChangeEvent.target;

    const filterArr = filterOverlapArr.filter((keyword) => {
      if (value === "") {
        return null;
      }
      return keyword.includes(value);
    });

    setSearchCertificateArr(filterArr);
  };

  const handleShowCertificateArrBox = () => {
    setIsClick(true);
  };

  const handleHideCertificateArrBox = () => {
    if (textInputRef.current) {
      textInputRef.current.value = "";
    }
    setSearchCertificateArr([]);
    setIsClick(false);
  };

  return (
    <div css={specCardWrapper}>
      <SpecCardTitle title="자격증" desc="스펙의 꽃! 증 중의 증 자격증!" />

      <form css={formCSS}>
        <Toggle
          id="isCertificate"
          value={isCertificateWatch}
          yesDesc="있음"
          noDesc="없음"
          registerObj={register(`isCertificate`)}
        />
        {isCertificateWatch && (
          <div css={certificateContainer}>
            <div css={buttonContainer}>
              <button type="button" css={appendButton} onClick={handleShowCertificateArrBox}>
                키워드를 입력하면 관련 자격증이 검색됩니다
                <span>
                  <BsChevronDown />
                </span>
              </button>

              <div css={certificateArrBox(isClick)}>
                <div css={inputTextCSS}>
                  <input
                    type="text"
                    placeholder="자격증 키워드를 검색해보세요."
                    onChange={changeSearchFilterArr}
                    ref={textInputRef}
                    onKeyDown={(onKeyDownEvent) => {
                      if (onKeyDownEvent.key === "Escape") {
                        handleHideCertificateArrBox();
                      }
                      if (onKeyDownEvent.key === "Enter") {
                        onKeyDownEvent.preventDefault();
                      }
                    }}
                  />
                  <button type="button" onClick={handleHideCertificateArrBox}>
                    <BsChevronUp />
                  </button>
                </div>
                <ul css={certificateArrCSS}>
                  {searchCertificateArr.map((keyword) => {
                    return (
                      <li key={`certificate_${keyword}`}>
                        <CheckBox isChecked={hasFieldsInIncludes(fields, keyword)} />
                        <button
                          css={appendKeywordButton}
                          type="button"
                          onClick={() => {
                            handleHideCertificateArrBox();
                            return append({ value: keyword });
                          }}
                        >
                          {keyword}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div css={certificateCardBox}>
              {fields.map((field, index) => {
                return (
                  <div key={field.id} css={certificateCard}>
                    {field.value}
                    <button
                      aria-label={`${field.value} 제거`}
                      type="button"
                      onClick={() => {
                        return remove(index);
                      }}
                    >
                      <FiX />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <MoveCardButtons movePrevCard={movePrevCard} postSubmit={handleSubmit(postSubmit)} />
      </form>
    </div>
  );
};
