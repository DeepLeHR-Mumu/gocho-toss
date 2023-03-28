import { act, renderHook, waitFor } from "@testing-library/react";
import { useModal } from "../../src/globalStates";

describe("모달 테스트", () => {
  test("초기 참조 시 null 값 확인", () => {
    const { result } = renderHook(() => {
      return useModal();
    });
    expect(result.current.modal).toBe(null);
  });
  test("모달 설정 후 null로 재변경 확인", async () => {
    jest.useFakeTimers();

    const { result } = renderHook(() => {
      return useModal();
    });

    act(() => {
      result.current.setModal("logoutModal");
    });
    expect(result.current.modal).toBe("logoutModal");
    act(() => {
      result.current.setModal(null);
    });
    expect(result.current.modal).toBe(null);
  });
});
