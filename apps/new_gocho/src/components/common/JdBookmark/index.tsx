import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useUserProfile } from "@/apis/auth";
import { useJdBookmarkToggle } from "@/apis/jd";
import { LoginModal } from "@/components/modal/LoginModal";

import { JdBookmarkProps } from "./type";
import { cssObj } from "./style";

export const JdBookmark = ({ jdId, marked = false, className }: JdBookmarkProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { data: userData } = useUserProfile();
  const { mutate: postJdBookmarkToggle } = useJdBookmarkToggle();

  const bookmarkToggleHandler = () => {
    if (!userData) {
      setLoginModal(true);
      return;
    }

    postJdBookmarkToggle({ jdId });
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
        {marked ? (
          <AiFillHeart css={cssObj.bookmarkIcon(marked)} />
        ) : (
          <AiOutlineHeart css={cssObj.bookmarkIcon(marked)} />
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
