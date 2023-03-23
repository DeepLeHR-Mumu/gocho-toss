import { ChangeEvent, FunctionComponent } from "react";
import { RiAddFill } from "react-icons/ri";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";

import { useFindFactory } from "@/api";

import { ErrorMessage } from "../../component";
import { contractTypeArr, placeTypeArr, rotationArr, taskArr } from "./constant";
import { PositionBoxProps } from "./type";
import { cssObj } from "./style";

export const PositionTaskDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, jobForm }) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = jobForm;
  const openPostCodePopup = useDaumPostcodePopup();

  const { data: factoryData } = useFindFactory({ companyId: watch("company_id") });

  const isConversionDisabled =
    watch("position_arr")[index].contract_type !== "인턴" && watch("position_arr")[index].contract_type !== "계약>정규";

  const mainTask = taskArr.find((task) => watch("position_arr")[index].task_main === task.mainTask);
  const positionError = errors.position_arr && errors.position_arr[index];

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>계약 형태</strong>
            {positionError && positionError.contract_type?.message && (
              <ErrorMessage msg={positionError.contract_type.message} />
            )}
            <div css={cssObj.flexBox}>
              {contractTypeArr.map((contractName) => (
                <SharedRadioButton
                  key={`${contractName}${index}`}
                  registerObj={jobForm.register(`position_arr.${index}.contract_type`, {
                    required: {
                      value: true,
                      message: "계약 형태를 선택해주세요.",
                    },
                  })}
                  value={contractName}
                  id={`${contractName}${index}`}
                >
                  <p css={cssObj.radioDesc}>{contractName}</p>
                </SharedRadioButton>
              ))}
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>전환율</strong>
            <div css={cssObj.flexBox}>
              <label htmlFor={`conversion_rate.${index}`} css={cssObj.conversionLabel}>
                <input
                  id={`conversion_rate.${index}`}
                  type="number"
                  css={isConversionDisabled ? cssObj.disabledConversionInput : cssObj.conversionInput}
                  {...jobForm.register(`position_arr.${index}.conversion_rate`)}
                  disabled={isConversionDisabled}
                />
                <p css={cssObj.conversionDesc}>%</p>
              </label>
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>교대 형태</strong>
            <p css={cssObj.textareaWarning}>교대 형태를 선택하면 기타 교대 형태 값은 제거됩니다.</p>
            <div css={cssObj.flexBox}>
              {rotationArr.map((rotation) => {
                const isChecked = watch(`position_arr.${index}.rotation_arr`)?.includes(rotation.name);
                return (
                  <CheckBoxWithDesc
                    registerObj={{
                      ...jobForm.register(`position_arr.${index}.rotation_arr`, {
                        onChange: () => {
                          setValue(`position_arr.${index}.rotation_etc`, null);
                        },
                      }),
                    }}
                    key={`${rotation.data}`}
                    desc={rotation.name}
                    value={rotation.data}
                    checked={isChecked}
                    id={`${rotation.data}`}
                  />
                );
              })}
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>기타 교대 형태</strong>
            <p css={cssObj.textareaWarning}>기타 교대 형태를 입력하면 선택된 교대 형태는 제거됩니다.</p>
            <div>
              <input
                css={cssObj.inputCSS}
                {...jobForm.register(`position_arr.${index}.rotation_etc`, {
                  onChange: () => {
                    setValue(`position_arr.${index}.rotation_arr`, null);
                  },
                })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>근무지 종류</strong>
            <p css={cssObj.textareaWarning}>근무지 종류는 하나만 선택 가능 합니다</p>
            <div>
              <select
                css={cssObj.selectCSS}
                {...jobForm.register(`position_arr.${index}.place.type`, {
                  required: true,
                })}
                onChange={(onChangeEvent: ChangeEvent<HTMLSelectElement>) => {
                  jobForm.register(`position_arr.${index}.place.type`).onChange(onChangeEvent);
                  setValue(`position_arr.${index}.place.etc`, null);
                  setValue(`position_arr.${index}.place.address_arr`, null);
                  setValue(`position_arr.${index}.place.factory_arr`, null);
                }}
              >
                <option value="" disabled>
                  근무지 종류 선택 ▼
                </option>
                {placeTypeArr.map((placeType) => (
                  <option key={`${id}${placeType}`} value={placeType}>
                    {placeType}
                  </option>
                ))}
              </select>
            </div>
          </li>
          {watch(`position_arr.${index}.place.type`) === "일반" && (
            <>
              <li>
                <strong css={cssObj.requiredTitle}>공장 근무지</strong>
                {!factoryData && <p css={cssObj.textareaWarning}>기업 이름에서 기업을 선택해주세요.</p>}
                <div css={cssObj.flexBox}>
                  {factoryData?.length === 0 ? (
                    <p css={cssObj.warningDesc}>등록된 공장이 없습니다.</p>
                  ) : (
                    factoryData?.map((factoryAddress) => {
                      const isHaveFactory = watch(`position_arr.${index}.place.factory_arr`)?.includes(
                        factoryAddress.id
                      );
                      return (
                        <button
                          type="button"
                          css={isHaveFactory ? cssObj.isHaveFactoryButton : cssObj.factoryButton}
                          onClick={() => {
                            if (watch("position_arr")[index].place.factory_arr?.includes(factoryAddress.id)) {
                              const filterFactoryIdArr = watch("position_arr")[index].place.factory_arr?.filter(
                                (prevFactoryId) => prevFactoryId !== factoryAddress.id
                              );
                              setValue(`position_arr.${index}.place.factory_arr`, filterFactoryIdArr || []);
                              return;
                            }

                            setValue(`position_arr.${index}.place.factory_arr`, [
                              ...(watch("position_arr")[index].place.factory_arr || []),
                              factoryAddress.id,
                            ]);
                          }}
                          key={factoryAddress.id}
                        >
                          <div /> {factoryAddress.name}
                        </button>
                      );
                    })
                  )}
                </div>
              </li>
              <li>
                <strong css={cssObj.requiredTitle}>일반 근무지</strong>
                <button
                  css={cssObj.addAddressButton}
                  type="button"
                  onClick={() => {
                    openPostCodePopup({
                      onComplete: (addressObj: Address) => {
                        setValue(`position_arr.${index}.place.address_arr`, [
                          ...(watch("position_arr")[index].place.address_arr || []),
                          addressObj.address,
                        ]);
                      },
                    });
                  }}
                >
                  <RiAddFill />
                  일반 근무지 추가하기
                </button>
                <div css={cssObj.flexBox}>
                  {watch(`position_arr.${index}.place.address_arr`)?.map((address) => (
                    <button
                      css={cssObj.isHaveFactoryButton}
                      type="button"
                      key={address}
                      aria-label={`${address} 제거하기`}
                      onClick={() => {
                        const filterAddressArr = watch(`position_arr.${index}.place.address_arr`)?.filter(
                          (prevAddress) => prevAddress !== address
                        );
                        setValue(`position_arr.${index}.place.address_arr`, filterAddressArr || []);
                      }}
                    >
                      <div /> {address}
                    </button>
                  ))}
                </div>
              </li>
            </>
          )}
          {watch(`position_arr.${index}.place.type`) !== "일반" && watch(`position_arr.${index}.place.type`) && (
            <li>
              <strong css={cssObj.requiredTitle}>{watch(`position_arr.${index}.place.type`)} 근무지</strong>
              <div css={cssObj.placeBox}>
                <p css={cssObj.textareaWarning}>{watch(`position_arr.${index}.place.type`)}일 경우 입력해주세요.</p>
                <input css={cssObj.inputCSS} {...jobForm.register(`position_arr.${index}.place.etc`)} />
              </div>
            </li>
          )}
        </ul>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>채용 직무</strong>
            <div>
              <strong css={cssObj.subTitle}>1차직무 선택</strong>
              {positionError && positionError.task_main?.message && (
                <ErrorMessage msg={positionError.task_main.message} />
              )}
              <div css={cssObj.flexBox}>
                {taskArr.map((task) => (
                  <SharedRadioButton
                    key={`${id}${task.mainTask}`}
                    registerObj={{
                      ...jobForm.register(`position_arr.${index}.task_main`, {
                        required: {
                          value: true,
                          message: "1차 직무를 선택해주세요",
                        },
                      }),
                    }}
                    value={task.mainTask}
                    id={`${id}${task.mainTask}`}
                  >
                    <p css={cssObj.radioDesc}>{task.mainTask}</p>
                  </SharedRadioButton>
                ))}
              </div>
            </div>
            <div>
              <strong css={cssObj.subTitle}>2차직무 선택</strong>
              <p css={cssObj.textareaWarning}>중복선택이 가능합니다.</p>
              {positionError && positionError.task_sub_arr?.message && (
                <ErrorMessage msg={positionError.task_sub_arr.message} />
              )}
              <div css={cssObj.flexBox}>
                {mainTask?.subTaskArr.map((subTask) => {
                  const isChecked = watch(`position_arr.${index}.task_sub_arr`)?.includes(subTask);
                  return (
                    <CheckBoxWithDesc
                      key={`${id}${subTask}`}
                      registerObj={{
                        ...jobForm.register(`position_arr.${index}.task_sub_arr`, {
                          required: {
                            value: true,
                            message: "2차 직무를 선택해주세요",
                          },
                        }),
                      }}
                      desc={subTask}
                      value={subTask}
                      checked={isChecked}
                      id={subTask}
                    />
                  );
                })}
              </div>
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>세부 직무 내용</strong>
            {positionError && positionError.task_detail_arr?.message && (
              <ErrorMessage msg={positionError.task_detail_arr.message} />
            )}
            <div css={cssObj.textareaBox}>
              <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
              <textarea
                css={cssObj.textarea}
                {...jobForm.register(`position_arr.${index}.task_detail_arr`, {
                  required: {
                    value: true,
                    message: "세부 직무 내용을 작성해주세요",
                  },
                })}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
