import { useEffect } from "react";
import { useRouter } from "next/router";

export const usePreventRouting = (customizedIsDirty: boolean) => {
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
        return;
      }
      // eslint-disable-next-line no-alert
      if (!window.confirm("변경사항이 있습니다. 페이지를 나가시겠습니까?") && customizedIsDirty) {
        throw router.events.emit("routeChangeError");
      }
    };

    router.events.on("routeChangeStart", pageExitHandler);

    return () => {
      router.events.off("routeChangeStart", pageExitHandler);
      window.onbeforeunload = () => null;
    };
  }, [customizedIsDirty, router.events]);
};
