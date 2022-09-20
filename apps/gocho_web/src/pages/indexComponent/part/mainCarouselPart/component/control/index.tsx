import { FunctionComponent } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { controlWrapper, counter, buttonCSS } from "./style";
import { ControlProps } from "./type";

export const Control: FunctionComponent<ControlProps> = ({ currentIndex, allIndex, onSlickPrev, onSlickNext }) => {
  return (
    <div css={controlWrapper}>
      <button type="button" css={buttonCSS} onClick={onSlickPrev} aria-label="이전 메인배너 이동">
        <BsChevronLeft />
      </button>

      <p css={counter}>
        {currentIndex} / {allIndex}
      </p>

      <button type="button" css={buttonCSS} onClick={onSlickNext} aria-label="다음 메인배너 이동">
        <BsChevronRight />
      </button>
    </div>
  );
};
