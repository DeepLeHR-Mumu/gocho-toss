import { FunctionComponent } from "react";
import Link from "next/link";

import { BUSINESS_FACTORY_EDIT_URL, BUSINESS_FACTORY_REGISTER_URL } from "@constant/internalURL";

import { factoryContainer, factoryIdBox, factoryNameBox, activeButton } from "./style";
import { FactoryCardProps } from "./type";

const FactoryCard: FunctionComponent<FactoryCardProps> = ({ factory }) => {
  return (
    <tr css={factoryContainer}>
      <td css={factoryIdBox}>{factory.id}</td>
      <td css={factoryNameBox}>{factory.name}</td>
      <Link
        passHref
        href={
          factory.status === "등록대기"
            ? `${BUSINESS_FACTORY_REGISTER_URL}/?id=${factory.id}`
            : `${BUSINESS_FACTORY_EDIT_URL}/?id=${factory.id}`
        }
      >
        <a css={activeButton}>상세보기</a>
      </Link>
    </tr>
  );
};

export default FactoryCard;
