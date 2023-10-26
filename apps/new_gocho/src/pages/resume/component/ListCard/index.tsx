import { FC } from "react";

import { FiEdit2, FiPlus } from "react-icons/fi";
import { ListCardProps } from "./type";

import { cssObj } from "./style";

export const ListCard: FC<ListCardProps> = ({
  title,
  children,
  isRequired = false,
  iconType = "add",
  iconHandler,
  editMessage,
}) => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.headerWrapper}>
      <div css={cssObj.titleWrapper}>
        <h2>{title}</h2>
        <p css={cssObj.require}>{isRequired && "*"}</p>
      </div>
      {iconType === "add" && (
        <button type="button" onClick={iconHandler}>
          <FiPlus css={cssObj.icon} />
        </button>
      )}
      {iconType === "edit" && (
        <button type="button" onClick={iconHandler}>
          <FiEdit2 onClick={iconHandler} css={cssObj.icon} />
        </button>
      )}

      {iconType === "none" && editMessage}
    </div>
    {children}
  </div>
);
