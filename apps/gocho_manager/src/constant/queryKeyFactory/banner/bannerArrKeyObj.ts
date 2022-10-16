export interface BannerArrRequestObjDef {
  type: number;
}

export const bannerArrKeyObj = {
  all: [{ data: "bannerArr" }] as const,
  bannerArr: (requestObj: BannerArrRequestObjDef) => {
    return [{ data: "bannerArr", requestObj }] as const;
  },
};
