export interface BannerArrRequestObjDef {
  type: "M" | "T" | "S";
}

export const bannerArrKeyObj = {
  all: [{ data: "bannerArr" }] as const,
  bannerArr: (requestObj: BannerArrRequestObjDef) => [{ data: "bannerArr", requestObj }] as const,
};
