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
  "location | null": {
    address: string;
    x: string;
    y: string;
  };
  hobby: string;
  specialty: string;
}

export interface UserPassAuthUpdateDef {
  token: string;
}
