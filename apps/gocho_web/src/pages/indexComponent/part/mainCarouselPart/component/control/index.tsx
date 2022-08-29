import { FunctionComponent } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { controlWrapper, counter } from "./style";
import { ControlProps } from "./type";

export const Control: FunctionComponent<ControlProps> = ({
  currentIndex,
  allIndex,
  onSlickPrev,
  onSlickNext,
}) => {
  return (
    <div css={controlWrapper}>
      <button
        type="button"
        onClick={onSlickPrev}
        aria-label="이전 떠오르는 채용"
      >
        {/* LATER - 사이즈 컬러 컴포넌트 만들기 */}
        <BsChevronLeft size={25} color="#fff" />
      </button>
      <p css={counter}>
        {currentIndex} / {allIndex}
      </p>

      <button
        type="button"
        onClick={onSlickNext}
        aria-label="다음 떠오르는 채용"
      >
        {/* LATER - 사이즈 컬러 컴포넌트 만들기 */}
        <BsChevronRight size={25} color="#fff" />
      </button>
    </div>
  );
};
