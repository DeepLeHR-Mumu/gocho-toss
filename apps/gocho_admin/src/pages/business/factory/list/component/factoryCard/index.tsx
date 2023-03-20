import { FunctionComponent } from "react";
import Link from "next/link";

import { BUSINESS_FACTORY_EDIT_URL, BUSINESS_FACTORY_REGISTER_URL } from "@/constant/internalURL";

import { FactoryCardProps } from "./type";
import { cssObj } from "./style";

const FactoryCard: FunctionComponent<FactoryCardProps> = ({ factory }) => (
  <tr css={cssObj.factoryContainer}>
    <td css={cssObj.factoryIdBox}>{factory.id}</td>
    <td css={cssObj.companyNameBox}>{factory.company.name}</td>
    <td css={cssObj.factoryNameBox}>{factory.name}</td>
    <td css={cssObj.activeButton}>
      <Link
        passHref
        href={
          factory.status.name === "등록대기"
            ? `${BUSINESS_FACTORY_REGISTER_URL}/?id=${factory.id}`
            : `${BUSINESS_FACTORY_EDIT_URL}/?id=${factory.id}`
        }
      >
        상세보기
      </Link>
    </td>
  </tr>
);

export default FactoryCard;
