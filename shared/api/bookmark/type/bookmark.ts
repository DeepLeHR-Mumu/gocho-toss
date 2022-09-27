export interface jobBookmarkResObjDef {
  data: {
    id: number;
    end_time: number;
    title: string;
    cut: boolean;
    company: { id: number; name: string; logo_url: string };
  }[];
}

export interface CompanyBookmarkResObjDef {
  data: { id: number; name: string; logo_url: string }[];
}

export interface companyBookmarkObjDef {
  id: number;
  name: string;
  logo_url: string;
}

export interface postingBookmarkResObjDef {
  data: number[];
}

export interface tipBookmarkObjDef {
  data: number[];
}
