import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JobsList: NextPage = () => {
  const router = useRouter();
  const adPartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    if (adPartRef.current) window.scrollTo(0, adPartRef.current?.offsetHeight + 100);
  }, [router]);

  return (
    <main>
      <MetaHead metaData={META_JD_LIST} />
      <div ref={adPartRef}>
        <AdPart />
      </div>
      <ListPart />
    </main>
  );
};

export default JobsList;
