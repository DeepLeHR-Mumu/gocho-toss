import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  title: string;
  startTime: number;
  endTime: number;
  cut: boolean;
  processArr: string[];
  applyRouteArr: string[];
  applyUrl: string;
  etcArr: string[];
  positionArr: {
    middle: boolean;
    high: boolean;
    college: boolean;
    four: boolean;
    requiredExp: string;
    minYear: number | undefined;
    maxYear: number | undefined;
    requiredEtcArr: string[] | undefined;
    contractType: string;
    conversionRate: number | undefined;
    taskMain: string;
    taskSubArr: string[] | undefined;
    taskDetailArr: string[] | undefined;
    rotationArr: string[] | undefined;
    rotationEtc: string;
    placeArr: string;
    hireNumber: number | undefined;
    payArr: string[] | undefined;
    preferredCertiArr: string[];
    preferredEtcArr: string[] | undefined;
  }[];
}

export interface PostJobDef {
  ({
    companyId,
    title,
    startTime,
    endTime,
    cut,
    processArr,
    applyRouteArr,
    applyUrl,
    etcArr,
    positionArr,
  }: RequestObjDef): Promise<ResponseDef>;
}

export interface useAddJobProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
