import { QueryFunctionContext } from "@tanstack/react-query";
import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { BannerObjDef } from "../type";

export interface ResponseObjDef {
  data: BannerObjDef[];
  count: number;
}

export interface GetBannerArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof bannerArrKeyObj.bannerArr>>): Promise<ResponseObjDef>;
}
