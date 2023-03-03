import { renderHook } from "@testing-library/react";
import { useViewCount } from "../useViewCount";

test("viewCount 테스트", async () => {
  localStorage.setItem("weiofjoi");
  renderHook(() => useViewCount({ id: 33 }));
});
