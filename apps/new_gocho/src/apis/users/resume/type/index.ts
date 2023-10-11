export interface ResumeDef {
  id: number;
}

export interface UserResumeProfileDef {
  id: string;
  image: string;
  name: string;
  phone_number: string;
  email: string;
  birth_date: string;
  location: {
    address: string;
    x: string;
    y: string;
  } | null;
  hobby: string;
  specialty: string;
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
