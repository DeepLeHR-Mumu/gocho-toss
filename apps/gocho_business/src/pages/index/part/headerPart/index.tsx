import { FunctionComponent } from "react";
import Slider from "react-slick";

import { useNoticeArr } from "@/apis";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => {
  const { data: noticeArrObj } = useNoticeArr({ order: "notice", size: 3 });

  if (!noticeArrObj) {
    return <div css={cssObj.headerContainer} />;
  }

  return (
    <Slider {...setCarouselSetting} css={cssObj.headerContainer}>
      {noticeArrObj?.noticeDataArr.map((notice) => (
        <div key={`IndexHeaderNotice${notice.id}`} css={cssObj.noticeContainer}>
          <strong css={cssObj.noticeType}>{notice.type}</strong>
          <p css={cssObj.noticeTitle}>{notice.title}</p>
        </div>
      ))}
    </Slider>
  );
};
