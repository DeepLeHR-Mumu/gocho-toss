export type UserStateObjDef = {
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
