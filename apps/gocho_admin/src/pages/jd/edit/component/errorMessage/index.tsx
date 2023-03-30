import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { ErrorMessageProps } from "./type";

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ msg }) => <p css={cssObj.msg}>{msg}</p>;
