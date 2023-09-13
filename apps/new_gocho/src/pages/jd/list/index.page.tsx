import { useState } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

import { Layout } from "@/components";

import {
  JOB_FILTER_KEY,
  PLACE_FILTER_KEY,
  REQUIRED_EXP_FILTER_KEY,
  CONTRACT_FILTER_KEY,
  INDUSTRY_FILTER_KEY,
  EDUCATION_FILTER_KEY,
  ROTATION_FILTER_KEY,
} from "./part/FilterPart/constant";
import { FilterPart } from "./part/FilterPart";
import { FilterFormValues, FilterObj } from "./type";
import { cssObj } from "./style";
import { ListPart } from "./part/ListPart";

const JdListPage: NextPage = () => {
  // TODO trigger
  const [filterObj, setFilterObj] = useState<FilterObj>({
    [JOB_FILTER_KEY]: "",
    [INDUSTRY_FILTER_KEY]: "",
    [EDUCATION_FILTER_KEY]: "",
    [PLACE_FILTER_KEY]: "",
    [REQUIRED_EXP_FILTER_KEY]: "",
    [CONTRACT_FILTER_KEY]: "",
    [ROTATION_FILTER_KEY]: "",
  });
  const filterForm = useForm<FilterFormValues>({
    defaultValues: {
      order: "recent",
      [JOB_FILTER_KEY]: [],
      [INDUSTRY_FILTER_KEY]: [],
      [EDUCATION_FILTER_KEY]: [],
      [PLACE_FILTER_KEY]: [],
      [REQUIRED_EXP_FILTER_KEY]: [],
      [CONTRACT_FILTER_KEY]: [],
      [ROTATION_FILTER_KEY]: [],
    },
  });
  const { getValues } = filterForm;

  return (
    <main>
      <Layout>
        <div css={cssObj.wrapper}>
          <FilterPart
            filterForm={filterForm}
            triggerHandler={() => {
              setFilterObj({
                [JOB_FILTER_KEY]: getValues(JOB_FILTER_KEY).join(","),
                [INDUSTRY_FILTER_KEY]: getValues(INDUSTRY_FILTER_KEY).join(","),
                [EDUCATION_FILTER_KEY]: getValues(EDUCATION_FILTER_KEY).join(","),
                [PLACE_FILTER_KEY]: getValues(PLACE_FILTER_KEY).join(","),
                [REQUIRED_EXP_FILTER_KEY]: getValues(REQUIRED_EXP_FILTER_KEY).join(","),
                [CONTRACT_FILTER_KEY]: getValues(CONTRACT_FILTER_KEY).join(","),
                [ROTATION_FILTER_KEY]: getValues(ROTATION_FILTER_KEY).join(","),
              });
            }}
          />
          <ListPart filterObj={filterObj} />
        </div>
      </Layout>
    </main>
  );
};

export default JdListPage;
