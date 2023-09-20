import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "@/components";
import { INTERNAL_URL } from "@/pages/constants";

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
import { ListPart } from "./part/ListPart";
import { FilterFormValues, FilterObj } from "./type";
import { cssObj } from "./style";

const JdListPage: NextPage = () => {
  const router = useRouter();
  const firstRenderingRef = useRef<boolean>(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: INTERNAL_URL.JD_LIST, query: { page: 1, order: "recent" } });
    }
  }, [router]);

  useEffect(() => {
    if (router.query.page && firstRenderingRef.current) {
      firstRenderingRef.current = false;
      return;
    }
    if (!firstRenderingRef.current) {
      const location = (scrollRef.current?.getBoundingClientRect().top as number) + window.pageYOffset - 250;
      window.scrollTo(0, location);
    }
  }, [router.query.page]);

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
          <div ref={scrollRef} />
          <ListPart filterObj={filterObj} />
        </div>
      </Layout>
    </main>
  );
};

export default JdListPage;
