import { FC } from "react";

import { useToast } from "@/globalStates";
import { useDeleteResumeCertification } from "@/apis/resume/certification/useDeleteResumeCertification";

import { ListItem } from "@/pages/resume/component";
import { CertificationListProps } from "./type";

export const CertificationList: FC<CertificationListProps> = ({
  myCertificationList,
  selectCertification,
  resumeId,
}) => {
  const { mutate: deleteCertification } = useDeleteResumeCertification(resumeId);
  const { setToastMessage } = useToast();

  return (
    <>
      {myCertificationList.map((certi) => {
        const { id, name, issuingAuthority, acquisitionDate } = certi;

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
              deleteCertification(
                {
                  resumeId,
                  certificationId: id,
                },
                {
                  onSuccess: () => setToastMessage("자격증이 삭제되었습니다."),
                }
              );
            }}
          />
        );
      })}
    </>
  );
};
