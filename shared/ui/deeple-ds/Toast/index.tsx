import { ToastProps } from "./type";
import { cssObj } from "./style";

export const Toast = ({ children }: ToastProps) => <div css={cssObj.wrapper}>{children}</div>;
