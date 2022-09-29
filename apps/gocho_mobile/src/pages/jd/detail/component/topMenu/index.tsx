import { FunctionComponent } from "react";
import { FiChevronLeft, FiShare2 } from "react-icons/fi";

import { menuWrapper, flexBox, backButton, jobTitle, shareIcon } from "./style";
import { TopMenuDef } from "./type";

export const TopMenu: FunctionComponent<TopMenuDef> = ({ title }) => {
  return (
    <div css={menuWrapper}>
      <div css={flexBox}>
        <button
          type="button"
          css={backButton}
          onClick={() => {
            window.history.back();
          }}
        >
          <FiChevronLeft />
        </button>
        <div css={jobTitle}>{title}</div>
      </div>

      <div css={shareIcon}>
        {" "}
        <FiShare2 />
      </div>
    </div>
  );
};
