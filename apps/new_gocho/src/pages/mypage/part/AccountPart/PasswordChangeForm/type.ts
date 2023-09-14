import { UserData } from "../../ProfilePart/type";

export interface PwdInputForm {
  originPassword: string;
  newPassword: string;
  checkPassword: string;
}

export interface PwdChangeFormProps {
  userData: UserData;
  handleFormClose: () => void;
}
