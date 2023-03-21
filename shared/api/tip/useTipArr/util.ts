import { TipObjDef } from "../type/tipArr";

export const selector = (tipArr: TipObjDef[]) => {
  return tipArr.map((tip) => {
    return {
      id: tip.id,
      uploaderName: tip.uploader.nickname,
      title: tip.title,
      description: tip.description,
      thumbnailSrc: tip.thumbnail_url,
      thumbnailSvgSrc: tip.svg_thumbnail_url,
      tag: tip.tag,
    };
  });
};
