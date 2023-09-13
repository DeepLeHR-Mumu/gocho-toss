import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { INTERNAL_URL } from "@/pages/constants";
import { CategoryProps } from "./type";

import { cssObj } from "./style";

export const CategoryItem: FunctionComponent<CategoryProps> = ({ src, text }) => (
  <Link
    href={{
      pathname: INTERNAL_URL.COMPANY_LIST,
      query: { category: text },
    }}
    css={cssObj.categoryItem}
  >
    <div css={cssObj.itemIcon}>
      <Image src={src} alt="category" />
    </div>
    <div css={cssObj.itemText}>{text}</div>
  </Link>
);
