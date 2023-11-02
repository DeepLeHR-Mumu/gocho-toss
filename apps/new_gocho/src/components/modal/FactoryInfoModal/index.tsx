import { FiX, FiMapPin } from "react-icons/fi";
import { Modal } from "shared-ui/deeple-ds";

import { useFactoryDetail } from "@/apis/factory";

import { Executives } from "./component/Executives";
import { Bus } from "./component/Bus";
import { Dormitory } from "./component/Dormitory";
import { FactoryInfoModalProps } from "./type";
import { cssObj } from "./style";

export const FactoryInfoModal = ({ factoryId, close }: FactoryInfoModalProps) => {
  const { data: factoryDetail } = useFactoryDetail(factoryId);

  if (!factoryDetail) {
    return null;
  }

  const { name, product, maleNumber, femaleNumber, dormitory, bus } = factoryDetail;

  return (
    <Modal>
      <div css={cssObj.wrapper}>
        <div css={cssObj.header}>
          <h3 css={cssObj.title}>공장정보</h3>
          <button type="button" onClick={close}>
            <FiX css={cssObj.close} />
          </button>
        </div>
        <div css={cssObj.infoWrapper}>
          <div css={cssObj.infoTitleWrapper}>
            <FiMapPin css={cssObj.mapIcon} />
            <h3 css={cssObj.infoTitle}>{name}</h3>
            <span css={cssObj.infoSubtitle}>{product}</span>
          </div>
          <div css={cssObj.contentWrapper}>
            <Executives maleNumber={maleNumber} femaleNumber={femaleNumber} />
            <Bus bus={bus.exists} />
            <Dormitory dormitory={dormitory.exists} />
          </div>
          <ul css={cssObj.descriptionList}>
            {bus.desc && <li>통근버스: {bus.desc}</li>}
            {dormitory.desc && <li>기숙사: {dormitory.desc}</li>}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
