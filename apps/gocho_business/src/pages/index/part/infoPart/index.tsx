import { FunctionComponent, useState } from "react";
import Link from "next/link";

import { INTERNAL_URL } from "@/constants";

import { partCssObj } from "../style";
import { cssObj } from "./style";
import { InfoTypeDef } from "./type";
import { setInfoTypeButton } from "./constant";

export const InfoPart: FunctionComponent = () => {
  const [infoType, setInfoType] = useState<InfoTypeDef>("alarm");
  const isInfoTypeAlarm = infoType === "alarm";

  return (
    <section css={partCssObj.partContainer}>
      <div css={cssObj.topBar}>
        <div css={cssObj.buttonContainer}>
          {setInfoTypeButton.map((button) => (
            <button
              key={`setInfoType${button.type}`}
              type="button"
              onClick={() => setInfoType(button.type)}
              css={cssObj.infoTypeButton(button.type === infoType)}
            >
              {button.text}
            </button>
          ))}
        </div>
        <Link href={isInfoTypeAlarm ? INTERNAL_URL.ALARM_LIST : INTERNAL_URL.NOTICE} passHref css={cssObj.moreButton}>
          더보기 {">"}
        </Link>
      </div>
    </section>
  );
};
