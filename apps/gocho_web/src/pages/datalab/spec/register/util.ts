import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import {
  useSpecRegisterObj,
  useIsSpecPageBlocking,
  useProgress,
} from "@recoil/hook/spec";

import { UsePageBlockingDef } from "./type";

export const usePageBlocking: UsePageBlockingDef = (setCurrentModal) => {
  const { currentSpecObj } = useSpecRegisterObj();
  const { isBlocking } = useIsSpecPageBlocking();
  const { resetCurrentProgress } = useProgress();

  const [linkUrl, setLinkUrl] = useState<string | null>(null);
  const router = useRouter();
  const currentSpecObjLength = Object.keys(currentSpecObj).length;

  const routeChangeStart = useCallback(
    (url: string) => {
      const isCompare =
        router.pathname !== url && !isBlocking && currentSpecObjLength !== 0;

      if (isCompare) {
        setLinkUrl(url);
        setCurrentModal("pageBlockModal");
        router.events.emit("routeChangeError");
        // 모달을 멈추기 위한 disable
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    },
    [currentSpecObjLength, setCurrentModal, isBlocking, router]
  );

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [routeChangeStart, router.events]);

  useEffect(() => {
    if (isBlocking && linkUrl) {
      router.replace(linkUrl);
      resetCurrentProgress();
    }
  }, [linkUrl, isBlocking]);
};

export const useResetProgress = () => {
  const { resetCurrentProgress } = useProgress();

  useEffect(() => {
    resetCurrentProgress();
  }, []);
};
