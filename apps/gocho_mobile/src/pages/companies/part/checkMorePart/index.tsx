import { FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { confirmText } from "./constant";
import { buttonBox, buttonContainer, buttonIcon, buttonText, copyrightText, wrapper } from "./style";

export const CheckMorePart: FunctionComponent = () => {
  const [isTextOpen, setIsTextOpen] = useState(false);
  return (
    <section css={wrapper}>
      <button
        type="button"
        aria-label="데이터 확인사항"
        css={buttonBox}
        onClick={() => {
          setIsTextOpen((prev) => {
            return !prev;
          });
        }}
      >
        <div css={buttonContainer}>
          <p css={buttonText}>확인해 주세요</p>
          <div css={buttonIcon}>{isTextOpen ? <FiChevronUp /> : <FiChevronDown />}</div>
        </div>
        {isTextOpen && <p css={copyrightText}>{confirmText}</p>}
      </button>
    </section>
  );
};
