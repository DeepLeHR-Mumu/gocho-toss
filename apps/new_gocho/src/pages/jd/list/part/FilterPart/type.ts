import { UseFormReturn } from "react-hook-form";
import { FilterFormValues } from "../../type";

import {
  JOB_FILTER_KEY,
  INDUSTRY_FILTER_KEY,
  EDUCATION_FILTER_KEY,
  PLACE_FILTER_KEY,
  REQUIRED_EXP_FILTER_KEY,
  CONTRACT_FILTER_KEY,
  ROTATION_FILTER_KEY,
} from "./constant";

export interface FilterPartProps {
  filterForm: UseFormReturn<FilterFormValues>;
  triggerHandler: () => void;
}

export type FilterKey =
  | typeof JOB_FILTER_KEY
  | typeof INDUSTRY_FILTER_KEY
  | typeof EDUCATION_FILTER_KEY
  | typeof PLACE_FILTER_KEY
  | typeof REQUIRED_EXP_FILTER_KEY
  | typeof CONTRACT_FILTER_KEY
  | typeof ROTATION_FILTER_KEY;
