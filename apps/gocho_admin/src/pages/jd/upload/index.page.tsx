import { ReactElement, useState, useRef } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { NormalButton } from "shared-ui/common/atom/button/normalButton";

import { useToast } from "@/globalStates";
import { useAddJd } from "@/api";
import { GlobalLayout, PageLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";
import { INTERNAL_URL } from "@/constant";

import { CommonDataPart, PositionRequiredDataPart, PositionTaskDataPart, PositionEtcDataPart } from "./part";
import { blankPosition } from "./constant";
import { JobFormValues } from "./type";
import { cssObj } from "./style";

const JdUpload: NextPageWithLayout = () => {
  const [checkMsg, setCheckMsg] = useState<string>();
  const router = useRouter();
  const isUploadLoading = useRef<boolean>(false);

  const jobForm = useForm<JobFormValues>({
    mode: "onBlur",
    defaultValues: {
      position_arr: [blankPosition],
    },
  });

  const { setToast } = useToast();
  const { control, handleSubmit } = jobForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  const { mutate: addJobMutate } = useAddJd();

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    if (isUploadLoading.current) return;

    if (!isUploadLoading.current) {
      isUploadLoading.current = true;

      addJobMutate(
        { dto: jobObj },
        {
          onSuccess: () => {
            setToast("등록되었습니다");
            router.push({
              pathname: INTERNAL_URL.JD_LIST_URL,
              query: { ...router.query, page: 1 },
            });
          },
          onError: (addJobError) => {
            setCheckMsg(addJobError.response?.data.error_message);
          },
          onSettled: () => {
            isUploadLoading.current = false;
          },
        }
      );
    }
  };

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <h2 css={cssObj.title}>공고 업로드</h2>
        <p css={cssObj.infoDesc}>
          <span>필수 작성칸</span> <span>필수 작성아님</span>
        </p>
        <form css={cssObj.formContainer} onSubmit={handleSubmit(jobSubmitHandler)}>
          <CommonDataPart jobForm={jobForm} />

          <ul css={cssObj.fieldArrCSS}>
            {fields.map((item, index) => (
              <li key={item.id}>
                <PositionRequiredDataPart id={item.id} index={index} jobForm={jobForm} />
                <PositionTaskDataPart id={item.id} index={index} jobForm={jobForm} />
                <PositionEtcDataPart id={item.id} index={index} jobForm={jobForm} />

                <div css={cssObj.cardButtonBox}>
                  <NormalButton
                    buttonClick={() => append({ ...jobForm.watch("position_arr")[index] })}
                    text="해당 직무 복사"
                    wide={false}
                    variant="outlined"
                  />
                  <NormalButton buttonClick={() => remove(index)} text="해당 직무 제거" wide={false} variant="filled" />
                </div>
              </li>
            ))}
          </ul>
          {checkMsg && <p css={cssObj.warning}>{checkMsg}</p>}
          <div css={cssObj.buttonBox}>
            <NormalButton
              buttonClick={() => {
                append(blankPosition);
              }}
              wide={false}
              text="직무 추가"
              variant="outlined"
            />

            <NormalButton isSubmit wide={false} text="공고 등록하기" variant="filled" />
          </div>
        </form>
      </PageLayout>
    </main>
  );
};

JdUpload.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdUpload;
