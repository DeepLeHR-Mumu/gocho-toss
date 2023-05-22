import { PageResultDef } from "shared-type/api/paginationType";

export interface ResponseObjDef {
  data: {
    id: number;
    color: string;
    jd: {
      id: number;
      company: {
        id: number;
        logo_url: string;
        name: string;
      };
      title: string;
      start_time: string;
      end_time: string;
      high: boolean;
      college: boolean;
      is_bookmark: boolean;
    };
  }[];
  page_result: PageResultDef;
}

export interface GetBannerArrDef {
  (): Promise<ResponseObjDef>;
}
