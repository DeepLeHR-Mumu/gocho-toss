import { TipObjDef } from "../type/tipArr";

export const selector = (tipDataArr: TipObjDef[]) => {
  return tipDataArr.map((tipData) => {
    return {
      id: tipData.id,
      uploaderName: tipData.uploader.nickname,
      title: tipData.title,
      description: tipData.description,
      tagArr: tipData.tag,
      createdTime: tipData.created_time,
      likeCount: tipData.like,
      viewCount: tipData.view,
      thumbnailSrc: tipData.thumbnail_url,
      imgPageCount: tipData.page_count,
    };
  });
};
