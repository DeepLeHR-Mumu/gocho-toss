interface CommandType {
  command: string;
  answer: string;
}
type TestType = string;

export type ViewObjType = {
  job?: number[];
  company?: number[];
  tip?: number[];
  date: number;
};

export type LocalStorageSetType = {
  COMMAND: CommandType;
  TEST: TestType;
  VIEW_OBJ: ViewObjType;
};

type LocalStorageCommonKeys = keyof LocalStorageSetType;

export type LocalStorageGetType = {
  [K in LocalStorageCommonKeys]: K extends "COMMAND" ? CommandType[] : K extends "TEST" ? TestType[] : ViewObjType;
};
