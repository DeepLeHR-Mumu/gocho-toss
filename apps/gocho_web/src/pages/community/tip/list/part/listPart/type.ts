// LATER 좀더 명시적인 변수명으로 변경, 외부 q와 겹침
export interface TipValues {
  q: string;
}

export interface changeOrderDef {
  (newId: number): void;
}
