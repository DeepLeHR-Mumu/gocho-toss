import { useState } from "react";
import { useRouter } from "next/router";

import { Button, Checkbox } from "shared-ui/deeple-ds";
import { dateConverter } from "shared-util";

import { useJdApplicantArr } from "@/apis";
import { Pagination } from "@/components";
import { INTERNAL_URL } from "@/constants";
import AscendIcon from "@/public/image/ascend.svg?svgr";
import DescendIcon from "@/public/image/descend.svg?svgr";

import { SaveFileModal } from "../../../component/SaveFileModal";
import { NoApplicantModal } from "../../../component/NoApplicantModal";
import { SaveExcelModal } from "../../../component/SaveExcelModal";
import { containerStyle } from "../../style";

import { cssObj } from "./style";

export const ApplicantListPart = () => {
  const router = useRouter();
  const [order, setOrder] = useState<"recent" | "read" | "unread">("recent");
  const [selectedResumeIdArr, setSelectedResumeIdArr] = useState<number[]>([]);
  const [saveExcelModal, setSaveExcelModal] = useState<{ applicantIdArr: number[]; state: boolean }>({
    applicantIdArr: [],
    state: false,
  });
  const [noApplicantModal, setNoApplicantModal] = useState(false);
  const [saveFileModal, setSaveFileModal] = useState(false);

  const queryJdId = Number(router.query.jdId);
  const queryPage = router.query.page ? Number(router.query.page) : 1;
  const querySize = router.query.size ? Number(router.query.size) : 10;

  const { data: jdApplicantObj } = useJdApplicantArr({
    jdId: queryJdId,
    page: queryPage,
    size: querySize,
    order,
  });

  const openModal = (handler: () => void) => (selectedResumeIdArr.length === 0 ? setNoApplicantModal(true) : handler());

  const changeOrder = () => {
    switch (order) {
      case "recent":
        setOrder("unread");
        return;
      case "unread":
        setOrder("read");
        return;
      case "read":
        setOrder("recent");
        return;
      default:
        setOrder("recent");
    }
  };

  if (!jdApplicantObj || jdApplicantObj.applicantArr.length === 0) {
    return (
      <section css={containerStyle}>
        <p css={cssObj.noApplicant}>아직 지원자가 없습니다.</p>
      </section>
    );
  }

  const checkAll = () => {
    setSelectedResumeIdArr(jdApplicantObj.applicantArr.map((apply) => apply.id));
  };

  const uncheckAll = () => {
    setSelectedResumeIdArr([]);
  };

  const checkEach = (id: number) => {
    setSelectedResumeIdArr((prev) => prev.concat(id));
  };

  const uncheckEach = (id: number) => {
    setSelectedResumeIdArr((prev) => prev.filter((resumeId) => resumeId !== id));
  };

  return (
    <section css={containerStyle}>
      <div css={cssObj.wrapper}>
        <div css={cssObj.top}>
          <Button size="small" css={cssObj.customButton} onClick={() => openModal(() => setSaveFileModal(true))}>
            파일 저장하기
          </Button>
          <Button
            size="small"
            color="outline"
            css={cssObj.customOutlineButton}
            onClick={() => openModal(() => setSaveExcelModal({ applicantIdArr: selectedResumeIdArr, state: true }))}
          >
            액셀 저장하기
          </Button>
          <Button
            size="small"
            color="outline"
            css={cssObj.customOutlineButton}
            onClick={() => setSaveExcelModal({ applicantIdArr: [], state: true })}
          >
            전체 액셀 저장하기
          </Button>
        </div>
        <table css={cssObj.applicantListTable}>
          <thead>
            <th>
              <Checkbox
                checked={selectedResumeIdArr.length === jdApplicantObj.applicantArr.length}
                onChange={(e) => (e.target.checked ? checkAll() : uncheckAll())}
              />
            </th>
            <th>전체</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>최종 학력</th>
            <th>총 경력</th>
            <th>
              열람여부
              <div css={cssObj.orderWrapper(order)}>
                <button type="button" onClick={changeOrder}>
                  <AscendIcon />
                  {/* <Image src={ascendOrder} alt="ascend" /> */}
                </button>
                <button type="button" onClick={changeOrder}>
                  <DescendIcon />
                  {/* <Image src={descendOrder} alt="descend" /> */}
                </button>
              </div>
            </th>
            <th> </th>
          </thead>
          <tbody>
            {jdApplicantObj.applicantArr.map((applicant) => (
              <tr key={applicant.id}>
                <td>
                  <Checkbox
                    checked={selectedResumeIdArr.includes(applicant.id)}
                    onChange={(e) => (e.target.checked ? checkEach(applicant.id) : uncheckEach(applicant.id))}
                  />
                </td>
                <td />
                <td>{applicant.applicant.name}</td>
                <td>{dateConverter(applicant.applicant.birthDate).date}</td>
                <td>{`${applicant.resume.education.name}(${applicant.resume.education.graduateType})`}</td>
                <td>{applicant.resume.career.totalDuration ? applicant.resume.career.totalDuration : "-"}</td>
                <td>{applicant.isRead ? "열람" : <span css={cssObj.unread}>미열람</span>}</td>
                <td>
                  <a
                    href={`/jd/${queryJdId}/resume/${applicant.id}?page=${queryPage}&size=${querySize}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="xsmall" color="outline" css={cssObj.checkResumeButton}>
                      이력서 확인하기
                    </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination url={INTERNAL_URL.JD_DETAIL} totalPage={jdApplicantObj.pageResult.totalPages} />
      </div>
      {saveFileModal && <SaveFileModal applicantIdArr={selectedResumeIdArr} cancel={() => setSaveFileModal(false)} />}
      {saveExcelModal.state && (
        <SaveExcelModal
          applicantIdArr={saveExcelModal.applicantIdArr}
          cancel={() => setSaveExcelModal({ applicantIdArr: [], state: false })}
        />
      )}
      {noApplicantModal && <NoApplicantModal confirm={() => setNoApplicantModal(false)} />}
    </section>
  );
};
