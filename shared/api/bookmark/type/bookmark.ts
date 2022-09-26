export interface jobBookmarkResObjDef {
  data: { id: number; title: string; end_time: number; company: { id: number; name: string } }[];
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
