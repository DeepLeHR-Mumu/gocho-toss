import { MainBannerDef } from "../type";

export interface ResponseObjDef {
  data: MainBannerDef[];
  count: number;
}

export interface GetBannerArrDef {
  (): Promise<ResponseObjDef>;
}
