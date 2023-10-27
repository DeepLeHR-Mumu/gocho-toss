import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { getApplicantsFile } from "@/apis/jd/applicant/pdfGenerate";
import { useReadApplicant } from "@/apis";
import { jdApplicantArrKeyObj } from "@/apis/jd/useJdApplicantArr/type";
import { jdStatisticsKeyObj } from "@/apis/jd/useJdStatistics/type";

import { SaveModalBase } from "../SaveModalBase";
import { SAVE_MODAL_STEP } from "../constant";

import { SaveFileModalProps } from "./type";

export const SaveFileModal = ({ applicantIdArr, cancel }: SaveFileModalProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const queryJdId = Number(router.query.jdId);

  const { mutate: readApplicant } = useReadApplicant();

  const [step, setStep] = useState<SAVE_MODAL_STEP>(SAVE_MODAL_STEP.SAVE);

  const saveFile = async () => {
    setStep(SAVE_MODAL_STEP.LOADING);

    if (!Number.isNaN(queryJdId) && queryJdId !== 0) {
      const response = await getApplicantsFile(queryJdId, applicantIdArr);

      if (!axios.isAxiosError(response) && response.status === 200) {
        const { headers, data } = response;

        const downloadLink = document.createElement("a");
        downloadLink.href = window.URL.createObjectURL(data);
        const fileName = decodeURIComponent(headers["content-disposition"].split("filename=")[1]);

        downloadLink.download = fileName;
        downloadLink.click();
        setStep(SAVE_MODAL_STEP.COMPLETE);

        readApplicant(
          { jdId: queryJdId, applicantIdArr },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(jdApplicantArrKeyObj.applicantArr({ jdId: queryJdId }));
              queryClient.invalidateQueries(jdStatisticsKeyObj.statistics(queryJdId));
            },
          }
        );

        return;
      }

      setStep(SAVE_MODAL_STEP.ERROR);
    }
  };

  return (
    <SaveModalBase type="file" applicantsNumber={applicantIdArr.length} cancel={cancel} save={saveFile} step={step} />
  );
};
