import { SideBannerDef } from "../type";

export interface ResponseObjDef {
  data: SideBannerDef[];
  count: number;
}

export interface GetBannerArrDef {
  (): Promise<ResponseObjDef>;
}
