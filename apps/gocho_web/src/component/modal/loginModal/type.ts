import { SetterOrUpdater } from "recoil";

export interface ButtonProps {
  button: "home" | "close";
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface closeLoginModalDef {
  (loginSetFunc: SetterOrUpdater<boolean>): void;
}

export interface openSignUpModalDef {
  (loginSetFunc: SetterOrUpdater<boolean>, signUpSetFunc: SetterOrUpdater<boolean>): void;
}
