import { TopBannerDef } from "../../type";

export interface ResponseObjDef {
  data: TopBannerDef[];
  count: number;
}

export interface GetBannerArrDef {
  (): Promise<ResponseObjDef>;
}
