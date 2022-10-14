import { SetterOrUpdater } from "recoil";

export interface LoginFormValues {
  email: string;
}

export interface closeLoginModalDef {
  (loginSetFunc: SetterOrUpdater<boolean>): void;
}
