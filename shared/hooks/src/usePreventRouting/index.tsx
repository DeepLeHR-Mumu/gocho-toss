import { useEffect } from "react";
import { useRouter } from "next/router";

export const usePreventRouting = (customizedIsDirty: boolean, exitEvent?: () => void, exitDoneEvent?: () => void) => {
  const router = useRouter();
  useEffect(() => {
    if (customizedIsDirty) {
      window.onbeforeunload = () => true;
    }

    if (!customizedIsDirty) {
      window.onbeforeunload = () => null;
    }

    const pageExitHandler = () => {
      if (!customizedIsDirty) {
        if (exitEvent) exitEvent();
        return;
      }
      // eslint-disable-next-line no-alert
      if (!window.confirm("변경사항이 있습니다. 페이지를 나가시겠습니까?")) {
        throw router.events.emit("routeChangeError");
      } else if (exitDoneEvent) exitDoneEvent();
    };

    router.events.on("routeChangeStart", pageExitHandler);

    return () => {
      router.events.off("routeChangeStart", pageExitHandler);
      window.onbeforeunload = () => null;
    };
  }, [customizedIsDirty, exitDoneEvent, exitEvent, router.events]);
};
