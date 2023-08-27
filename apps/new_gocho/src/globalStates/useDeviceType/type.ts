export type DeviceType = "MOBILE" | "DESKTOP" | null;
export type ModelType = "Android" | "iPhone" | "Windows" | "Macintosh" | null;

export interface DeviceStore {
  deviceType: DeviceType;
  modelType: ModelType;
  browserSize: { innerWidth: number; innerHeight: number };
  setDeviceType: (newModelType: DeviceType) => void;
  setModelType: (newModelType: ModelType) => void;
  setBrowserSize: (width: number, height: number) => void;
}
