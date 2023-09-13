import { useEffect, useCallback, useMemo } from "react";
import { create } from "zustand";

import { MOBILE } from "shared-style/mediaQuery";

import { DeviceType, DeviceStore } from "./type";

const useDeviceStore = create<DeviceStore>((set) => ({
  deviceType: null,
  modelType: null,
  browserSize: { innerWidth: 0, innerHeight: 0 },
  setDeviceType: (newDeviceType) => set(() => ({ deviceType: newDeviceType })),
  setModelType: (newModelTyp) => set(() => ({ modelType: newModelTyp })),
  setBrowserSize: (width, height) => set(() => ({ browserSize: { innerWidth: width, innerHeight: height } })),
}));

export const useGetDeviceType = () => {
  const { deviceType, browserSize } = useDeviceStore((state) => state);

  const isMobile = useMemo(() => deviceType === "MOBILE", [deviceType]);

  return { deviceType, isMobile, browserSize };
};

export const useSetDeviceType = () => {
  const { deviceType, setDeviceType, setBrowserSize } = useDeviceStore((state) => state);

  const resizeCallback = useCallback(() => {
    const deviceWidth = window.innerWidth;
    const deviceHeight = window.innerHeight;
    const [, , mobileStandardWidth] = MOBILE.split(" ");

    let newDeviceType: DeviceType = "DESKTOP";

    if (deviceWidth < parseInt(mobileStandardWidth, 10)) {
      newDeviceType = "MOBILE";
    }

    if (newDeviceType !== deviceType) {
      setDeviceType(newDeviceType);
    }
    setBrowserSize(deviceWidth, deviceHeight);
  }, [setDeviceType, deviceType, setBrowserSize]);

  useEffect(() => {
    resizeCallback();

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, [resizeCallback]);

  return { setDeviceType: resizeCallback };
};
