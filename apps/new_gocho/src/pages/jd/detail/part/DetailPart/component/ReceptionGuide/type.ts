import { JdDetailObjDef } from "@/apis/jd/type/jdDetail";
import { DetailSubContainerProps } from "../DetailSubContainer/type";

export interface ReceptionGuideProps extends DetailSubContainerProps {
  processArr: JdDetailObjDef["process_arr"];
  startTime: string;
  endTime: string;
  cut: boolean;
}
