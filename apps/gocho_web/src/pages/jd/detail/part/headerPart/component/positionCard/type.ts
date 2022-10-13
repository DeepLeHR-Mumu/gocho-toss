import { Dispatch, SetStateAction } from "react";

export interface PositionCardProps {
  isDdayEnd: boolean;
  currentPositionId: number | null;
  setCurrentPositionId: Dispatch<SetStateAction<number | null>>;
  position:
    | {
        id: number;
        requiredExp: {
          type: "신입" | "경력" | "무관" | "신입/경력";
        };
        rotationArr: string[];
        place: {
          addressArr: string[] | null;
          factoryArr:
            | {
                id: number;
                companyId: number;
                place1: string;
                place2: string;
                address: string;
                maleNumber: number;
                femaleNumber: number;
                product: string;
                bus: {
                  exists: boolean;
                  desc: string | null;
                };
                dormitory: {
                  exists: boolean;
                  desc: string | null;
                };
                factoryName: string;
              }[]
            | null;
          etc: string | null;
          type: "일반" | "전국" | "해외" | "기타";
        };
        possibleEdu: {
          summary: string;
        };
        hireCount: number;
        task: {
          mainTask: string;
        };
        contractType: {
          type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
        };
      }
    | undefined;
}
