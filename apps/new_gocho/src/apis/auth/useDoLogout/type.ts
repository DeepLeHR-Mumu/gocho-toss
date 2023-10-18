import { AxiosResponse } from "axios";

export interface PostLogoutDef {
  (): Promise<AxiosResponse>;
}
