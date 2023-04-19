import { FunctionComponent } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useUserProfile } from "shared-api/auth";
import { useJdBookmarkToggle } from "shared-api/job";
import { dDayCalculator } from "shared-util";

import { NormalButton } from "shared-ui/common/atom/button";
import { useModal } from "@/globalStates";
import { BottomMenuProps } from "./type";
import { wrapper, bookmarkButton, buttonBox } from "./style";

export const BottomMenu: FunctionComponent<BottomMenuProps> = ({ jobDetailData, setOpenComment }) => {
  const { setModal } = useModal();
  const { data: userInfoData } = useUserProfile();

  const openJobInNewTab = () => {
    window.open(jobDetailData.applyUrl, "_blank", "noopener, noreferrer");
  };

  const { mutate: jobBookmarkToggle } = useJdBookmarkToggle();

  const jobBookmarkToggleHandler = () => {
    if (!userInfoData) {
      setModal("loginModal", { button: "close" });
      return;
    }
    jobBookmarkToggle({ jdId: jobDetailData.id });
  };

  const isJobEnd = dDayCalculator(jobDetailData.endTime.toString()) === "만료";

  return (
    <div css={wrapper}>
      <button
        type="button"
        css={bookmarkButton(jobDetailData.isBookmark)}
        onClick={jobBookmarkToggleHandler}
        aria-label={jobDetailData.isBookmark ? "북마크 해지" : "북마크 하기"}
      >
        <BsFillBookmarkFill />
      </button>
      <div css={buttonBox}>
        <NormalButton
          text="실시간 댓글"
          buttonClick={() => {
            return setOpenComment(true);
          }}
          variant="outlined"
          wide
        />
        {!isJobEnd && <NormalButton text="지원하기" buttonClick={openJobInNewTab} variant="filled" wide />}
      </div>
    </div>
  );
};
