import Link from "next/link";
import {
  FiThumbsDown,
  FiThumbsUp,
  FiMoreVertical,
  // FiTrash2,
  FiChevronRight,
} from "react-icons/fi";
import { Profile } from "shared-ui/deeple-ds";

import testImg from "@/public/bus.svg";

import { cssObj } from "./style";

export const Review = () => {
  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.profileWrapper}>
        <Profile src={testImg} />
        <h3>닉네임</h3>
        <span>시간</span>
        <FiMoreVertical />
      </div>
      <div css={cssObj.commentWrapper}>
        <Link href="/">
          공고 링크 <FiChevronRight />
        </Link>
        <div css={cssObj.thumbsWrapper}>
          <FiThumbsUp css={cssObj.thumbsUp} />
          <FiThumbsDown />
        </div>
      </div>
    </div>
  );
};
