import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { useIsSpecPageBlocking } from "@recoil/hook/spec";

import { UsePageBlockingDef } from "./type";

export const usePageBlocking: UsePageBlockingDef = (setCurrentModal) => {
  const { isBlocking } = useIsSpecPageBlocking();

  const [linkUrl, setLinkUrl] = useState<string | null>(null);
  const router = useRouter();

  const routeChangeStart = useCallback(
    (url: string) => {
      const isUrl = router.pathname !== url && !isBlocking;

      if (isUrl) {
        setLinkUrl(url);
        setCurrentModal("pageBlockModal");
        router.events.emit("routeChangeError");
        // 모달을 멈추기 위한 disable
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    },
    [setCurrentModal, isBlocking, router]
  );

  useEffect(() => {
    if (isBlocking && linkUrl) {
      router.replace(linkUrl);
    }
  }, [linkUrl, isBlocking, router]);

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [routeChangeStart, router.events]);
};
