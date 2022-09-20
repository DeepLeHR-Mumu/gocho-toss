import { TipObjDef } from "../type/tipArr";

export const selector = (tipArr: TipObjDef[]) => {
  return tipArr.map((tip) => {
    return {
      id: tip.id,
      title: tip.title,
      description: tip.description,
      thumbnailSrc: tip.thumbnail_url,
    };
  });
};
