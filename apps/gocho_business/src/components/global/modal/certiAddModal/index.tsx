import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { useFocusTrap } from "shared-hooks";

import { useModal, certiModalDef } from "@/globalStates";
// import { commonCssObj } from "@/styles";

import { commonCssObj } from "@/styles";
import { ModalComponent } from "../modalBackground";

import { CERTI_ARR } from "./constant";
import { cssObj } from "./style";

export const CertiAddModal: FunctionComponent = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [currentCerti, setCurrentCerti] = useState<string[]>([]);

  const { contentObj, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const { jobForm } = contentObj as certiModalDef;
  const { setValue, watch } = jobForm;

  useEffect(() => {
    setCurrentCerti(watch("preferred_certi_arr") || []);
  }, [setCurrentCerti, watch]);

  const addCertiHandler = (certi: string) => {
    const totalNumber = watch("preferred_certi_arr")?.length || 0;
    const isInList = watch("preferred_certi_arr")?.includes(certi);

    if (totalNumber < 10) {
      if (!isInList) {
        setValue("preferred_certi_arr", [...(watch("preferred_certi_arr") || []), certi]);
        setCurrentCerti(watch("preferred_certi_arr") || []);
      }
    }
  };

  const deleteCertiHandler = (certi: string) => {
    setValue("preferred_certi_arr", [...(watch("preferred_certi_arr")?.filter((element) => element !== certi) || [])]);
    setCurrentCerti(watch("preferred_certi_arr") || []);
  };

  useFocusTrap(modalRef);

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
            {CERTI_ARR.filter((prevCerti) => prevCerti.includes(searchWord)).map((certi) => (
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
            ))}
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
            <NewSharedButton onClickHandler={() => closeModal()} buttonType="outLineGray" text="취소" width={8.75} />
            <NewSharedButton onClickHandler={() => closeModal()} buttonType="fillBlue" text="확인" width={8.75} />
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};
