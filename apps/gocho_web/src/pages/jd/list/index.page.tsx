import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";
import { adPartContainer } from "./style";

const JobsList: NextPage = () => {
  const router = useRouter();
  const adPartRef = useRef<HTMLDivElement | null>(null);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const changeWindowScrollY = () => {
    setCurrentScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeWindowScrollY);

    return () => {
      window.removeEventListener("scroll", changeWindowScrollY);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, currentScrollY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.order]);

  useEffect(() => {
    if (adPartRef.current && Number(router.query.page) !== 1) {
      window.scrollTo(0, adPartRef?.current.offsetHeight);
    }
  }, [router.query.page]);

  return (
    <main>
      <MetaHead metaData={META_JD_LIST} />
      <div ref={adPartRef} css={adPartContainer}>
        <AdPart />
      </div>
      <ListPart />
    </main>
  );
};

export default JobsList;
