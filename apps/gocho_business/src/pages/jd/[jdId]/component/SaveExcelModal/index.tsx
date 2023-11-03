import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { getJdApplicantExcel } from "@/apis/jd/applicant/excelGenerate";
import { useReadApplicant } from "@/apis";
import { jdApplicantArrKeyObj } from "@/apis/jd/useJdApplicantArr/type";
import { jdStatisticsKeyObj } from "@/apis/jd/useJdStatistics/type";

import { SaveModalBase } from "../SaveModalBase";
import { SAVE_MODAL_STEP } from "../constant";

import { SaveExcelModalProps } from "./type";

export const SaveExcelModal = ({ applicantIdArr, cancel }: SaveExcelModalProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const queryJdId = Number(router.query.jdId);

  const [step, setStep] = useState<SAVE_MODAL_STEP>(SAVE_MODAL_STEP.SAVE);

  const { mutate: readApplicant } = useReadApplicant();

  const saveExcel = async () => {
    setStep(SAVE_MODAL_STEP.LOADING);
    if (!Number.isNaN(queryJdId) && queryJdId !== 0) {
      const response = await getJdApplicantExcel(queryJdId, applicantIdArr);

      if (!axios.isAxiosError(response) && response.status === 200 && response.data instanceof Blob) {
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
    <SaveModalBase type="excel" applicantsNumber={applicantIdArr.length} cancel={cancel} save={saveExcel} step={step} />
  );
};
