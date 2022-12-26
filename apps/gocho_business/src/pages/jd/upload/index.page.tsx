import { ReactElement } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { useAddJd } from "@/apis/jd/useAddJd";

import { HeaderPart } from "./part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { PositionHeaderPart } from "./part/positionHeaderPart";
import { PositionTitleInfoPart } from "./part/positionTitleInfoPart";
import { PositionRequiredInfoPart } from "./part/positionRequiredInfoPart";
import { PositionWorkInfoPart } from "./part/positionWorkInfoPart";
import { JobFormValues } from "./type";
import { blankPosition } from "./constant";
import { cssObj } from "./style";

const JdUploadPage: NextPageWithLayout = () => {
  const jobForm = useForm<JobFormValues>({
    defaultValues: {
      position_arr: [blankPosition],
    },
  });
  const { control, handleSubmit } = jobForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  const { mutate: addJobMutate } = useAddJd();

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    addJobMutate(
      { dto: jobObj },
      {
        onSuccess: () => {
          alert("서버에 공고가 업로드 되었습니다.");
        },

        onError: () => {
          alert("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
        },
      }
    );
  };

  return (
    <main>
      <PageLayout>
        <section>
          <form onSubmit={handleSubmit(jobSubmitHandler)}>
            <HeaderPart />
            <BasicInfoPart jobForm={jobForm} />
            <PositionHeaderPart append={append} />
            <ul>
              {fields.map((item, index) => (
                <li key={`${item.id}`} css={cssObj.cardContainer}>
                  <PositionTitleInfoPart id={item.id} index={index} jobForm={jobForm} append={append} remove={remove} />
                  <PositionRequiredInfoPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionWorkInfoPart id={item.id} index={index} jobForm={jobForm} />
                </li>
              ))}
            </ul>
          </form>
        </section>
      </PageLayout>
    </main>
  );
};

JdUploadPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdUploadPage;
