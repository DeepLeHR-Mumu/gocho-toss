import { FunctionComponent } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";

import { useModal } from "@/globalStates";
import { commonCssObj } from "@/styles";

import { cssObj } from "./style";
import { FactoryPartProps } from "./type";

export const FactoryPart: FunctionComponent<FactoryPartProps> = ({ companyData }) => {
  const { setCurrentModal } = useModal();

  return (
    <section css={commonCssObj.partContainer}>
      <h3 css={commonCssObj.partTitle}>공장 등록</h3>
      <button
        type="button"
        css={cssObj.addFactoryButton}
        onClick={() => {
          setCurrentModal("factoryModal");
        }}
      >
        <FiPlus />
        공장 추가
      </button>
      <div css={cssObj.factoryList}>
        {companyData.factory.map((factory) => (
          <div key={`companyEditFactory${factory.id}`} css={cssObj.factoryBox}>
            <div css={cssObj.factoryInfoWrapper}>
              {factory.name}
              <p css={cssObj.factoryAddress}>{factory.address}</p>
            </div>
            <div css={cssObj.buttonContainer}>
              <button type="button" css={cssObj.editButton}>
                <FiEdit3 />
              </button>
              <button type="button" aria-label={`공장${factory.name}삭제하기`} css={cssObj.deleteButton}>
                <FiMinus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
