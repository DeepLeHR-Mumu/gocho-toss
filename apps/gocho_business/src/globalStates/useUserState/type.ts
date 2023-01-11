export type UserStateObjDef = {
  id: number;
  companyId: number;
  companyName: string;
  companyLogo: string;
  email: string;
  name: string;
  department: string;
  iat: number;
  exp: number;
};

export interface UserStateInfoProps {
  userState: UserStateObjDef | null | false;
  setUserState: (status: UserStateObjDef | null | false) => void;
}

export interface UseUserStateDef {
  (): {
    userInfoData?: UserStateObjDef;
    setUserInfoData: (status: UserStateObjDef | null) => void;
  };
}
