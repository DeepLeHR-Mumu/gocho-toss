import { FunctionComponent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useEvalSpec } from "shared-api/spec/useEvalSpec";
import { NormalButton } from "shared-ui/common/atom/button";
import { specDetailKeyObj } from "shared-constant/queryKeyFactory/spec/detailKeyObj";

import { useToast } from "@recoil/hook/toast";
import { StarEvaluation } from "@component/common/molecule/starEvaluation";

import { EvalPointBox } from "./component/evalPointBox";
import { SelectBox } from "./component/selectBox";
import {
  title,
  wrapper,
  sectionContainer,
  feedBackContainer,
  subTitle,
  pointContainer,
  notSelectedBox,
  listBox,
  hookingMentSection,
  mySpecMent,
  disabledButton,
  titleContainer,
  strongTitle,
  warningDesc,
  buttonContainer,
  scoreTitle,
  warningBox,
} from "./style";
import { DeleteSelectedBoxDef, EvaluationValues, EvaluationPartProps } from "./type";

export const EvaluationPart: FunctionComponent<EvaluationPartProps> = ({ isMine, didEval, evalCount }) => {
  const router = useRouter();
  const { specId } = router.query;
  const [specScore, setSpecScore] = useState(0);
  const [currentDidEval, setCurrentDidEval] = useState<boolean>(didEval);
  const [openedSelectBox, setOpenedSelectBox] = useState<"strongPoint" | "weakPoint" | null>(null);

  const queryClient = useQueryClient();
  const { mutate } = useEvalSpec();
  const { setCurrentToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitted, isDirty },
  } = useForm<EvaluationValues>({
    mode: "onChange",
    defaultValues: { strength: [], weakness: [], score: 0, feedback: "" },
  });
  const strengthWatch = watch("strength");
  const weakWatch = watch("weakness");
  const scoreWatch = watch("score");

  const deleteSelectedBox: DeleteSelectedBoxDef = (formValue, pointName, targetArr) => {
    setValue(formValue, [
      ...targetArr.filter((value) => {
        return value !== pointName;
      }),
    ]);
  };

  const submitEvaluation: SubmitHandler<EvaluationValues> = (submitData) => {
    if (!isDirty) {
      return;
    }
    if (submitData.strength.length === 0 || submitData.weakness.length === 0 || submitData.score === 0) {
      return;
    }
    mutate(
      {
        specId: Number(specId),
        specData: submitData,
      },
      {
        onSuccess: () => {
          setCurrentDidEval(true);
          queryClient.invalidateQueries(specDetailKeyObj.spec({ specId: Number(specId) }));
          setCurrentToast("평가를 완료하였습니다.");
        },
      }
    );
  };

  useEffect(() => {
    setValue("score", specScore, { shouldDirty: true });
  }, [setValue, specScore]);

  if (isMine) {
    return (
      <aside css={wrapper}>
        <strong css={title}>스펙 평가하기</strong>
        <p css={subTitle}>내가 평가한 횟수 : {evalCount}</p>
        <p css={mySpecMent}>자신의 스펙은 평가할 수 없습니다.</p>
        <div css={disabledButton}>평가하기</div>
      </aside>
    );
  }
  if (currentDidEval) {
    return (
      <aside css={wrapper}>
        <strong css={title}>스펙 평가하기</strong>
        <p css={subTitle}>내가 평가한 횟수 : {evalCount}</p>
        <p css={hookingMentSection}>
          데이터 뒤에 사람있어요!
          <br />
          평가는 차갑게, 가슴은 따스하게
          <br />
          😉 부탁드립니다
        </p>
        <p css={mySpecMent}>이미 평가한 스펙입니다.</p>
        <div css={disabledButton}>평가하기</div>
      </aside>
    );
  }

  return (
    <aside css={wrapper}>
      <strong css={title}>스펙 평가하기</strong>
      <p css={subTitle}>내가 평가한 횟수 : {evalCount}</p>
      {evalCount < 5 && (
        <p css={hookingMentSection}>
          평가하기를 {5 - evalCount}번만 더하면 <br />내 스펙 평가내역을 볼 수 있어요! 화이팅!
        </p>
      )}

      <form onSubmit={handleSubmit(submitEvaluation)}>
        <section css={sectionContainer}>
          <div css={titleContainer}>
            <strong css={strongTitle}>강점</strong>
            {(isSubmitted || isDirty) && strengthWatch.length === 0 && <p css={warningDesc}>최소 1개를 골라주세요</p>}
          </div>
          <div css={buttonContainer}>
            <button
              type="button"
              css={listBox(openedSelectBox === "strongPoint")}
              onClick={() => {
                return setOpenedSelectBox("strongPoint");
              }}
              aria-label={openedSelectBox === "strongPoint" ? "장점 목록 닫기" : "장점 목록 열기"}
            >
              최대 3개
              <FiChevronDown />
            </button>

            {openedSelectBox === "strongPoint" && (
              <SelectBox
                register={register}
                closeFunction={() => {
                  setOpenedSelectBox(null);
                }}
                valueName="strength"
                watchArr={strengthWatch}
                setValue={setValue}
              />
            )}

            {strengthWatch.length === 0 && <p css={notSelectedBox}>강점이 무엇인가요?</p>}
            {openedSelectBox === null &&
              strengthWatch?.map((strength) => {
                return (
                  <EvalPointBox
                    value={strength}
                    key={`선택된 강점 ${strength}`}
                    deleteFunction={() => {
                      deleteSelectedBox("strength", strength, strengthWatch);
                    }}
                  />
                );
              })}
          </div>
        </section>

        <section css={sectionContainer}>
          <div css={titleContainer}>
            <strong css={strongTitle}>약점</strong>
            {(isSubmitted || isDirty) && weakWatch.length === 0 && <p css={warningDesc}>최소 1개를 골라주세요</p>}
          </div>
          <div css={buttonContainer}>
            <button
              css={listBox(openedSelectBox === "weakPoint")}
              type="button"
              onClick={() => {
                setOpenedSelectBox("weakPoint");
              }}
            >
              최대 3개
              <FiChevronDown />
            </button>
            {openedSelectBox === "weakPoint" && (
              <SelectBox
                register={register}
                closeFunction={() => {
                  setOpenedSelectBox(null);
                }}
                valueName="weakness"
                watchArr={weakWatch}
                setValue={setValue}
              />
            )}
            {weakWatch.length === 0 && <p css={notSelectedBox}>약점이 무엇인가요?</p>}
            {openedSelectBox === null &&
              weakWatch?.map((weakness) => {
                return (
                  <EvalPointBox
                    value={weakness}
                    key={`선택된 강점 ${weakness}`}
                    deleteFunction={() => {
                      deleteSelectedBox("weakness", weakness, weakWatch);
                    }}
                  />
                );
              })}
          </div>
        </section>

        <section css={sectionContainer}>
          <div css={titleContainer}>
            <strong css={strongTitle}>기타 피드백(선택)</strong>
          </div>
          <textarea
            css={feedBackContainer}
            maxLength={100}
            placeholder="최대 100자"
            {...register("feedback", { maxLength: 100 })}
          />
        </section>

        <section css={pointContainer}>
          <strong css={subTitle}>총점</strong>
          <input type="hidden" {...register("score")} value={specScore} />
          <p css={scoreTitle}>{specScore}</p>
          <StarEvaluation size="M" parentSetState={setSpecScore} />
          <div css={warningBox}>
            {(isSubmitted || isDirty) && scoreWatch === 0 && <p css={warningDesc}>0점 이상 메겨주세요.</p>}
          </div>
        </section>

        <NormalButton variant="filled" text="평가하기" isSubmit wide />
      </form>
    </aside>
  );
};
