import { Dispatch, SetStateAction } from "react";

export interface setCarouselSettingDef {
  (setActiveIndex: Dispatch<SetStateAction<number>>): {
    dots: boolean;
    autoplay: boolean;
    arrows: boolean;
    infinite: boolean;
    centerMode: boolean;
    speed: number;
    centerPadding: string;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: (current: number) => void;
  };
}

export interface TipBoxProps {
  tipData: {
    id: number;
    title: string;
    uploaderName: string;
    description: string;
    tagArr: string[];
    createdTime: string;
    likeCount: number;
    viewCount: number;
    thumbnailSrc: string;
    imgPageCount: number;
  };
}
