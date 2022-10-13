import { FunctionComponent } from "react";
import { FiChevronLeft, FiLink } from "react-icons/fi";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { useToast } from "@recoil/hook/toast";

import { menuWrapper, flexBox, backButton, jobTitle, shareIcon } from "./style";
import { TopMenuDef } from "./type";

export const TopMenu: FunctionComponent<TopMenuDef> = ({ title, id }) => {
  const { setCurrentToast } = useToast();
  const copyJobLink = () => {
    navigator.clipboard.writeText(`https://고초대졸.com${JOBS_DETAIL_URL}/${id}`);
  };

  return (
    <div css={menuWrapper}>
      <div css={flexBox}>
        <button
          type="button"
          css={backButton}
          onClick={() => {
            window.close();
          }}
        >
          <FiChevronLeft />
        </button>
        <strong css={jobTitle}>{title}</strong>
      </div>

      <button
        type="button"
        css={shareIcon}
        onClick={() => {
          copyJobLink();
          setCurrentToast("링크가 복사되었습니다.");
        }}
      >
        <FiLink />
      </button>
    </div>
  );
};
