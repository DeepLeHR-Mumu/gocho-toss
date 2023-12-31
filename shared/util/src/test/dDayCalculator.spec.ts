import dayjs from "dayjs";
import { dDayCalculator } from "../date/dDayCalculator";

describe("dDayCalculator unit 테스트", () => {
  it("같은시간 입력 시 차이 0ms 테스트", () => {
    expect(dDayCalculator(dayjs().format("YYYY-MM-DDTHH:mm:ss"))).toBe("만료");
  });
  it("시간차이 차이 -1ms 테스트", () => {
    expect(dDayCalculator(dayjs().subtract(4, "ms").format("YYYY-MM-DDTHH:mm:ss"))).toBe("만료");
  });
  it("4ms 이후 만료되는 D-DAY 테스트", () => {
    expect(dDayCalculator(dayjs().add(4, "ms").format("YYYY-MM-DDTHH:mm:ss"))).toBe("만료");
  });
  it("상시채용 test", () => {
    const always = dayjs().set("year", 9999).format("YYYY-MM-DDTHH:mm:ss");
    expect(dDayCalculator(always)).toBe("상시채용");
  });
  it("48시간 후 D-DAY 테스트", () => {
    const twoDaysLater = dayjs().add(2, "day").format("YYYY-MM-DDTHH:mm:ss");
    expect(dDayCalculator(twoDaysLater)).toBe("D-2");
  });
  it("지금 1일 23시간 59분 이후", () => {
    const oneDayTwentyHourLater = dayjs().add(1, "day").add(23, "hour").add(59, "minute").format("YYYY-MM-DDTHH:mm:ss");
    expect(dDayCalculator(oneDayTwentyHourLater.valueOf())).toBe("D-2");
  });
  it("지금 1일 후", () => {
    const oneDayLater = dayjs().add(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    expect(dDayCalculator(oneDayLater.valueOf())).toBe("D-1");
  });
});
