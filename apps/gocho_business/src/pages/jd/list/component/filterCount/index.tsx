import { FunctionComponent } from "react";

import { useJdArr } from "@/apis";

import { cssObj } from "./style";
import { FilterCountProps } from "./type";

export const FilterCount: FunctionComponent<FilterCountProps> = ({ filter }) => {
  const { data: jdDataObj } = useJdArr(true, {
    filter,
  });

  if (!jdDataObj) return <p />;

  return <p css={cssObj.count}>{jdDataObj.pageResult.totalElements}</p>;
};
