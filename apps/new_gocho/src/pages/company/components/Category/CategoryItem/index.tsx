import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryProps } from "./type";

import { cssObj } from "./style";

export const CategoryItem: FunctionComponent<CategoryProps> = ({ src, text }) => {
  return (
    // TODO: 카테고리 param을 어떻게 넘겨줘야할지 논의
    <Link href="company/list" css={cssObj.categoryItem}>
      <div css={cssObj.itemIcon}>
        <Image src={src} alt="category" />
      </div>
      <div css={cssObj.itemText}>{text}</div>
    </Link>
  );
};
