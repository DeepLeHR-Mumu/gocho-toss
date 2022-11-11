import { ChangeEvent } from "react";

export interface Spec5CertificateProps {
  isWriteMoreSpec: boolean;
  moveNextCard(hash: string): void;
  movePrevCard(hash: string): void;
}

export interface PostSubmitValues {
  isCertificate: boolean;
  certificate: { value: string }[];
}

export interface filterSearchKeywordArrHandlerDef {
  (onChangeEvent: ChangeEvent<HTMLInputElement>): void;
}

export interface HasFieldsInIncludesDef {
  (arr: { value: string }[], keyword: string): boolean;
}
