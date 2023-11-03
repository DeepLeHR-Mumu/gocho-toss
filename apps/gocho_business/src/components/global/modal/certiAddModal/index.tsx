import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";

import { SharedButton } from "shared-ui/common/sharedButton";
import { useFocusTrap } from "shared-hook";

import { useModal, certiModalDef } from "@/globalStates";
import { commonCssObj } from "@/styles";

import { ModalComponent } from "../modalBackground";
import { CERTI_ARR } from "./constant";
import { cssObj } from "./style";

export const CertiAddModal: FunctionComponent = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [currentCerti, setCurrentCerti] = useState<string[]>([]);

  const { contentObj, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const { jdForm } = contentObj as certiModalDef;
  const { setValue, watch } = jdForm;

  useEffect(() => {
    setCurrentCerti(watch("qualification.preferred_certification") || []);
  }, [setCurrentCerti, watch]);

  const addCertiHandler = (certi: string) => {
    const totalNumber = watch("qualification.preferred_certification")?.length || 0;
    const isInList = watch("qualification.preferred_certification")?.includes(certi);

    if (totalNumber < 10) {
      if (!isInList) {
        setValue("qualification.preferred_certification", [
          ...(watch("qualification.preferred_certification") || []),
          certi,
        ]);
        setCurrentCerti(watch("qualification.preferred_certification") || []);
      }
    }
  };

  const deleteCertiHandler = (certi: string) => {
    setValue("qualification.preferred_certification", [
      ...(watch("qualification.preferred_certification")?.filter((element) => element !== certi) || []),
    ]);
    setCurrentCerti(watch("qualification.preferred_certification") || []);
  };

  useFocusTrap(modalRef);

  const certiSearchResultArr = CERTI_ARR.filter((prevCerti) => prevCerti.includes(searchWord));

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>자격증 추가</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        <p css={cssObj.desc}>자격증은 최대 10개까지 추가가 가능합니다.</p>
        <div css={cssObj.inputWrapper}>
          <input
            css={commonCssObj.input(46, false)}
            placeholder="자격증 이름을 입력해 보세요"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <div css={commonCssObj.optionList(searchWord !== "", 6.5)}>
            {certiSearchResultArr.length === 0 ? (
              <p css={cssObj.noCertiSearchDesc}>자격증 검색 결과가 없습니다.</p>
            ) : (
              certiSearchResultArr.map((certi) => (
                <button
                  type="button"
                  key={`CertiAddModal${certi}`}
                  onClick={() => {
                    addCertiHandler(certi);
                    setSearchWord("");
                  }}
                  css={cssObj.addCertiButton}
                >
                  {certi}
                </button>
              ))
            )}
          </div>
        </div>
        <div css={cssObj.selectedCertiWrapper}>
          {currentCerti.map((certi) => (
            <div key={`CertiAddModalAdded${certi}`} css={cssObj.selectedCertiButton}>
              {certi}
              <button type="button" css={cssObj.smallDeleteButton} onClick={() => deleteCertiHandler(certi)}>
                <FiX />
              </button>
            </div>
          ))}
        </div>
        <div>
          <div css={cssObj.buttonContainer}>
            <SharedButton onClickHandler={() => closeModal()} buttonType="outLineGray" text="취소" width={8.75} />
            <SharedButton onClickHandler={() => closeModal()} buttonType="fillBlue" text="확인" width={8.75} />
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};
