import { FunctionComponent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";

import { StarEvaluation } from "@component/common/molecule/starEvaluation";
import { useEvalSpec } from "shared-api/spec/useEvalSpec";
import { NormalButton } from "shared-ui/common/atom/button";

import { SelectBox } from "./component/selectBox";
import {
  title,
  wrapper,
  sectionContainer,
  feedBackContainer,
  subTitle,
  pointCSS,
  pointContainer,
  notSelectedBox,
  listBox,
  hookingMentSection,
  mySpecMent,
  disabledButton,
  titleContainer,
} from "./style";
import { DeleteSelectedBoxDef, EvaluationValues, EvaluationPartProps } from "./type";
import { EvalPointBox } from "./component/evalPointBox";

export const EvaluationPart: FunctionComponent<EvaluationPartProps> = ({ isMine, didEval, evalCount }) => {
  const router = useRouter();
  const { specId } = router.query;
  const [specScore, setSpecScore] = useState(0);
  const [isStrongSelectBox, setIsStrongSelectBox] = useState(false);
  const [isWeakSelectBox, setIsWeakSelectBox] = useState(false);

  const { mutate } = useEvalSpec();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitted, isDirty, dirtyFields },
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
    // eslint-disable-next-line no-console
    console.log(dirtyFields);
    // eslint-disable-next-line no-console
    if (isDirty) console.log(submitData);
    // eslint-disable-next-line no-useless-return
    if (submitData.strength.length === 0 || submitData.weakness.length === 0 || submitData.score === 0) {
      return;
    }
    mutate(
      {
        specId: Number(specId),
        specData: submitData,
      },
      {
        onSuccess: (response) => {
          if (response.status === 201) {
            // eslint-disable-next-line no-console
            console.log("등록완료");
          }
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
        <h2 css={title}>스펙 평가하기</h2>
        <p css={subTitle}>내가 평가한 횟수 : {evalCount}</p>
        <p css={mySpecMent}>자신의 스펙은 평가할 수 없습니다.</p>
        <div css={disabledButton}>평가하기</div>
      </aside>
    );
  }
  if (didEval) {
    return (
      <aside css={wrapper}>
        <h2 css={title}>스펙 평가하기</h2>
        <p css={subTitle}>내가 평가한 횟수 : {evalCount}</p>
        <div css={hookingMentSection}>
          <p>데이터 뒤에 사람있어요!</p>
          <p>평가는 차갑게, 가슴은 따스하게</p>
          <p>부탁드립니다.</p>
        </div>
        <p css={mySpecMent}>이미 평가한 스펙입니다.</p>
        <div css={disabledButton}>평가하기</div>
      </aside>
    );
  }
  return (
    <aside css={wrapper}>
      <h2 css={title}>스펙 평가하기</h2>
      <p css={subTitle}>내가 평가한 횟수 : {evalCount}</p>
      {evalCount < 5 && (
        <div css={hookingMentSection}>
          <p>평가하기를 5번만 하면 </p>
          <p>내 스펙 평가내역을 볼 수 있어요! 화이팅!</p>
        </div>
      )}

      <form onSubmit={handleSubmit(submitEvaluation)}>
        <section css={sectionContainer}>
          <div css={titleContainer}>
            <h3>강점</h3>
            {(isSubmitted || isDirty) && strengthWatch.length === 0 && <span>최소 1개를 골라주세요</span>}
          </div>
          <div>
            <div css={listBox(isStrongSelectBox)}>
              최대 3개
              <button
                type="button"
                onClick={() => {
                  return setIsStrongSelectBox(true);
                }}
              >
                <FiChevronDown />
              </button>
            </div>
            {isStrongSelectBox && (
              <SelectBox
                register={register}
                closeFunction={() => {
                  setIsStrongSelectBox(false);
                }}
                valueName="strength"
                watchArr={strengthWatch}
                setValue={setValue}
              />
            )}
            <div css={notSelectedBox}>
              <p>강점이 무엇인가요?</p>
            </div>
            {!isStrongSelectBox &&
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
            <h3>약점</h3>
            {(isSubmitted || isDirty) && weakWatch.length === 0 && <span>최소 1개를 골라주세요</span>}
          </div>
          <div>
            <div css={listBox(isWeakSelectBox)}>
              최대 3개
              <button
                type="button"
                onClick={() => {
                  return setIsWeakSelectBox(true);
                }}
              >
                <FiChevronDown />
              </button>
            </div>
            {isWeakSelectBox && (
              <SelectBox
                register={register}
                closeFunction={() => {
                  setIsWeakSelectBox(false);
                }}
                valueName="weakness"
                watchArr={weakWatch}
                setValue={setValue}
              />
            )}
            <div css={notSelectedBox}>
              <p>약점이 무엇인가요?</p>
            </div>
            {!isWeakSelectBox &&
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
            <h3>기타 피드백(선택)</h3>
          </div>
          <div css={feedBackContainer}>
            <textarea maxLength={100} {...register("feedback", { maxLength: 100 })} />
          </div>
        </section>
        <section css={pointContainer}>
          {(isSubmitted || isDirty) && scoreWatch === 0 && <span>0점 이상 메겨주세요.</span>}
          <h3 css={subTitle}>총점</h3>
          <input type="hidden" {...register("score")} value={specScore} />
          <p css={pointCSS}>{specScore}</p>
          <StarEvaluation size="M" parentSetState={setSpecScore} />
        </section>
        <NormalButton variant="filled" text="평가하기" isSubmit wide />
      </form>
    </aside>
  );
};
