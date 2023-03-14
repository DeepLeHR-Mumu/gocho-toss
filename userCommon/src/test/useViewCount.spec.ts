import { renderHook } from "@testing-library/react";
import {
  userClearLocalStorageItem,
  userGetLocalStoargetItem,
  userResetLocalStorageItem,
  userSetLocalStorageItem,
} from "../utils/storage";

import { useViewCount } from "../hooks/useViewCount";
const mutationFunction = () => {};

const rightNow = () => {
  return new Date().getTime() - 40;
};

describe("viewCount 테스트", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("job - viewArr 자체가 undefined일 때", () => {
    expect(userGetLocalStoargetItem("VIEW_OBJ")).toBe(undefined);
    renderHook(() => useViewCount({ id: 33, target: "job", viewMutation: mutationFunction }));
    expect(userGetLocalStoargetItem("VIEW_OBJ")?.job).toStrictEqual([33]);
    expect(userGetLocalStoargetItem("VIEW_OBJ")?.date).toBeGreaterThan(rightNow());
  });

  test("job - company 하나, job 존재하지 않음", () => {
    const rightNow = new Date().getTime() - 40;
    userSetLocalStorageItem("VIEW_OBJ", { company: [44], date: rightNow });
    renderHook(() => useViewCount({ id: 56, target: "job", viewMutation: mutationFunction }));
    expect(userGetLocalStoargetItem("VIEW_OBJ")).toStrictEqual({ company: [44], job: [56], date: rightNow });
  });

  test("job -  job 배열 요소 하나 존재, 새로운 id 추가", () => {
    const rightNow = new Date().getTime() - 40;
    userSetLocalStorageItem("VIEW_OBJ", {
      company: [44],
      job: [33],
      date: rightNow,
    });
    renderHook(() => useViewCount({ id: 56, target: "job", viewMutation: mutationFunction }));
    expect(userGetLocalStoargetItem("VIEW_OBJ")).toStrictEqual({ company: [44], job: [33, 56], date: rightNow });
  });

  test("job -  job 같은 id 요소 존재, 24시간 이후 조회", () => {
    const rightNow = new Date().getTime() - 40;

    userSetLocalStorageItem("VIEW_OBJ", {
      company: [44],
      job: [33, 45],
      date: rightNow - 86400000,
    });
    renderHook(() => useViewCount({ id: 33, target: "job", viewMutation: mutationFunction }));
    expect(userGetLocalStoargetItem("VIEW_OBJ")?.job).toStrictEqual([33]);
  });

  test("job -  job 같은 id 요소 존재, 24시간 이전 조회", () => {
    const rightNow = new Date().getTime();
    userSetLocalStorageItem("VIEW_OBJ", {
      company: [55],
      tip: [44],
      job: [33, 45],
      date: rightNow,
    });
    renderHook(() => useViewCount({ id: 33, target: "job", viewMutation: mutationFunction }));
    expect(userGetLocalStoargetItem("VIEW_OBJ")).toStrictEqual({
      company: [55],
      tip: [44],
      job: [33, 45],
      date: rightNow,
    });
  });
});
