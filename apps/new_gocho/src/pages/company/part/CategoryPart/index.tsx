import { FunctionComponent } from "react";

import { Divider } from "shared-ui/deeple-ds";

import { CategoryItem, HeaderTitle } from "../../component";
import { categoryIconArr } from "./constant";

import { cssObj } from "./style";

export const CategoryPart: FunctionComponent = () => (
  <>
    <section css={cssObj.sectionContainer}>
      <HeaderTitle title="카테고리 별 기업" />
      <div css={cssObj.categoryContainer}>
        <div css={cssObj.categoryBox}>
          {categoryIconArr.map(({ src, categoryText }) => (
            <CategoryItem key={categoryText} src={src} text={categoryText} />
          ))}
        </div>
      </div>
    </section>
    <Divider />
  </>
);
