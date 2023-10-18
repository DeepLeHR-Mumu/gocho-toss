import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "shared-ui/deeple-ds";

import { PostActivityDef } from "@/apis/resume/activity/type";
import { ResumeDropDown } from "@/pages/resume/component";

import { usePostResumeActivity } from "@/apis/resume/activity/usePostResumeActivity";
import { usePutResumeActivity } from "@/apis/resume/activity/usePutResumeActivity";

import { useToast } from "@/globalStates";
import { YYMMToDate, dateToYYMM } from "@/utils";

import { menuArr } from "./constant";
import { cssObj } from "./style";
import { ActivityFormProps } from "./type";

export const ActivityForm: FC<ActivityFormProps> = ({ handleEditMode, resumeId, currentActivity }) => {
  const [activityType, setActivityType] = useState<string>(currentActivity?.activityType || "");

  const { setToastMessage } = useToast();

  const { register, handleSubmit } = useForm<PostActivityDef>({
    mode: "onChange",

    defaultValues: currentActivity && {
      name: currentActivity.name,
      organizer: currentActivity.organizer,
      activity_date: dateToYYMM(currentActivity.activityDate),
      activity_description: currentActivity.activityDescription,
      activity_type: currentActivity.activityType,
    },
  });

  const { mutate: postActivity } = usePostResumeActivity(resumeId);
  const { mutate: putActivity } = usePutResumeActivity(resumeId);

  const onSubmitResumeActivity: SubmitHandler<PostActivityDef> = async (data) => {
    const { activity_date, activity_description, organizer, name } = data;

    if (!activityType) {
      setToastMessage("대외활동 유형을 선택해주세요.");
      return;
    }

    const onSuccess = () => {
      setToastMessage("대외활동 업로드가 완료되었습니다.");

      handleEditMode();
    };

    if (currentActivity) {
      const { id } = currentActivity;

      putActivity(
        {
          activityId: id,
          resumeId,
          name,
          activity_description,
          organizer,
          activity_date: YYMMToDate(activity_date),
          activity_type: activityType,
        },
        {
          onSuccess,
        }
      );
    } else {
      postActivity(
        {
          name,
          resumeId,
          activity_description,
          organizer,
          activity_date: YYMMToDate(activity_date),
          activity_type: activityType,
        },
        {
          onSuccess,
        }
      );
    }
  };

  return (
    <form css={cssObj.wrapper} onSubmit={handleSubmit(onSubmitResumeActivity)}>
      <div css={cssObj.inputWrapper}>
        <p>
          유형 <strong css={cssObj.required}> *</strong>
        </p>
        <ResumeDropDown
          menuArr={menuArr}
          setValue={setActivityType}
          value={activityType}
          placeholder="활동 유형 선택"
        />
      </div>
      <div css={cssObj.inputWrapper}>
        <p>
          활동명 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="참여한 활동명을 입력해 주세요"
          maxLength={40}
          css={cssObj.inputWidth}
          {...register("name", { required: true })}
        />
      </div>
      <div css={cssObj.inputWrapper}>
        <p>
          주최 기관 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="참여한 활동의 기관을 입력해 주세요"
          css={cssObj.inputWidth}
          maxLength={40}
          {...register("organizer", { required: true })}
        />
      </div>
      <div css={cssObj.inputWrapper}>
        <p>
          활동 연월 <strong css={cssObj.required}> *</strong>
        </p>
        <Input placeholder="예) 200101" maxLength={6} {...register("activity_date", { required: true })} />
      </div>
      <div css={cssObj.inputWrapper}>
        <p>
          활동 내용 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="활동 상세 내용을 입력해 주세요"
          css={cssObj.desWidth}
          maxLength={300}
          {...register("activity_description", { required: true })}
        />
      </div>

      <div css={cssObj.buttonWrapper}>
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
