import { FunctionComponent, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Image from "next/image";

import { DDayChip } from "shared-ui/deeple-ds";

import { useJdBookmarkToggle } from "@/apis/jd";
import { useUserProfile } from "@/apis/auth";
import { LoginModal } from "@/components";

import { JdCardProps } from "./type";
import { cssObj } from "./style";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  const [loginModal, setLoginModal] = useState(false);

  const { data: userInfoData } = useUserProfile();
  const { mutate: jdBookmarkToggle } = useJdBookmarkToggle();

  return (
    <div css={cssObj.cardWrapper}>
      <div css={cssObj.imageWrapper}>
        <Image src={jd.company.logoUrl} alt="회사 로고" fill />
        <button
          type="button"
          css={cssObj.likeButton(jd.isBookmark)}
          aria-label={jd.isBookmark ? "북마크 해지" : "북마크 하기"}
          onClick={(event) => {
            event.preventDefault();
            if (!userInfoData) {
              setLoginModal(true);
            }
            return jdBookmarkToggle({ jdId: jd.id });
          }}
        >
          {jd.isBookmark ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
      <div css={cssObj.chipContainer}>
        <DDayChip endTime={jd.endTime} />
        <div css={cssObj.eduChip(jd.high)}>고</div>
        <div css={cssObj.eduChip(jd.college)}>초</div>
      </div>
      <strong css={cssObj.title}>{jd.title}</strong>
      <div css={cssObj.descWrapper}>
        <p css={cssObj.desc}>{jd.company.name}</p>
        <p css={cssObj.desc}>{jd.placeArr[0].split(" ").slice(0, 2).join(" ")}</p>
      </div>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
    </div>
  );
};
