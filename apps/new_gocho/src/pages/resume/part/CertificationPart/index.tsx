import { forwardRef, useState } from "react";

import { useResumeCertificationArr } from "@/apis/resume/certification/useResumeCertificationArr";
import { SelectorResumeCertification } from "@/apis/resume/certification/useResumeCertification/type";

import { ListCard } from "../../component";
import { CertificationForm, CertificationList } from "./component";
import { CertificationPartProps } from "./type";

export const CertificationPart = forwardRef<HTMLDivElement, CertificationPartProps>(({ resumeId }, ref) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentCertification, setCurrentCertification] = useState<SelectorResumeCertification | null>(null);

  const handleEditMode = () => {
    setEditMode(!editMode);
    setCurrentCertification(null);
  };

  const { data: myCertificationList } = useResumeCertificationArr(resumeId);

  const selectCertification = (certification: SelectorResumeCertification) => {
    setCurrentCertification(certification);
    setEditMode(!editMode);
  };

  return (
    <ListCard ref={ref} title="자격증" iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <CertificationForm
          handleEditMode={handleEditMode}
          resumeId={resumeId}
          currentCertification={currentCertification}
        />
      ) : (
        myCertificationList && (
          <CertificationList
            resumeId={resumeId}
            myCertificationList={myCertificationList}
            selectCertification={selectCertification}
          />
        )
      )}
    </ListCard>
  );
});
