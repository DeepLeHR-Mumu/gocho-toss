import dayjs from "dayjs";
import { dDayCalculator } from "../date";

describe("dDayCalculator unit 테스트", () => {
  it("같은시간 입력 시 차이 0ms 테스트", () => {
    expect(dDayCalculator(new Date().getTime())).toBe("만료");
  });
  it("시간차이 차이 -1ms 테스트", () => {
    expect(dDayCalculator(new Date().getTime())).toBe("만료");
  });
  it("4ms 이후 만료되는 D-DAY 테스트", () => {
    expect(dDayCalculator(new Date().getTime() + 4)).toBe("D-DAY");
  });
  it("상시채용 test", () => {
    const twoDaysLater = dayjs().set("year", 9999).valueOf();
    expect(dDayCalculator(twoDaysLater)).toBe("상시채용");
  });
  it("48시간 후 D-DAY 테스트", () => {
    const twoDaysLater = dayjs().add(2, "day").valueOf();
    expect(dDayCalculator(twoDaysLater)).toBe("D-2");
  });
  it("지금 1일 12시간 이후", () => {
    const oneDayOneHourLater = dayjs().add(1, "day").add(21, "hour");
    expect(dDayCalculator(oneDayOneHourLater.valueOf())).toBe("D-2");
  });
  it("지금 1일 후", () => {
    const oneDayOneHourLater = dayjs().add(1, "day");
    expect(dDayCalculator(oneDayOneHourLater.valueOf())).toBe("D-1");
  });
});
