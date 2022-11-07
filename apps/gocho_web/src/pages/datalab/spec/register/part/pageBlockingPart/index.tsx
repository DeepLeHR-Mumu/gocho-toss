import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

import { useModal } from "@recoil/hook/modal";

export const PageBlockingPart: FunctionComponent = () => {
  const router = useRouter();
  const { setCurrentModal } = useModal();

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      const isCurrentSpecObj = Boolean(sessionStorage.getItem("specObj") === null);

      if (!isCurrentSpecObj) {
        setCurrentModal("pageBlockModal", { url, text: "작성 중인 스펙이 초기화됩니다. 나가시겠습니까?" });
        router.events.emit("routeChangeError");
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    };

    router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [router.events, setCurrentModal]);

  return <div />;
};
