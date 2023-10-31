import { FC, useState } from "react";

import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { dateToYYDOTMM } from "@/utils";
import IsUturn from "@/public/image/resume/uturn.svg";

import { cssObj } from "./style";
import { ListItemProps } from "./type";
import { DeleteModal } from "../modal/DeleteModal";

export const ListItem: FC<ListItemProps> = ({
  title,
  titleDes,
  isUturn = false,
  description,
  date,
  editHandler,
  deleteHandler,
  children,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      {deleteModal && (
        <DeleteModal
          setModal={setDeleteModal}
          confirmHandler={() => {
            if (deleteHandler) deleteHandler();
            setDeleteModal(false);
          }}
        />
      )}
      <section css={cssObj.wrapper}>
        <div css={cssObj.headerWrapper}>
          <div css={cssObj.titleWrapper}>
            <h2 css={cssObj.title}>{title}</h2>
            <p css={cssObj.titleDes}>{titleDes}</p>
            {isUturn && (
              <div css={cssObj.uTurnWrapper}>
                <p css={cssObj.uTurnText}>유턴</p>
                <Image src={IsUturn} alt="" />
              </div>
            )}
          </div>
          <div css={cssObj.iconWrapper}>
            <button type="button" onClick={editHandler}>
              <FiEdit2 css={cssObj.icon} />
            </button>
            <button type="button" onClick={() => setDeleteModal(true)}>
              <FiTrash2 css={cssObj.icon} />
            </button>
          </div>
        </div>
        {description && <p css={cssObj.description}>{description}</p>}
        {children}

        <p css={cssObj.date}>{date.map((d) => dateToYYDOTMM(d)).join(" - ")}</p>
      </section>
    </>
  );
};
