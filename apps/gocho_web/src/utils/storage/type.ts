interface CommandType {
  command: string;
  answer: string;
}
type TestType = string;
type ViewArrType = {
  job?: { id: number; date: number }[];
  company?: { id: number; date: number }[];
  tip?: { id: number; date: number }[];
};

export type LocalStorageSetType = {
  COMMAND: CommandType;
  TEST: TestType;
  VIEW_OBJ: ViewArrType;
};

type LocalStorageCommonKeys = keyof LocalStorageSetType;

export type LocalStorageGetType = {
  [K in LocalStorageCommonKeys]: K extends "COMMAND" ? CommandType[] : K extends "TEST" ? TestType[] : ViewArrType;
};
