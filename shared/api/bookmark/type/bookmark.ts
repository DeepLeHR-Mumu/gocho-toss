import { PageResultDef } from "shared-type/api/paginationType";

export interface jobBookmarkResObjDef {
  data: {
    id: number;
    company: {
      id: number;
      name: string;
      logo_url: string;
    };
    title: string;
    cut: boolean;
    end_time: string;
  }[];
  page_result: PageResultDef;
}

export interface CompanyBookmarkResObjDef {
  data: { id: number; name: string; logo_url: string }[] | null;
}

export interface companyBookmarkObjDef {
  id: number;
  company: {
    id: number;
    name: string;
    logo_url: string;
  };
  title: string;
  cut: boolean;
  end_time: string;
}

export interface postingBookmarkResObjDef {
  data: number[] | null;
}

export interface tipBookmarkResObjDef {
  data: number[] | null;
}
