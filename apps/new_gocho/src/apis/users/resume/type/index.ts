export interface ResumeDef {
  id: number;
  title: string;
  is_complete: string;
  updated_time: string;
}

export interface UserResumeProfileDef {
  id: string;
  image: string | null;
  name: string;
  phone_number: string;
  email: string | null;
  birth_date: string;
  location: {
    address: string | null;
    x: string | null;
    y: string | null;
  } | null;
  hobby: string | null;
  specialty: string | null;
}

export interface UserPassAuthUpdateDef {
  token: string;
}

export interface UserResumeApplyDef {
  id: string;
  status: string;
  company: {
    id: string;
    name: string;
  };
  jd: {
    id: string;
    title: string;
    start_time: string;
    end_time: string;
    is_expired: string;
  };
  is_read: string;
  created_time: string;
}

export interface UserApplyStaticDef {
  apply_complete_count: string;
  apply_cancel_count: string;
  apply_read_count: string;
  apply_unread_count: string;
}
