import { RefObject } from "react";
import Slider from "react-slick";

export interface AuthPartProps {
  sliderRef: RefObject<Slider>;
}

export interface PostSubmitValues {
  department: string;
  position: string;
}
