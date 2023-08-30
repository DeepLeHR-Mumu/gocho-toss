import { CategoryItem } from "./CategoryItem/index";
import { cssObj } from "./style";

import { topCategoryIconArr, bottomCategoryIconArr } from "./constant";

export const CategoryCompany = () => {
  return (
    <section css={cssObj.categoryContainer}>
      <h1 css={cssObj.categoryHeader}>카테고리 별 기업</h1>
      <div css={cssObj.categoryBoxWrapper}>
        <div css={cssObj.categoryTopBox}>
          {topCategoryIconArr.map(({ key, src, categoryText }) => {
            return <CategoryItem key={key} src={src} text={categoryText} />;
          })}
        </div>
        <div css={cssObj.categoryBottomBox}>
          {bottomCategoryIconArr.map(({ key, src, categoryText }) => {
            return <CategoryItem key={key} src={src} text={categoryText} />;
          })}
        </div>
      </div>
    </section>
  );
};
