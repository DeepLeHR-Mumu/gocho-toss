import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import IsUturn from "@/public/image/resume/uturn.svg";

import { cssObj } from "./style";
import { ListItemProps } from "./type";

export const ListItem = ({
  title,
  titleDes,
  isUturn = false,
  desciption,
  date,
  editHadnler,
  deleteHandler,
}: ListItemProps) => (
  <section css={cssObj.wrapper}>
    <div css={cssObj.headerWrapper}>
      <div css={cssObj.titleWrapper}>
        <h2 css={cssObj.title}>{title}</h2>
        <p css={cssObj.titelDes}>{titleDes}</p>
        {isUturn && <Image src={IsUturn} alt="" css={cssObj.uTurnImage} />}
      </div>
      <div css={cssObj.iconWrapper}>
        <FiEdit2 css={cssObj.icon} onClick={editHadnler} />
        <FiTrash2 css={cssObj.icon} onClick={deleteHandler} />
      </div>
    </div>
    <p css={cssObj.description}>{desciption}</p>
    <p css={cssObj.date}>{date.join(" - ")}</p>
  </section>
);
