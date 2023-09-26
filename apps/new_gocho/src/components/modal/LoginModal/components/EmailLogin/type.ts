import { MouseEventHandler } from "react";
import { ActionBarHandlers } from "../ActionBar/type";

export interface EmailLoginProps extends ActionBarHandlers {
  toFindPassword?: MouseEventHandler<HTMLButtonElement>;
  toSignUp?: MouseEventHandler<HTMLButtonElement>;
}
