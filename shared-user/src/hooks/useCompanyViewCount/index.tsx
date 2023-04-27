import { useEffect, useRef } from "react";

import { useAddCompanyViewCount } from "shared-api/viewCount";

export const useCompanyViewCount = (companyId: number) => {
  const isFirstRender = useRef(true);
  const { mutate: addViewCount } = useAddCompanyViewCount();

  useEffect(() => {
    if (companyId && isFirstRender.current) {
      isFirstRender.current = false;
      addViewCount({ companyId });
    }
  }, [addViewCount, companyId]);
};
