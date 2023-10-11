import { useState } from "react";

import { FiEdit2, FiPlus } from "react-icons/fi";
import { ListCardProps } from "./type";

import { cssObj } from "./style";

export const ListCard = ({ title, children, isRequired = false, iconType = "add", iconHandler }: ListCardProps) => {
  // TODO: 프로필 수정 시 editMessage 추가 하기
  const [,] = useState<boolean>(false);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.headerWrapper}>
        <div css={cssObj.titleWrapper}>
          <h2>{title}</h2>
          <p css={cssObj.require}>{isRequired && "*"}</p>
        </div>
        {iconType === "add" ? (
          <FiPlus onClick={iconHandler} css={cssObj.icon} />
        ) : (
          <FiEdit2 onClick={iconHandler} css={cssObj.icon} />
        )}
      </div>
      {children}
    </div>
  );
};
