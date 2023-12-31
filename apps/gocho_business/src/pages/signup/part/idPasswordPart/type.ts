import { RefObject } from "react";
import Slider from "react-slick";

export interface FindCompanyPartProps {
  sliderRef: RefObject<Slider>;
}

export interface PostSubmitValues {
  email: string;
  password: string;
}
