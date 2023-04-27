import { useEffect, useRef } from "react";

import { useAddJobViewCount } from "shared-api/viewCount";

export const useJdViewCount = (jobId: number) => {
  const isFirstRender = useRef(true);
  const { mutate: addViewCount } = useAddJobViewCount();

  useEffect(() => {
    if (jobId && isFirstRender.current) {
      isFirstRender.current = false;
      addViewCount({ jobId });
    }
  }, [addViewCount, jobId]);
};
