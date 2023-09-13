import { CategoryItem } from "./CategoryItem/index";
import { HeaderTitle } from "../HeaderTitle";
import { topCategoryIconArr, bottomCategoryIconArr } from "./constant";

import { cssObj } from "./style";

export const CategoryCompany = () => (
    <section css={cssObj.categoryContainer}>
      <HeaderTitle title="카테고리 별 기업" />
      <div css={cssObj.categoryBoxWrapper}>
        <div css={cssObj.categoryTopBox}>
          {topCategoryIconArr.map(({ key, src, categoryText }) => <CategoryItem key={key} src={src} text={categoryText} />)}
        </div>
        <div css={cssObj.categoryBottomBox}>
          {bottomCategoryIconArr.map(({ key, src, categoryText }) => <CategoryItem key={key} src={src} text={categoryText} />)}
        </div>
      </div>
    </section>
  );
