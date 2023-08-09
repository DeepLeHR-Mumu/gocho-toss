import { ToastProps } from "./type";
import { cssObj } from "./style";

const Toast = ({ children }: ToastProps) => <div css={cssObj.wrapper}>{children}</div>;

export default Toast;
