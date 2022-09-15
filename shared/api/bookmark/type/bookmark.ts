export interface jobBookmarkObjDef {
  id: number;
  title: string;
  end_time: number;
  company: { id: number; name: string };
}

export interface companyBookmarkObjDef {
  id: number;
  name: string;
  info: string[];
}

export interface postingBookmarkObjDef {
  id: number;
}

export interface tipBookmarkObjDef {
  id: number;
}
