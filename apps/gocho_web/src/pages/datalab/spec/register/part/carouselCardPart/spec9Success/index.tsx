import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { SPEC_LIST_URL } from "shared-constant/internalURL";

import { TopTitle } from "@pages/datalab/spec/register/component";

import { desc, successButton, specCardWrapper } from "./style";

export const Spec9Success: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const routeChangeStart = () => {
      sessionStorage.removeItem("progressPercent");
    };

    router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [router.events]);

  return (
    <div css={specCardWrapper}>
      <TopTitle title="스펙등록 완료" desc="축하드립니다!" />
      <div>
        <p css={desc}>
          스펙이 등록되었습니다.
          <br />
          다른 사용자들의 스펙을 5개 이상 평가하고 자신의 평가내역을 확인해보세요
        </p>
      </div>

      <Link href={SPEC_LIST_URL} passHref>
        <a css={successButton}>스펙 리스트</a>
      </Link>
    </div>
  );
};
