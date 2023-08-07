import { FunctionComponent } from "react";
import Slider from "react-slick";
import Link from "next/link";

import { useNoticeArr } from "@/apis";

import { INTERNAL_URL } from "@/constants";
import { homeNewsClickEvent } from "@/ga";
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
        <Link
          href={INTERNAL_URL.NOTICE_DETAIL(notice.id)}
          css={cssObj.noticeContainer}
          key={`IndexHeaderNotice${notice.id}`}
          onClick={() => {
            homeNewsClickEvent();
          }}
        >
          <strong css={cssObj.noticeType}>{notice.type}</strong>
          <p css={cssObj.noticeTitle}>{notice.title}</p>
        </Link>
      ))}
    </Slider>
  );
};
