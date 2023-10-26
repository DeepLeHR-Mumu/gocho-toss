import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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
  const { setToastMessage } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostActivityDef>({
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
    const { activity_date } = data;

    const onActivitySuccess = () => {
      setToastMessage("대외활동 업로드가 완료되었습니다.");

      handleEditMode();
    };

    if (currentActivity) {
      const { id } = currentActivity;

      putActivity(
        {
          resumeId,
          activityId: id,
          ...data,
          activity_date: YYMMToDate(activity_date),
        },
        {
          onSuccess: onActivitySuccess,
        }
      );
    } else {
      postActivity(
        {
          resumeId,
          ...data,
          activity_date: YYMMToDate(activity_date),
        },
        {
          onSuccess: onActivitySuccess,
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

        <Controller
          name="activity_type"
          control={control}
          rules={{ required: "해당 항목을 선택해주세요" }}
          render={({ field, fieldState }) => (
            <ResumeDropDown
              menuArr={menuArr}
              setValue={field.onChange}
              value={field.value}
              placeholder="활동 유형 선택"
              state={{
                state: fieldState.invalid ? "error" : "default",
                message: fieldState.error?.message,
              }}
            />
          )}
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
        />
      </div>

      <div css={cssObj.inputWrapper}>
        <p>
          주최 기관 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="참여한 활동의 기관을 입력해 주세요"
          css={cssObj.inputWidth}
          state={{
            state: errors.name ? "error" : "default",
            message: errors.name?.message,
          }}
          {...register("organizer", {
            required: {
              value: true,
              message: "해당 항목을 입력해 주세요.",
            },
          })}
          maxLength={40}
        />
      </div>

      <div css={cssObj.inputWrapper}>
        <p>
          활동 연월 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="예) 200101"
          maxLength={6}
          state={{
            state: errors.activity_date ? "error" : "default",
            message: errors.activity_date?.message,
          }}
          {...register("activity_date", {
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
        <p>
          활동 내용 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="활동 상세 내용을 입력해 주세요"
          css={cssObj.desWidth}
          state={{
            state: errors.activity_description ? "error" : "default",
            message: errors.activity_description?.message,
          }}
          maxLength={300}
          {...register("activity_description", {
            required: {
              value: true,
              message: "해당 항목을 입력해 주세요",
            },
          })}
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
