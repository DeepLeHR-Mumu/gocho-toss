import {
  sharedAllLocalStorageItem,
  sharedAllSessionStorageItem,
  sharedClearLocalStorageItem,
  sharedClearSessionStorageItem,
  sharedGetLocalStorageItem,
  sharedGetSessionStorageItem,
  sharedRemoveLocalStorage,
  sharedRemoveSessionStorage,
  sharedSetLocalStorageItem,
  sharedSetSessionStorageItem,
} from "../storage";

describe("로컬스토리지 함수 테스트", () => {
  beforeEach(() => {
    localStorage.setItem("TEST1", "true");
    localStorage.setItem("TEST2", "hi");
    localStorage.setItem("TEST3", '["hi",33]');
    localStorage.setItem("TEST4", JSON.stringify([{ test: 333, what: "3232" }]));
  });
  afterEach(() => {
    localStorage.clear();
  });
  test("로컬스토리지 parse 형태 참조", () => {
    expect(sharedGetLocalStorageItem("TEST1")).toBe(true);
    expect(sharedGetLocalStorageItem("TEST3")).toStrictEqual(["hi", 33]);
  });
  test("로컬스토리지 일반 문자열 정상 확인 참조", () => {
    expect(sharedGetLocalStorageItem("TEST2")).toBe("hi");
  });
  test("로컬스토리지 복잡한 값 참조", () => {
    expect(sharedGetLocalStorageItem("TEST4")).toStrictEqual([{ test: 333, what: "3232" }]);
  });
  test("로컬스토리지 없는 값 참조 시", () => {
    expect(sharedGetLocalStorageItem("TEST5")).toBe(undefined);
  });
  test("로컬스토리지 부셔진값 참조시", () => {
    const logSpy = jest.spyOn(console, "error").mockImplementation((message) => {
      expect(message).toContain("sharedGetLocalStorageItem - malforemd JSON");
    });
    localStorage.setItem("BROKEN1", "[3]2f2");
    localStorage.setItem("BROKEN2", "}32f2}{");
    expect(sharedGetLocalStorageItem("BROKEN1")).toBe(undefined);
    expect(sharedGetLocalStorageItem("BROKEN2")).toBe(undefined);
    logSpy.mockRestore();
  });
  test("로컬스토리지 remove", () => {
    sharedRemoveLocalStorage("TEST");
    expect(localStorage.getItem("TEST")).toBe(null);
  });
  test("로컬스토리지 clear", () => {
    sharedClearLocalStorageItem();
    expect({ ...localStorage }).toStrictEqual({});
  });
  test("로컬스토리지 전체호출", () => {
    expect(sharedAllLocalStorageItem()).toStrictEqual({
      TEST1: "true",
      TEST2: "hi",
      TEST3: '["hi",33]',
      TEST4: JSON.stringify([{ test: 333, what: "3232" }]),
    });
  });
  test("새로운 값으로 set", () => {
    sharedSetLocalStorageItem({ key: "TEST1", value: [false, "hi"] });
    expect(JSON.parse(localStorage.getItem("TEST1") as string)).toStrictEqual([false, "hi"]);
  });
  test("기존 array 추가 set", () => {
    sharedSetLocalStorageItem({ key: "TEST1", value: [234234, "TTT"] });
    const localStorageValue = JSON.parse(localStorage.getItem("TEST1") as string);
    sharedSetLocalStorageItem({ key: "TEST1", value: [...localStorageValue, false, "hi"] });
    expect(JSON.parse(localStorage.getItem("TEST1") as string)).toStrictEqual([234234, "TTT", false, "hi"]);
  });
});

describe("세션 스토리지 함수 테스트", () => {
  beforeEach(() => {
    sessionStorage.setItem("TEST1", "true");
    sessionStorage.setItem("TEST2", "hi");
    sessionStorage.setItem("TEST3", '["hi",33]');
    sessionStorage.setItem("TEST4", JSON.stringify([{ test: 333, what: "3232" }]));
  });
  afterEach(() => {
    sessionStorage.clear();
  });
  test("세션스토리지 parse 형태 참조", () => {
    expect(sharedGetSessionStorageItem("TEST1")).toBe(true);
    expect(sharedGetSessionStorageItem("TEST3")).toStrictEqual(["hi", 33]);
  });
  test("세션스토리지 일반 문자열 정상 확인 참조", () => {
    expect(sharedGetSessionStorageItem("TEST2")).toBe("hi");
  });
  test("세션스토리지 복잡한 값 참조", () => {
    expect(sharedGetSessionStorageItem("TEST4")).toStrictEqual([{ test: 333, what: "3232" }]);
  });
  test("세션스토리지 없는 값 참조 시", () => {
    expect(sharedGetSessionStorageItem("TEST5")).toBe(undefined);
  });
  test("세션스토리지 부셔진값 참조시", () => {
    const logSpy = jest.spyOn(console, "error").mockImplementation((message) => {
      expect(message).toContain("sharedGetSessionStorageItem - malforemd JSON");
    });
    sessionStorage.setItem("BROKEN1", "[3]2f2");
    sessionStorage.setItem("BROKEN2", "}32f2}{");
    expect(sharedGetSessionStorageItem("BROKEN1")).toBe(undefined);
    expect(sharedGetSessionStorageItem("BROKEN2")).toBe(undefined);
    logSpy.mockRestore();
  });
  test("세션스토리지 remove", () => {
    sharedRemoveSessionStorage("TEST");
    expect(sessionStorage.getItem("TEST")).toBe(null);
  });
  test("세션스토리지 clear", () => {
    sharedClearSessionStorageItem();
    expect({ ...sessionStorage }).toStrictEqual({});
  });
  test("세션스토리지 전체호출", () => {
    expect(sharedAllSessionStorageItem()).toStrictEqual({
      TEST1: "true",
      TEST2: "hi",
      TEST3: '["hi",33]',
      TEST4: JSON.stringify([{ test: 333, what: "3232" }]),
    });
  });
  test("새로운 값으로 set", () => {
    sharedSetSessionStorageItem({ key: "TEST1", value: [false, "hi"] });
    expect(JSON.parse(sessionStorage.getItem("TEST1") as string)).toStrictEqual([false, "hi"]);
  });
  test("기존 array 추가 set", () => {
    sharedSetSessionStorageItem({ key: "TEST1", value: [234234, "TTT"] });
    const sessionStorageValue = JSON.parse(sessionStorage.getItem("TEST1") as string);
    sharedSetSessionStorageItem({ key: "TEST1", value: [...sessionStorageValue, false, "hi"] });
    expect(JSON.parse(sessionStorage.getItem("TEST1") as string)).toStrictEqual([234234, "TTT", false, "hi"]);
  });
});
