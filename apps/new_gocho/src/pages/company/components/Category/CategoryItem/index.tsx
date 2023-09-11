import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryProps } from "./type";

import { cssObj } from "./style";

export const CategoryItem: FunctionComponent<CategoryProps> = ({ src, text }) => {
  return (
    <Link
      href={{
        pathname: "company/list",
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
};
