import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useToast } from "@/globalStates";
import { useUserInfo } from "@/apis/auth";
import { useJdBookmarkToggle } from "@/apis/jd";
import { LoginModal } from "@/components/modal/LoginModal";
import { jdBookmarkEvent } from "@/ga/jd";

import { JdBookmarkProps } from "./type";
import { cssObj } from "./style";

export const JdBookmark = ({ jdId, isBookmarked, className }: JdBookmarkProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { data: userData } = useUserInfo();
  const { mutate: postJdBookmarkToggle } = useJdBookmarkToggle();
  const { setToastMessage } = useToast();

  const bookmarkToggleHandler = () => {
    if (!userData) {
      setLoginModal(true);
      return;
    }

    postJdBookmarkToggle(
      { jdId },
      {
        onSuccess: () => {
          jdBookmarkEvent(jdId);
          if (isBookmarked) setToastMessage("찜한 공고 목록에서 제외 되었습니다.");
          else setToastMessage("공고 찜 등록이 완료 되었습니다.");
        },
      }
    );
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={(e) => {
          e.preventDefault();
          bookmarkToggleHandler();
        }}
      >
        {isBookmarked ? (
          <AiFillHeart css={cssObj.bookmarkIcon(isBookmarked)} />
        ) : (
          <AiOutlineHeart css={cssObj.bookmarkIcon(isBookmarked)} />
        )}
      </button>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
    </>
  );
};
