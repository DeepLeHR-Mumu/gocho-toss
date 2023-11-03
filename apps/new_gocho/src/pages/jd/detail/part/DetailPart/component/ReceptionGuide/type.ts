import { JdDetailObjDef } from "@/apis/jd/type/jdDetail";
import { DetailSubContainerProps } from "../DetailSubContainer/type";

export interface ReceptionGuideProps extends DetailSubContainerProps {
  processArr: JdDetailObjDef["apply"]["process"];
  startTime: string;
  endTime: string;
  cut: boolean;
}
