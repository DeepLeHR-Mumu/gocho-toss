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
