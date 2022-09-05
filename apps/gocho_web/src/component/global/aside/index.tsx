import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { RightBanner } from "./component/rightBanner";

import { asideWrapperCreator } from "./style";

export const Aside: FunctionComponent = () => {
  const [windowHeight, setWindowHeight] = useState<number | null>(null);
  const [activeHeight, setAcitveWindow] = useState<number>(0);
  const router = useRouter();
  const { pathname } = router;

  const getScrollTop = () => {
    window.addEventListener("scroll", () => {
      setAcitveWindow(window.scrollY);
    });
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight / 2);
    getScrollTop();
  }, []);

  return (
    <aside css={asideWrapperCreator(windowHeight !== null && windowHeight <= activeHeight)}>
      {pathname === "/" && <RightBanner />}
    </aside>
  );
};
