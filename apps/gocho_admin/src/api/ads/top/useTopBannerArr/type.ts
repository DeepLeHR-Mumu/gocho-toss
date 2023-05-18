import { PageResultDef } from "shared-type/api/paginationType";

export interface ResponseObjDef {
  data: {
    id: number;
    pc_image_url: string;
    mobile_image_url: string;
    link: string;
    start_time: string;
    end_time: string;
  }[];
  page_result: PageResultDef;
}

export interface GetBannerArrDef {
  (): Promise<ResponseObjDef>;
}
