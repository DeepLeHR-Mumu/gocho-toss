import { RefObject } from "react";
import Slider from "react-slick";

export interface FindCompanyPartProps {
  sliderRef: RefObject<Slider>;
}

export interface PostSubmitValues {
  company_id: number;
  company_name: string;
  business_number: string;
  business_number_1: string;
  business_number_2: string;
  business_number_3: string;
}
