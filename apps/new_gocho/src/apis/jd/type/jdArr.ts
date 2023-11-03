export interface JdObjDef {
  id: number;
  company: {
    id: number;
    name: string;
    logo_url: string;
  };
  title: string; //
  cut: boolean; //
  start_time: string; //
  end_time: string; //
  is_bookmark: boolean; //
  highschool: boolean; //
  college: boolean; //
  place: string[]; //
  is_expired: boolean; //
}
