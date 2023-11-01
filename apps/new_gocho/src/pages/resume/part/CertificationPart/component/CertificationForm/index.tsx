import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

import { useDisabledKeydownSubmit } from "shared-hook";
import { Button, Input } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { YYMMToDate, dateToYYMM } from "@/utils";
import { CancelModal } from "@/pages/resume/component";

import { useCertificationList } from "@/apis/resume/certification/useCertificationList";
import { usePostResumeCertification } from "@/apis/resume/certification/usePostResumeCertification";
import { usePutResumeCertification } from "@/apis/resume/certification/usePutResumeCertification";
import { PostCertificationDef } from "@/apis/resume/certification/type";

import { CertificationFormProps } from "./type";
import { cssObj } from "./style";
import { useQueryDebounce } from "./util";

export const CertificationForm: FC<CertificationFormProps> = ({ resumeId, handleEditMode, currentCertification }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { isDirty, errors },
  } = useForm<PostCertificationDef>({
    mode: "onChange",
    defaultValues: currentCertification
      ? {
          name: currentCertification.name,
          issuing_authority: currentCertification.issuingAuthority,
          acquisition_date: dateToYYMM(currentCertification.acquisitionDate),
        }
      : {
          name: "",
        },
  });

  const [cancelModal, setCancelModal] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const { setToastMessage } = useToast();

  const [keyword, setKeyword] = useState<string>(currentCertification?.name || "");
  const [isFocusing, setIsFocusing] = useState(false);
  const { debounceValue: debouncedKeyword, isChanged } = useQueryDebounce(keyword, 500);
  const { data: certificationList } = useCertificationList(debouncedKeyword);

  const [focusedIndex, setFocusedIndex] = useState(-1);

  useDisabledKeydownSubmit();

  const { mutate: postCertification } = usePostResumeCertification(resumeId);
  const { mutate: putCertification } = usePutResumeCertification(resumeId);

  const onSubmitResumeCertification: SubmitHandler<PostCertificationDef> = async (data) => {
    const onCertificationSuccess = () => {
      setToastMessage("자격증 업로드가 완료되었습니다.");

      handleEditMode();
    };

    if (currentCertification) {
      const { id } = currentCertification;

      putCertification(
        {
          resumeId,
          certificationId: id,
          acquisition_date: YYMMToDate(data.acquisition_date),
          name: data.name,
          issuing_authority: data.issuing_authority,
        },
        {
          onSuccess: onCertificationSuccess,
        }
      );
    } else {
      postCertification(
        {
          resumeId,
          acquisition_date: YYMMToDate(data.acquisition_date),
          name: data.name,
          issuing_authority: data.issuing_authority,
        },
        {
          onSuccess: onCertificationSuccess,
        }
      );
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!certificationList || !searchRef.current) return;

    if (e.key === "ArrowUp") {
      setFocusedIndex(focusedIndex > 0 ? focusedIndex - 1 : -1);
    }

    if (e.key === "ArrowDown") {
      setFocusedIndex(
        focusedIndex < certificationList.data.length - 1 ? focusedIndex + 1 : certificationList.data.length - 1
      );
    }

    if (e.key === "Enter") {
      setKeyword(certificationList.data[focusedIndex]);
      setIsFocusing(false);
      setValue("name", certificationList.data[focusedIndex]);
    }
  };

  useEffect(() => {
    if (!searchRef.current) return;

    const itemHeight = 40;
    const containerHeight = searchRef.current.offsetHeight;

    if (searchRef.current.scrollTop > focusedIndex * itemHeight) {
      searchRef.current.scrollTop -= itemHeight;
    }

    if ((focusedIndex + 1) * itemHeight > searchRef.current.scrollTop + containerHeight) {
      searchRef.current.scrollTop += itemHeight;
    }
  }, [focusedIndex]);

  const onClickCancel = () => {
    if (isDirty) setCancelModal(true);
    if (!isDirty) handleEditMode();
  };

  return (
    <>
      {cancelModal && <CancelModal setModal={setCancelModal} confirmHandler={handleEditMode} />}
      <form onSubmit={handleSubmit(onSubmitResumeCertification)} css={cssObj.wrapper}>
        <div css={cssObj.inputWrapper}>
          <p>
            자격증 명 <strong css={cssObj.required}> *</strong>
          </p>
          <Input
            suffix={<FiSearch />}
            css={cssObj.iconInput}
            placeholder="자격증 명을 입력해 주세요"
            onKeyDown={handleKeyPress}
            onFocus={() => setIsFocusing(true)}
            value={keyword}
            state={{
              state: errors.name ? "error" : "default",
              message: errors.name?.message,
            }}
            {...register("name", {
              required: {
                value: true,
                message: "해당 항목을 입력해 주세요.",
              },
            })}
            onChange={(e) => {
              setIsFocusing(true);
              setKeyword(e.target.value);
              setFocusedIndex(-1);
              clearErrors("name");
            }}
          />
          {isChanged && isFocusing && certificationList?.data.length && debouncedKeyword.length > 0 && (
            <div css={cssObj.keywordWrapper} ref={searchRef}>
              {certificationList?.data.map((certification, index) => (
                <button
                  css={focusedIndex === index ? cssObj.highlight : cssObj.resultItem}
                  key={certification}
                  type="button"
                  onClick={() => {
                    setKeyword(certification);
                    setIsFocusing(false);
                    setValue("name", certification);
                  }}
                >
                  {certification}
                </button>
              ))}
            </div>
          )}
        </div>

        <div css={cssObj.inputWrapper}>
          <p>
            취득연월 <strong css={cssObj.required}> *</strong>
          </p>
          <Input
            placeholder="예) 200101"
            maxLength={6}
            state={{
              state: errors.acquisition_date ? "error" : "default",
              message: errors.acquisition_date?.message,
            }}
            {...register("acquisition_date", {
              required: {
                value: true,
                message: "해당 항목을 입력해주세요",
              },
              pattern: {
                value: /^\d{4}(0[1-9]|1[0-2])$/i,
                message: "올바른 활동 연월을 입력해 주세요",
              },
            })}
          />
        </div>

        <div css={cssObj.inputWrapper}>
          <p>발급 기관</p>
          <Input
            placeholder="자격증 발급 기관명을 입력해 주세요"
            maxLength={40}
            {...register("issuing_authority")}
            css={cssObj.inputWidth}
          />
        </div>

        <div css={cssObj.buttonWrapper}>
          <Button size="small" type="submit" color={isDirty ? "active" : "disable"}>
            저장
          </Button>
          <Button size="small" type="button" onClick={onClickCancel} color="outlineGray">
            취소
          </Button>
        </div>
      </form>
    </>
  );
};
