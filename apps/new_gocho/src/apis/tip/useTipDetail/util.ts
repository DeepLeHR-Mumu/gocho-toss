import { TipObjDef } from "../type/tipArr";

export const selector = (tipDetailData: TipObjDef) => {
  return {
    id: tipDetailData.id,
    title: tipDetailData.title,
    thumbnailSrc: tipDetailData.thumbnail_url,
    tag: tipDetailData.tag,
    description: tipDetailData.description,
  };
};
