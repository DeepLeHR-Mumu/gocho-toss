import { FC, useState } from "react";

import { useResumeCertificationArr } from "@/apis/resume/certification/useResumeCertificationArr";

import { ListCard } from "../../component";
import { CertificationForm, CertificationList } from "./component";
import { SelectorResumeCertification } from "@/apis/resume/certification/useResumeCertification/type";
import { CertificationPartProps } from "./type";

export const CertificationPart: FC<CertificationPartProps> = ({ userId, resumeId }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentCertification, setCurrentCertification] = useState<SelectorResumeCertification>();

  const handleEditMode = () => {
    setEditMode(!editMode);
    setCurrentCertification(undefined);
  };

  const { data: myCertificationList } = useResumeCertificationArr(resumeId);

  const selectCertification = (certi: SelectorResumeCertification) => {
    setCurrentCertification(certi);
    setEditMode(!editMode);
  };

  return (
    <div>
      <ListCard title="자격증" userId={userId} iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
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
    </div>
  );
};
