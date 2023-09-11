import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { DropDown } from "shared-ui/deeple-ds";

import { ReportUserModal, BlockUserModal } from "@/components";

import { BlockReportDropDownProps } from "./type";
import { cssObj } from "./style";

export const BlockReportDropDown = ({ size, companyId, uploaderId }: BlockReportDropDownProps) => {
  const [blockUserModal, setBlockUserModal] = useState(false);
  const [reportUserModal, setReportUserModal] = useState(false);

  return (
    <>
      <DropDown
        customTitle={<FiMoreVertical css={cssObj.submenuIcon(size)} />}
        menu={{
          closeAfterClickEvent: true,
          options: [
            {
              content: "신고하기",
              onClick: () => {
                setReportUserModal(true);
              },
            },
            {
              content: "차단하기",
              onClick: () => {
                setBlockUserModal(true);
              },
            },
          ],
        }}
      />
      {blockUserModal && (
        <BlockUserModal
          companyId={companyId}
          userId={uploaderId}
          cancelHandler={() => {
            setBlockUserModal(false);
          }}
        />
      )}
      {reportUserModal && (
        <ReportUserModal
          userId={uploaderId}
          closeHandler={() => {
            setReportUserModal(false);
          }}
        />
      )}
    </>
  );
};
