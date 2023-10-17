import { FC, KeyboardEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

import { useDisabledKeydownSubmit } from "shared-hook";
import { Button, Input } from "shared-ui/deeple-ds";

import { useCertificationList } from "@/apis/resume/certification/useCertificationList";
import { usePostResumeCertification } from "@/apis/resume/certification/usePostResumeCertification";
import { usePutResumeCertification } from "@/apis/resume/certification/usePutResumeCertification";
import { PostCertificationDef } from "@/apis/resume/certification/type";

import { useQueryDebounce } from "./util";
import { useToast } from "@/globalStates";
import { CertificationFormProps } from "./type";

export const CertificationForm: FC<CertificationFormProps> = ({ resumeId, handleEditMode, currentCertification }) => {
  const { register, handleSubmit, setValue } = useForm<PostCertificationDef>({
    mode: "onChange",
    defaultValues: currentCertification
      ? {
          name: currentCertification.name,
          issuing_authority: currentCertification.issuingAuthority,
          acquisition_date: currentCertification.acquisitionDate,
        }
      : {
          name: "",
        },
  });

  const { setToastMessage } = useToast();

  const [keyword, setKeyword] = useState<string>(currentCertification?.name || "");
  const [isFocusing, setIsFocusing] = useState(false);
  const { debounceValue: debouncedKeyward, isChanged } = useQueryDebounce(keyword, 300);
  const { data: certificationList } = useCertificationList(debouncedKeyward);

  useDisabledKeydownSubmit();

  const { mutate: postCertification } = usePostResumeCertification(resumeId);
  const { mutate: putCertification } = usePutResumeCertification();

  const onSubmitResumeCertifiaction: SubmitHandler<PostCertificationDef> = async (data) => {
    const onSuccess = () => {
      setToastMessage("자격증 업로드가 완료되었습니다.");

      handleEditMode();
    };

    if (currentCertification) {
      const { id } = currentCertification;

      putCertification(
        { resumeId, certificationId: id, ...data },
        {
          onSuccess,
        }
      );
    } else {
      postCertification(
        { resumeId, ...data },
        {
          onSuccess,
        }
      );
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      //   console.log("certificationList", certificationList);
    }

    if (e.key === "ArrowDown") {
      //   console.log("certificationList", certificationList);
    }

    if (e.key === "Enter") {
      //   console.log("certificationList", certificationList);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitResumeCertifiaction)}>
      <div>
        <p>자격증 명</p>
        <Input
          suffix={<FiSearch />}
          placeholder="자격증 명을 입력해 주세요"
          onKeyDown={handleKeyPress}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setIsFocusing(true)}
          value={keyword}
        />
        {isChanged && isFocusing && debouncedKeyward.length > 0 && (
          <div>
            {certificationList?.data.map((certi) => (
              <button
                key={certi}
                type="button"
                onClick={() => {
                  setKeyword(certi);
                  setIsFocusing(false);
                  setValue("name", certi);
                }}
              >
                {certi}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <p>취득연월</p>
        <Input placeholder="예) 200101" {...register("acquisition_date")} />
      </div>

      <div>
        <p>발급 기관</p>
        <Input placeholder="자격증 발급 기관명을 입력해 주세요" {...register("issuing_authority")} />
      </div>

      <div>
        <Button size="small" type="submit">
          저장
        </Button>
        <Button size="small" type="button" onClick={handleEditMode} color="outlineGray">
          취소
        </Button>
      </div>
    </form>
  );
};
