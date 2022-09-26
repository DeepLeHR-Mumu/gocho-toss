export interface jobBookmarkObjDef {
  id: number;
  start_time: number;
  end_time: number;
  title: string;
  high: boolean;
  college: boolean;
  place_arr: string[];
  rotation_arr: string[];
  task_arr: string[];
  cut: boolean;
  bookmark: number;
  view: number;
  company: { id: number; name: string; logo_url: string };
}

export interface companyBookmarkObjDef {
  id: number;
  name: string;
  logo_url: string;
}

export interface postingBookmarkObjDef {
  id: number;
}

export interface tipBookmarkObjDef {
  id: number;
}
