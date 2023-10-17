import { FC } from "react";

import { FiEdit2, FiPlus } from "react-icons/fi";
import { ListCardProps } from "./type";

import { cssObj } from "./style";

// const menuArr = [
//   {
//     content: "고등학교",
//   },
//   {
//     content: "대학교 (2,3년제)",
//   },
//   {
//     content: "대학교 ( 4년제 )",
//   },
//   {
//     content: "기타",
//   },
// ];

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
      {iconType === "add" && <FiPlus onClick={iconHandler} css={cssObj.icon} />}
      {iconType === "edit" && <FiEdit2 onClick={iconHandler} css={cssObj.icon} />}
      {iconType === "none" && editMessage}
    </div>
    {children}
  </div>
);
