import { MainBannerDef as JdBannerDef } from "../type";

import { selector } from "./util";

export interface ResponseObjDef {
  data: JdBannerDef[];
}

export interface GetJdBannerArrDef {
  (): Promise<ResponseObjDef>;
}

export type SelectorJdBannerArr = ReturnType<typeof selector>;
