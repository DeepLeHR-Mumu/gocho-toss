import { FC } from "react";

import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { dateToYYDOTMM } from "@/utils";
import IsUturn from "@/public/image/resume/uturn.svg";

import { cssObj } from "./style";
import { ListItemProps } from "./type";

export const ListItem: FC<ListItemProps> = ({
  title,
  titleDes,
  isUturn = false,
  desciption,
  date,
  editHadnler,
  deleteHandler,
  children,
}) => (
  <section css={cssObj.wrapper}>
    <div css={cssObj.headerWrapper}>
      <div css={cssObj.titleWrapper}>
        <h2 css={cssObj.title}>{title}</h2>
        <p css={cssObj.titelDes}>{titleDes}</p>
        {isUturn && <Image src={IsUturn} alt="" css={cssObj.uTurnImage} />}
      </div>
      <div css={cssObj.iconWrapper}>
        <button type="button" onClick={editHadnler}>
          <FiEdit2 css={cssObj.icon} />
        </button>
        <button type="button" onClick={deleteHandler}>
          <FiTrash2 css={cssObj.icon} />
        </button>
      </div>
    </div>
    {children}
    {desciption && <p css={cssObj.description}>{desciption}</p>}
    <p css={cssObj.date}>{date.map((d) => dateToYYDOTMM(d)).join(" - ")}</p>
  </section>
);
