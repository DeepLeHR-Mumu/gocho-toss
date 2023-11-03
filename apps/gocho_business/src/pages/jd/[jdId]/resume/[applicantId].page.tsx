import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useInView } from "react-intersection-observer";

import { NextPage } from "next";
import { useRouter } from "next/router";

import { Button, ThreeDots } from "shared-ui/deeple-ds";

import { useApplicantPdf } from "@/apis";
import { PageLayout } from "@/components";

import { SaveFileModal } from "../component/SaveFileModal";

import { SideApplicantListPart } from "./part/SideApplicantListPart";
import { cssObj } from "./style";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const JdResumePage: NextPage = () => {
  const router = useRouter();
  const [pageArr, setPageArr] = useState<number[]>([]);
  const jdId = Number(router.query.jdId);
  const applicantId = Number(router.query.applicantId);
  const [totalPdfPageNumber, setTotalPdfPageNumber] = useState(1);
  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) {
        if (pageArr.length < totalPdfPageNumber) {
          setPageArr((prev) => prev.concat(pageArr.length + 1));
        }
      }
    },
  });

  const {
    data: applicantPdf,
    isLoading,
    isError,
    isSuccess,
  } = useApplicantPdf({
    jdId,
    applicantId,
  });

  const [saveFileModal, setSaveFileModal] = useState(false);

  useEffect(() => {
    if (isError) {
      alert("열람할 수 없는 이력서입니다.");
    }
  }, [isError]);

  return (
    <>
      <PageLayout>
        <div css={cssObj.wrapper}>
          <SideApplicantListPart />
          <div css={cssObj.resumeWrapper}>
            {!applicantPdf || isLoading ? (
              <div css={cssObj.resumeLoading}>
                <ThreeDots />
              </div>
            ) : (
              <Document
                file={applicantPdf.data}
                loading={
                  <div css={cssObj.resumeLoading}>
                    <ThreeDots />
                  </div>
                }
                onLoadSuccess={({ _pdfInfo: pdfInfo }) => {
                  if (!isLoading && isSuccess) {
                    setTotalPdfPageNumber(pdfInfo.numPages);
                  }
                }}
              >
                {pageArr.map((eachPage) => (
                  <>
                    <Page
                      key={eachPage}
                      width={748}
                      pageNumber={eachPage}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                    <div css={cssObj.resumeMargin} />
                  </>
                ))}
              </Document>
            )}
            <div ref={ref} />
          </div>
          <div css={cssObj.buttonWrapper}>
            <Button size="small" onClick={() => setSaveFileModal(true)}>
              파일 저장하기
            </Button>
          </div>
        </div>
      </PageLayout>
      {saveFileModal && <SaveFileModal applicantIdArr={[applicantId]} cancel={() => setSaveFileModal(false)} />}
    </>
  );
};

export default JdResumePage;
