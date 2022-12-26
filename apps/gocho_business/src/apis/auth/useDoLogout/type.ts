import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

export interface PostLogoutDef {
  (): Promise<AxiosResponse | AxiosError<ErrorResponseDef>>;
}
