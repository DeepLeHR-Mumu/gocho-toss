import { FC } from "react";

import { useDeleteResumeCertification } from "@/apis/resume/certification/useDeleteResumeCertification";

import { ListItem } from "@/pages/resume/component";
import { CertificationListProps } from "./type";

export const CertificationList: FC<CertificationListProps> = ({
  myCertificationList,
  selectCertification,
  resumeId,
}) => {
  const { mutate: deleteCertification } = useDeleteResumeCertification(resumeId);

  return (
    <>
      {myCertificationList.map((certification) => {
        const { id, name, issuingAuthority, acquisitionDate } = certification;

        return (
          <ListItem
            key={id}
            title={name}
            titleDes={issuingAuthority}
            date={[acquisitionDate]}
            editHandler={() => {
              selectCertification({ id, name, issuingAuthority, acquisitionDate });
            }}
            deleteHandler={() => {
              deleteCertification({
                resumeId,
                certificationId: id,
              });
            }}
          />
        );
      })}
    </>
  );
};
