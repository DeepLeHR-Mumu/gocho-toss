import { act, renderHook, waitFor } from "@testing-library/react";
import { useToast } from "../../src/globalStates/useToast";

describe("토스트 테스트", () => {
  test("초기 참조 시 null 값 확인", () => {
    const { result } = renderHook(() => useToast());
    expect(result.current.toastMessage).toBe(null);
  });
  test("토스트 설정 후 3초 후 null로 재변경 확인", async () => {
    jest.useFakeTimers();

    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.setToastMessage("My필터가 저장되었습니다");
    });
    expect(result.current.toastMessage).toBe("My필터가 저장되었습니다");

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    await waitFor(() => {
      expect(result.current.toastMessage).toBe(null);
    });
  });
});
