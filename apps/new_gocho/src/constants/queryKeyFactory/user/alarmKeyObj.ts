export interface AlarmArrRequestDef {
  disable?: boolean;
  userId: number;
  category?: string;
  page?: number;
  size?: number;
}

export const alarmArrKeyObj = {
  all: [{ data: "alarmArr" }] as const,
  alarmArr: (requestObj: AlarmArrRequestDef) => [{ data: "alarmArr", requestObj }] as const,
};
