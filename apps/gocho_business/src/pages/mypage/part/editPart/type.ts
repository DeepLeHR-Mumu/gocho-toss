export interface PasswordShowObjDef {
  isOriginPassword: boolean;
  isNewPassword: boolean;
  isCheckPassword: boolean;
}

export interface EditFormValues {
  origin_password: string;
  new_password: string;
  check_password: string;
  managerId: number;
}
