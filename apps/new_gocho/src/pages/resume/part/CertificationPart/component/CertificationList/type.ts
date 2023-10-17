import { SelectorResumeCertificationArr } from "@/apis/resume/certification/useResumeCertificationArr/type";
import { SelectorResumeCertification } from "@/apis/resume/certification/useResumeCertification/type";

export interface CertificationListProps {
  resumeId: number;
  myCertificationList: SelectorResumeCertificationArr;
  selectCertification: (certi: SelectorResumeCertification) => void;
}
