export type UserInfoDef = {
  sub: string;
  id: number;
  companyId: number;
  companyName: string;
  email: string;
  name: string;
  department: string;
  role: string;
  type: number;
  iat: number;
  exp: number;
  iss: string;
};

export interface UserZustandlProps {
  userInfo: UserInfoDef | null;
  setUserInfo: (status: UserInfoDef) => void;
}
