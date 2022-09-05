import { FunctionComponent, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { dateConverter } from "@util/date";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { container, titleCSS, button } from "./style";
import { HeaderProps, changeWeekDef } from "./type";

export const Header: FunctionComponent<HeaderProps> = ({ setCurrentDate, currentDate, setTwoWeek }) => {
  const { year, month } = dateConverter(currentDate.getTime());
  const title = `${year}년 ${month}월`;

  const changeWeek: changeWeekDef = (direction) => {
    if (direction === "prev") {
      return setCurrentDate(new Date(currentDate.getTime() - 86400000 * 14));
    }

    return setCurrentDate(new Date(currentDate.getTime() + 86400000 * 14));
  };

  useEffect(() => {
    const todayWeek = currentDate.getDay();

    const currentTwoWeek = dummyArrCreator(14).map((_, index) => {
      return {
        date: new Date(currentDate.getTime() + 86400000 * (index - todayWeek)),
      };
    });

    setTwoWeek(currentTwoWeek);
  }, [currentDate, setTwoWeek]);

  return (
    <div css={container}>
      <button
        type="button"
        css={button}
        onClick={() => {
          return changeWeek("prev");
        }}
      >
        <BsChevronLeft />
      </button>
      <h3 css={titleCSS}>{title}</h3>
      <button
        type="button"
        css={button}
        onClick={() => {
          return changeWeek("next");
        }}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};
