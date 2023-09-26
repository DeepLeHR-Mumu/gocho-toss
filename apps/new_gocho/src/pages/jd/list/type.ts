import { JdArrRequestObjDef } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";
import {
  JOB_FILTER_KEY,
  PLACE_FILTER_KEY,
  REQUIRED_EXP_FILTER_KEY,
  CONTRACT_FILTER_KEY,
  INDUSTRY_FILTER_KEY,
  EDUCATION_FILTER_KEY,
  ROTATION_FILTER_KEY,
} from "./part/FilterPart/constant";

export interface FilterFormValues {
  order: JdArrRequestObjDef["order"];
  [JOB_FILTER_KEY]: string[];
  [INDUSTRY_FILTER_KEY]: string[];
  [EDUCATION_FILTER_KEY]: string[];
  [PLACE_FILTER_KEY]: string[];
  [REQUIRED_EXP_FILTER_KEY]: string[];
  [CONTRACT_FILTER_KEY]: string[];
  [ROTATION_FILTER_KEY]: string[];
}

export interface FilterObj {
  [JOB_FILTER_KEY]: string;
  [INDUSTRY_FILTER_KEY]: string;
  [EDUCATION_FILTER_KEY]: string;
  [PLACE_FILTER_KEY]: string;
  [REQUIRED_EXP_FILTER_KEY]: string;
  [CONTRACT_FILTER_KEY]: string;
  [ROTATION_FILTER_KEY]: string;
}
