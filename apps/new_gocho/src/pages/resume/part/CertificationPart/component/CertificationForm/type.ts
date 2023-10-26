import { SelectorResumeCertification } from "@/apis/resume/certification/useResumeCertification/type";

export interface CertificationFormProps {
  resumeId: number;
  handleEditMode: () => void;
  currentCertification: SelectorResumeCertification | null;
}
