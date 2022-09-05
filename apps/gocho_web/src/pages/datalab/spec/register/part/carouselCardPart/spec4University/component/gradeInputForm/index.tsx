import { FunctionComponent, useState } from "react";

import {
  wrapper,
  textForm,
  buttonCSS,
  hide,
  labelCSS,
  langArrBox,
  langArrContainer,
  appendButton,
  isValueColor,
} from "./style";
import { SelectNumberInputFormProps } from "./type";

export const GradeInputForm: FunctionComponent<SelectNumberInputFormProps> = ({
  gradeValue,
  maxGradeValue,
  selectArr,
  gradeObj,
  maxGradeObj,
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleShowBox = () => {
    setIsClick(true);
  };

  const handleHideBox = () => {
    setIsClick(false);
  };

  return (
    <div css={wrapper}>
      <button type="button" css={buttonCSS} onClick={handleShowBox}>
        평균학점 :<span css={isValueColor(gradeValue)}>{`${gradeValue || "학점"}`}/</span>
        <span css={isValueColor(maxGradeValue)}>{`${maxGradeValue || "기준선택"}`}</span>
      </button>

      <div css={langArrBox(isClick)}>
        <input
          css={textForm}
          type="number"
          placeholder="학점기입 ex 2.5"
          {...gradeObj}
          onKeyDown={(onKeyDownEvent) => {
            if (onKeyDownEvent.key === "Escape") {
              handleHideBox();
            }
            if (onKeyDownEvent.key === "Enter") {
              onKeyDownEvent.preventDefault();
              handleHideBox();
            }
          }}
        />
        <ul css={langArrContainer}>
          {selectArr.map((select) => {
            return (
              <li key={select}>
                <input css={hide} type="radio" id={`${select}`} value={select} {...maxGradeObj} />
                <label htmlFor={`${select}`} css={labelCSS}>
                  <p>{select}</p>
                </label>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={handleHideBox} css={appendButton}>
          학점 추가하기
        </button>
      </div>
    </div>
  );
};
