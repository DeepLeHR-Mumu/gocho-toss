export interface jobBookmarkResObjDef {
  data:
    | {
        id: number;
        end_time: number;
        title: string;
        cut: boolean;
        company: { name: string; logo_url: string };
      }[]
    | null;
}

export interface CompanyBookmarkResObjDef {
  data: { id: number; name: string; logo_url: string }[] | null;
}

export interface companyBookmarkObjDef {
  id: number;
  name: string;
  logo_url: string;
}

export interface postingBookmarkResObjDef {
  data: number[] | null;
}

export interface tipBookmarkResObjDef {
  data: number[] | null;
}
