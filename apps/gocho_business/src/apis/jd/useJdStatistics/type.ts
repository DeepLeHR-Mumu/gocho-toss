import { JdStatistics } from "../type";
import { selector } from "./util";

interface ResponseObjDef {
  data: JdStatistics;
}

export interface GetJdStatisticsDef {
  (jdId: number): Promise<ResponseObjDef>;
}

export const jdStatisticsKeyObj = {
  all: [{ data: "jdStatistics" }] as const,
  statistics: (jdId: number) => [{ data: "jdStatistics", jdId }] as const,
};

export type SelectorJdStatistics = ReturnType<typeof selector>;
