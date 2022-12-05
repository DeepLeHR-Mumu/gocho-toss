import { FunctionComponent, useState } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";
import { DetailCommentProps } from "./type";
import { commentButton, commentButtonContainer, companyName, flexBox, headerCSS, imageBox, wrapper } from "./style";

export const DetailComment: FunctionComponent<DetailCommentProps> = ({ jdId, userInfo, commentDataArr }) => {
  const [imageSrc, setImageSrc] = useState(commentDataArr.company.logoUrl);
  const [isTotalComment, setIsTotalComment] = useState<boolean>(true);

  // userinfo === 댓글정보가 null
  // 출력되는 화면이 같음
  if (!userInfo || commentDataArr.commentArr === null) {
    return (
      <aside css={wrapper}>
        <header css={headerCSS}>
          <div css={flexBox}>
            <div css={imageBox}>
              <Image
                onError={() => {
                  return setImageSrc(defaultCompanyLogo);
                }}
                src={imageSrc || commentDataArr.company.logoUrl}
                alt={commentDataArr.company.name}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p css={companyName}>{commentDataArr.company.name}</p>
          </div>
          <nav css={commentButtonContainer}>
            <ul>
              <li>
                <button
                  css={commentButton(isTotalComment)}
                  type="button"
                  onClick={() => {
                    setIsTotalComment(true);
                  }}
                >
                  전체 댓글
                </button>
              </li>
              <li>
                <button
                  css={commentButton(!isTotalComment)}
                  type="button"
                  onClick={() => {
                    setIsTotalComment(false);
                  }}
                >
                  {jdId === null ? "기업 정보" : "현재 공고"} 댓글
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <UnLoginCommentBox />
      </aside>
    );
  }

  const filterComment = commentDataArr.commentArr.filter((comment) => {
    if (jdId === null) return comment.title === null;
    return comment.jdId === jdId;
  });

  return (
    <aside css={wrapper}>
      <header css={headerCSS}>
        <div css={flexBox}>
          <div css={imageBox}>
            <Image
              onError={() => {
                return setImageSrc(defaultCompanyLogo);
              }}
              src={imageSrc || commentDataArr.company.logoUrl}
              alt={commentDataArr.company.name}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p css={companyName}>{commentDataArr.company.name}</p>
        </div>
        <nav css={commentButtonContainer}>
          <ul>
            <li>
              <button
                css={commentButton(isTotalComment)}
                type="button"
                onClick={() => {
                  setIsTotalComment(true);
                }}
              >
                전체 댓글 <span>{commentDataArr.commentArr.length}</span>
              </button>
            </li>

            <li>
              <button
                css={commentButton(!isTotalComment)}
                type="button"
                onClick={() => {
                  setIsTotalComment(false);
                }}
              >
                {jdId === null ? "기업 정보" : "현재 공고"} 댓글
                <span>{filterComment.length}</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <LoginCommentBox
        jdId={jdId}
        userData={userInfo}
        companyId={commentDataArr.company.id}
        commentArr={isTotalComment ? commentDataArr.commentArr : filterComment}
      />
    </aside>
  );
};
