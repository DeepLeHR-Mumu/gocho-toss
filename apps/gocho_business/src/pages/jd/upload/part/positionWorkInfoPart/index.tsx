import { FunctionComponent, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiChevronUp, FiMinus, FiX, FiRotateCw, FiExternalLink } from "react-icons/fi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { useFieldArray } from "react-hook-form";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { useFactoryArr } from "@/apis/factory/useFactoryArr";
import { factoryArrKeyObj } from "@/apis/factory/useFactoryArr/type";
import { INTERNAL_URL, POSTCODE_SCRIPT_URL } from "@/constants/url";

import { PositionWorkInfoPartProps } from "./type";
import { rotationArr, placeTypeArr, certificateArr } from "./constant";
import { cssObj } from "./style";

export const PositionWorkInfoPart: FunctionComponent<PositionWorkInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  control,
}) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);
  const [isFactoryListOpen, setIsFactoryListOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const openPostCodePopup = useDaumPostcodePopup(POSTCODE_SCRIPT_URL);

  const { data: factoryDataArr } = useFactoryArr();

  const payArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.pay_arr`,
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.preferred_etc_arr`,
  });

  const rotationClickHandler = (rotation: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].rotation_arr.includes(rotation);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].rotation_arr.filter((element) => element !== rotation),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].rotation_arr,
        rotation,
      ]);
    }
  };

  const factoryClickHandler = (factory: number) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].place.factory_arr?.includes(factory);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.place.factory_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].place.factory_arr?.filter((element) => element !== factory) ||
          []),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.place.factory_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].place.factory_arr || []),
        factory,
      ]);
    }
  };

  const certiClickHandler = (certi: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.filter((element) => element !== certi) ||
          []),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr || []),
        certi,
      ]);
    }
  };

  return (
    <>
      <div css={cssObj.container}>
        <p>교대 형태</p>
        <div css={cssObj.optionContainer}>
          <button
            css={cssObj.input(20)}
            type="button"
            onClick={() => {
              setIsRotationOpen((prev) => !prev);
            }}
          >
            교대형태 선택
            <FiChevronUp />
          </button>
          <div css={cssObj.optionList(isRotationOpen)}>
            {rotationArr.map((rotation) => (
              <button
                type="button"
                css={cssObj.option}
                key={`${id}${rotation.data}`}
                value={rotation.data}
                onClick={() => {
                  rotationClickHandler(rotation.data);
                }}
              >
                <CheckBox
                  isChecked={
                    jobForm.watch("position_arr")[positionIndex].rotation_arr?.includes(rotation.data) || false
                  }
                />
                {rotation.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>근무지 종류</p>
        <div css={cssObj.labelContainer}>
          {placeTypeArr.map((placeType) => (
            // TODO: 밖에 padding을 씌워서 가장자리는 클릭이 되지 않음
            <div
              key={`${placeType.name}${positionIndex}`}
              css={cssObj.placeTypeLabel(placeType.data === jobForm.watch("position_arr")[positionIndex].place.type)}
            >
              <SharedRadioButton
                value={placeType.data}
                id={`${placeType.name}${positionIndex}`}
                registerObj={jobForm.register(`position_arr.${positionIndex}.place.type`)}
              >
                <p css={cssObj.placeTypeLabelData}>
                  {placeType.name}
                  <span css={cssObj.placeTypeLabelIcon}>
                    <placeType.icon />
                  </span>
                </p>
              </SharedRadioButton>
            </div>
          ))}
          <p css={cssObj.desc}>
            <AiOutlineExclamationCircle /> 근무지 종류는 하나만 선택 가능 합니다
          </p>
        </div>
        <div css={cssObj.placeInputContainer}>
          {jobForm.watch("position_arr")[positionIndex].place.type === "일반" && (
            // TODO: 현재는 등록 대기중인 공장도 전부 출력되는데 이게 맞나??
            <>
              <p>공장 근무지</p>
              <div css={cssObj.factoryInputWrapper}>
                <div css={cssObj.optionContainer}>
                  <button
                    css={cssObj.input(20)}
                    type="button"
                    onClick={() => {
                      setIsFactoryListOpen((prev) => !prev);
                    }}
                  >
                    해당하는 공장을 모두 선택해주세요
                    <FiChevronUp />
                  </button>
                  <div css={cssObj.optionList(isFactoryListOpen)}>
                    {factoryDataArr?.map((factory) => (
                      <button
                        type="button"
                        css={cssObj.option}
                        key={`${factory.id}${id}`}
                        value={factory.id}
                        onClick={() => {
                          factoryClickHandler(factory.id);
                        }}
                      >
                        <CheckBox
                          isChecked={
                            jobForm.watch("position_arr")[positionIndex].place.factory_arr?.includes(factory.id) ||
                            false
                          }
                        />
                        {factory.name}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    queryClient.invalidateQueries(factoryArrKeyObj.all);
                  }}
                >
                  <FiRotateCw /> 공장 목록 새로고침
                </button>
                <p css={cssObj.uploadFactoryDesc}>잠깐, 미등록 공장이 있나요</p>
                <Link href={INTERNAL_URL.FACTORY_LIST} passHref>
                  <a css={cssObj.uploadFactoryButton} target="_blank">
                    공장 등록하러 가기 <FiExternalLink />
                  </a>
                </Link>
              </div>
              <div css={cssObj.placeContainer}>
                {jobForm.watch("position_arr")[positionIndex].place.factory_arr?.map((factory) => (
                  <div key={`${factory}${id}`} css={cssObj.factoryBox}>
                    <TbBuildingFactory2 />
                    {factory}
                    <button
                      type="button"
                      css={cssObj.smallDeleteButton}
                      onClick={() => {
                        jobForm.setValue(`position_arr.${positionIndex}.place.factory_arr`, [
                          ...(jobForm
                            .watch("position_arr")
                            [positionIndex].place.factory_arr?.filter((element) => element !== factory) || []),
                        ]);
                      }}
                    >
                      <FiX />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  openPostCodePopup({
                    onComplete: (addressObj: Address) => {
                      jobForm.setValue(`position_arr.${positionIndex}.place.address_arr`, [
                        ...(jobForm.watch("position_arr")[positionIndex].place.address_arr || []),
                        addressObj.address,
                      ]);
                    },
                  })
                }
              >
                + 공장 외 일반 근무지 추가하기
              </button>
              <div css={cssObj.placeContainer}>
                {jobForm.watch("position_arr")[positionIndex].place.address_arr?.map((address) => (
                  <div key={`${address}${id}`}>
                    <span>일반 근무지</span>
                    <div css={cssObj.addressBox}>
                      {address}
                      <button
                        type="button"
                        css={cssObj.deleteInputButton}
                        onClick={() => {
                          jobForm.setValue(`position_arr.${positionIndex}.place.address_arr`, [
                            ...(jobForm
                              .watch("position_arr")
                              [positionIndex].place.address_arr?.filter((element) => element !== address) || []),
                          ]);
                        }}
                      >
                        <FiMinus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {jobForm.watch("position_arr")[positionIndex].place.type === "해외" && (
            <>
              <p>해외 근무지</p>
              <input
                css={cssObj.input(47)}
                placeholder="근무지를 작성해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.place.etc`, { required: true })}
              />
            </>
          )}
          {jobForm.watch("position_arr")[positionIndex].place.type === "기타" && (
            <>
              <p>기타 근무지</p>
              <input
                css={cssObj.input(47)}
                placeholder="전국 순환, 입사 후 근무지 배정 등 특수 근무지를 작성해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.place.etc`, { required: true })}
              />
            </>
          )}
        </div>
      </div>
      <div css={cssObj.container}>
        <p>급여</p>
        <div css={cssObj.inputContainer}>
          {payArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`payArr${item.id}`} htmlFor={`payArr${item.id}`}>
              <input
                id={`payArr${item.id}`}
                css={cssObj.inputWithButton}
                placeholder="급여 정보"
                {...jobForm.register(`position_arr.${positionIndex}.pay_arr.${index}.value`)}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  payArr.remove(positionIndex);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              payArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>우대 자격증</p>
        <div css={cssObj.optionContainer}>
          <input
            css={cssObj.input(20)}
            type="text"
            placeholder="자격증 검색"
            onChange={(e) => {
              setCertiSearchWord(e.target.value);
            }}
          />
          <div css={cssObj.optionList(certiSearchWord !== "")}>
            {certificateArr
              .filter((prevCerti) => prevCerti.includes(certiSearchWord))
              .map((certi) => (
                <button
                  type="button"
                  css={cssObj.option}
                  key={`${id}${certi}`}
                  value={certi}
                  onClick={() => {
                    certiClickHandler(certi);
                  }}
                >
                  <CheckBox
                    isChecked={
                      jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi) || false
                    }
                  />
                  {certi}
                </button>
              ))}
          </div>
        </div>

        <div css={cssObj.selectedCertiContainer}>
          {jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.map((certi) => (
            <div key={`${id}${certi}`} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
                    ...(jobForm
                      .watch("position_arr")
                      [positionIndex].preferred_certi_arr?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div css={cssObj.container}>
        <p>기타 우대 사항(선택)</p>
        <div css={cssObj.inputContainer}>
          {preferredEtcArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`preferredEtcArr${item.id}`} htmlFor={`preferredEtcArr${item.id}`}>
              <input
                id={`preferredEtcArr${item.id}`}
                css={cssObj.inputWithButton}
                placeholder="기타 우대 사항"
                {...jobForm.register(`position_arr.${positionIndex}.preferred_etc_arr.${index}.value`)}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  preferredEtcArr.remove(positionIndex);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              preferredEtcArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
    </>
  );
};
