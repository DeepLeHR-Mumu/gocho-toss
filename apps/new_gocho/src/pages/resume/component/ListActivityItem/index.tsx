import Image from "next/image";
import { FC, useState } from "react";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

import etc from "@/public/image/resume/activity/etc.svg";
import prize from "@/public/image/resume/activity/prize.svg";
import volunteer from "@/public/image/resume/activity/volunteer.svg";
import { dateToYYDOTMM } from "@/utils";

import { cssObj } from "./style";
import { ListActivityItemProps } from "./type";
import { DeleteModal } from "../modal/DeleteModal";

export const ListActivityItem: FC<ListActivityItemProps> = ({
  type,
  title,
  titleDes,
  description,
  date,
  editHandler,
  deleteHandler,
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
          <div>
            <p css={cssObj.titleHeader}>
              {type === "수상" && <Image src={prize} alt="" css={cssObj.image} />}
              {type === "봉사" && <Image src={volunteer} alt="" css={cssObj.image} />}
              {type === "기타" && <Image src={etc} alt="" css={cssObj.image} />}
              {type}
            </p>
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
        <div css={cssObj.titleWrapper}>
          <h2 css={cssObj.title}>{title}</h2>
          <p css={cssObj.titelDes}>{titleDes}</p>
        </div>
        <p css={cssObj.description}>{description}</p>
        <p css={cssObj.date}>{date.map((d) => dateToYYDOTMM(d)).join(" - ")}</p>
      </section>
    </>
  );
};
