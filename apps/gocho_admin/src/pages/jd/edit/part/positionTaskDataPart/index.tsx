import { ChangeEvent, FunctionComponent } from "react";
import { RiAddFill } from "react-icons/ri";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { SharedRadioButton } from "shared-ui/common/sharedRadioButton";
import { CheckBoxWithDesc } from "shared-ui/common/checkbox_desc";
import { useFindFactory } from "@/api";

import { ErrorMessage } from "../../component";
import { contractTypeArr, placeTypeArr, rotationArr, taskArr } from "./constant";
import { PositionBoxProps } from "./type";
import { cssObj } from "./style";

export const PositionTaskDataPart: FunctionComponent<PositionBoxProps> = ({ jobForm }) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = jobForm;
  const openPostCodePopup = useDaumPostcodePopup();

  const { data: factoryData } = useFindFactory({ companyId: watch("company_id") });

  const onClickAddress = () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        const newAddress = addressObj.address;
        window.kakao.maps.load(() => {
          const geocoder = new window.kakao.maps.services.Geocoder();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geocoder.addressSearch(newAddress, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const { x, y } = result[0];
              const defaultCoordinate = { x: 126.5706148, y: 33.4506913 }; // 카카오 본사
              setValue("detail.place.data", [
                ...(watch("detail.place.data") || []),
                {
                  type: "일반",
                  location: { address: addressObj.address, x: x || defaultCoordinate.x, y: y || defaultCoordinate.y },
                },
              ]);
            }
            document.head.removeChild(mapScript);
          });
        });
      },
    });
  };

  const isConversionDisabled =
    watch("detail.contract_type") !== "인턴" && watch("detail.contract_type") !== "계약>정규";
  const mainTask = taskArr.find((task) => watch("detail.task_main") === task.mainTask);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>계약 형태</strong>
            {errors && errors.detail?.contract_type?.message && (
              <ErrorMessage msg={errors.detail?.contract_type.message} />
            )}
            <div css={cssObj.flexBox}>
              {contractTypeArr.map((contractName) => (
                <SharedRadioButton
                  key={contractName}
                  registerObj={jobForm.register("detail.contract_type", {
                    required: "계약 형태를 선택해주세요.",
                  })}
                  value={contractName}
                  id={contractName}
                >
                  <p css={cssObj.radioDesc}>{contractName}</p>
                </SharedRadioButton>
              ))}
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>전환율</strong>
            <div css={cssObj.flexBox}>
              <label htmlFor="conversion_rate" css={cssObj.conversionLabel}>
                <input
                  id="conversion_rate"
                  type="number"
                  css={isConversionDisabled ? cssObj.disabledConversionInput : cssObj.conversionInput}
                  {...jobForm.register("detail.conversion_rate")}
                  disabled={isConversionDisabled}
                />
                <p css={cssObj.conversionDesc}>%</p>
              </label>
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>교대 형태</strong>
            {errors?.detail?.shift?.message && <ErrorMessage msg={errors.detail?.shift.message} />}
            <div css={cssObj.flexBox}>
              {rotationArr.map((rotation) => {
                const isChecked = watch("detail.shift")?.includes(rotation.name) || false;
                return (
                  <CheckBoxWithDesc
                    registerObj={{
                      ...jobForm.register("detail.shift", {
                        required: "교대 형태를 선택해주세요.",
                      }),
                    }}
                    key={rotation.data}
                    desc={rotation.name}
                    value={rotation.data}
                    checked={isChecked}
                    id={rotation.data}
                  />
                );
              })}
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>근무지 종류</strong>
            <p css={cssObj.textareaWarning}>근무지 종류는 하나만 선택 가능 합니다</p>
            <div>
              <select
                css={cssObj.selectCSS}
                onChange={(onChangeEvent: ChangeEvent<HTMLSelectElement>) => {
                  if (onChangeEvent.target.value === "일반") {
                    setValue("detail.place.etc", null);
                  } else if (onChangeEvent.target.value === "순환" || onChangeEvent.target.value === "해외") {
                    setValue("detail.place.etc", onChangeEvent.target.value);
                    setValue("detail.place.data", []);
                  }
                }}
              >
                <option value="" disabled>
                  근무지 종류 선택 ▼
                </option>
                {placeTypeArr.map((placeType) => (
                  <option key={placeType} value={placeType}>
                    {placeType}
                  </option>
                ))}
              </select>
            </div>
          </li>
          {watch("detail.place.etc") === null && (
            <>
              <li>
                <strong css={cssObj.requiredTitle}>공장 근무지</strong>
                {!factoryData && <p css={cssObj.textareaWarning}>기업 이름에서 기업을 선택해주세요.</p>}
                <div css={cssObj.flexBox}>
                  {factoryData?.length === 0 ? (
                    <p css={cssObj.warningDesc}>등록된 공장이 없습니다.</p>
                  ) : (
                    factoryData?.map((factory) => {
                      const isHaveFactory = watch("detail.place.data")?.some(
                        (prevFactory) => prevFactory.type === "공장" && prevFactory.factory_id === factory.id
                      );
                      return (
                        <button
                          type="button"
                          css={isHaveFactory ? cssObj.isHaveFactoryButton : cssObj.factoryButton}
                          onClick={() => {
                            const filterFactoryIdArr = watch("detail.place.data")?.filter(
                              (prevFactory) => prevFactory.type === "공장" && prevFactory.factory_id !== factory.id
                            );

                            if (isHaveFactory) {
                              setValue("detail.place.data", filterFactoryIdArr || []);
                            } else {
                              setValue("detail.place.data", [
                                ...(watch("detail.place.data") || []),
                                { type: "공장", factory_id: factory.id },
                              ]);
                            }
                          }}
                          key={factory.id}
                        >
                          <div /> {factory.name}
                          <br />({factory.address})
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
                    onClickAddress();
                  }}
                >
                  <RiAddFill />
                  일반 근무지 추가하기
                </button>
                <div css={cssObj.flexBox}>
                  {watch("detail.place.data")?.map((address) => {
                    if (address.type === "일반") {
                      return (
                        <button
                          css={cssObj.isHaveFactoryButton}
                          type="button"
                          key={address.location.address}
                          aria-label={`${address} 제거하기`}
                          onClick={() => {
                            const filterAddressArr = watch("detail.place.data")?.filter(
                              (prevAddress) => prevAddress !== address
                            );
                            setValue("detail.place.data", filterAddressArr || []);
                          }}
                        >
                          <div />
                          {address.location.address}
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </li>
            </>
          )}
        </ul>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>채용 직무</strong>
            <div>
              <strong css={cssObj.subTitle}>1차직무 선택</strong>
              {errors && errors.detail?.task_main?.message && <ErrorMessage msg={errors.detail?.task_main.message} />}
              <div css={cssObj.flexBox}>
                {taskArr.map((task) => (
                  <SharedRadioButton
                    key={task.mainTask}
                    registerObj={{
                      ...jobForm.register("detail.task_main", {
                        required: "1차 직무를 선택해주세요.",
                      }),
                    }}
                    value={task.mainTask}
                    id={task.mainTask}
                  >
                    <p css={cssObj.radioDesc}>{task.mainTask}</p>
                  </SharedRadioButton>
                ))}
              </div>
            </div>
            <div>
              <strong css={cssObj.subTitle}>2차직무 선택</strong>
              <p css={cssObj.textareaWarning}>중복선택이 가능합니다.</p>
              {errors.detail?.task_sub?.message && <ErrorMessage msg={errors.detail?.task_sub.message} />}
              <div css={cssObj.flexBox}>
                {mainTask?.subTaskArr.map((subTask) => {
                  const isChecked = watch("detail.task_sub")?.includes(subTask) || false;
                  return (
                    <CheckBoxWithDesc
                      key={subTask}
                      registerObj={{
                        ...jobForm.register("detail.task_sub", {
                          required: "2차 직무를 선택해주세요.",
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
            {errors.detail?.task_description?.message && <ErrorMessage msg={errors.detail?.task_description.message} />}
            <div css={cssObj.textareaBox}>
              <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
              <textarea
                css={cssObj.textarea}
                {...jobForm.register("detail.task_description", {
                  required: "세부 직무 내용을 작성해주세요.",
                })}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
