import { Entries } from "shared-type";

import { JdArrRequestObjDef } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";

import { FilterFormValues } from "../../type";

import { FilterKey } from "./type";

export const getFilterText = (text: string) => {
  if (text === "") {
    return "전체";
  }

  return text;
};

export const getAllFilter = (filterFormValues: FilterFormValues) => {
  type OrderWillBeDeleted = Omit<FilterFormValues, "order"> & { order?: JdArrRequestObjDef["order"] };
  const filterFormValuesNoOrder: OrderWillBeDeleted = { ...filterFormValues };

  delete filterFormValuesNoOrder.order;

  const entries = Object.entries(filterFormValuesNoOrder) as Entries<Omit<FilterFormValues, "order">>;

  const flattedFilterArr: { key: FilterKey; text: string }[] = entries
    .map(([key, filterArr]) => filterArr.map((filter) => {
        const typedKey: FilterKey = key;

        return { key: typedKey, text: filter };
      }))
    .flat();

  return flattedFilterArr;
};
