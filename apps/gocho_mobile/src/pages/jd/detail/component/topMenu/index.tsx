import { FunctionComponent } from "react";
import { FiChevronLeft, FiShare2 } from "react-icons/fi";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";

import { menuWrapper, flexBox, backButton, jobTitle, shareIcon } from "./style";
import { TopMenuDef } from "./type";

export const TopMenu: FunctionComponent<TopMenuDef> = ({ title, id }) => {
  const copyJobLink = () => {
    navigator.clipboard.writeText(`고초대졸.com${JOBS_DETAIL_URL}/${id}`);
  };

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

      <button type="button" css={shareIcon} onClick={copyJobLink}>
        <FiShare2 />
      </button>
    </div>
  );
};
