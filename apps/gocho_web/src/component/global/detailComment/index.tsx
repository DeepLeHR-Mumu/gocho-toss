import { FunctionComponent } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";
import { DetailCommentProps } from "./type";
import { companyName, flexBox, headerCSS, imageBox, wrapper } from "./style";

export const DetailComment: FunctionComponent<DetailCommentProps> = ({ userInfo, commentDataArr, company }) => {
  if (!userInfo && !commentDataArr) {
    return (
      <aside css={wrapper}>
        <header css={headerCSS}>
          <div css={flexBox}>
            <div css={imageBox}>
              <Image src={company.logoUrl || defaultCompanyLogo} alt={company.name} fill sizes="1" />
            </div>
            <p css={companyName}>{company.name}</p>
          </div>
        </header>
        <UnLoginCommentBox />
      </aside>
    );
  }

  return (
    <aside css={wrapper}>
      <header css={headerCSS}>
        <div css={flexBox}>
          <div css={imageBox}>
            <Image src={company.logoUrl || defaultCompanyLogo} alt="" sizes="1" fill />
          </div>
          <p css={companyName}>{company.name}</p>
        </div>
      </header>

      {userInfo && commentDataArr && (
        <LoginCommentBox userData={userInfo} companyId={company.id} commentArr={commentDataArr} />
      )}
    </aside>
  );
};
