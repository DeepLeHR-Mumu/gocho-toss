import { FunctionComponent, useState, useEffect, useCallback } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiPlus, FiEdit3, FiChevronDown } from "react-icons/fi";
import { BsDash } from "react-icons/bs";

import { Checkbox, Radio, DropDown } from "shared-ui/deeple-ds";
import { useFactoryArr, useAddFactory, useEditFactory } from "@/apis";
import { commonCssObj } from "@/styles";

import { jdPlaceAddClickEvent } from "@/ga";
import { PositionWorkInfoPartProps } from "./type";
import { SPECIFIC_PLACE_ARR } from "./constant";
import { cssObj } from "./style";
import { FactoryModal } from "@/pages/company/edit/component";

export const PlacePart: FunctionComponent<PositionWorkInfoPartProps> = ({ jdForm }) => {
  const [type, setType] = useState<"normal" | "specific">("normal");
  const [modal, setModal] = useState<{ state: boolean; modifyIndex: number | null }>({
    state: false,
    modifyIndex: null,
  });
  const closeFactoryModal = () => {
    setModal({ state: false, modifyIndex: null });
  };

  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
    register,
  } = jdForm;
  const selectedNormalPlaceArr = watch("detail.place.data").filter(
    (place): place is { type: "일반"; location: { x: number; y: number; address: string } } => place.type === "일반"
  );
  const selectedFactoryArr = watch("detail.place.data").filter(
    (place): place is { type: "공장"; factory: { id: number; name: string; address: string } } => place.type === "공장"
  );
  const clearPlaceError = useCallback(() => clearErrors("detail.place"), [clearErrors]);

  const openPostCodePopup = useDaumPostcodePopup();

  const { data: factoryDataObj } = useFactoryArr({ size: 100 });
  const isFactoryExist = factoryDataObj && factoryDataObj.factoryDataArr.length !== 0;

  const { mutate: addFactoryMutate } = useAddFactory();
  const { mutate: editFactoryMutate } = useEditFactory();

  const addFactory = (targetFactory: { id: number; name: string; address: string }) => {
    const newFactoryArr = selectedFactoryArr.concat({ type: "공장", factory: targetFactory });
    const newPlaceArr = [...selectedNormalPlaceArr, ...newFactoryArr];

    setValue("detail.place.data", newPlaceArr);
    clearPlaceError();
  };

  const removeFactory = (targetFactoryId: number) => {
    const newFactoryArr = selectedFactoryArr.filter(
      (place) => place.type === "공장" && place.factory.id !== targetFactoryId
    );
    const newPlaceArr = [...selectedNormalPlaceArr, ...newFactoryArr];

    setValue("detail.place.data", newPlaceArr);
  };

  const changeFactory = (checked: boolean, targetFactory: { id: number; name: string; address: string }) => {
    if (checked) {
      addFactory(targetFactory);
      return;
    }
    removeFactory(targetFactory.id);
  };

  const addNormalPlace = (address: string, x: number, y: number) => {
    const newNormalPlace = selectedNormalPlaceArr.concat({ type: "일반", location: { address, x, y } });
    const newPlaceArr = [...newNormalPlace, ...selectedFactoryArr];

    setValue("detail.place.data", newPlaceArr);
    clearPlaceError();
  };

  const removeNormalPlace = (index: number) => {
    const newNormalPlace = [...selectedNormalPlaceArr];
    newNormalPlace.splice(index, 1);

    const newPlaceArr = [...newNormalPlace, ...selectedFactoryArr];

    setValue("detail.place.data", newPlaceArr);
  };

  useEffect(() => {
    if (watch("detail.place.is_undefined")) clearPlaceError();
  }, [watch, clearPlaceError]);

  const onClickAddress = () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    jdPlaceAddClickEvent();
    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        const newAddress = addressObj.address;
        window.kakao.maps.load(() => {
          const geocoder = new window.kakao.maps.services.Geocoder();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geocoder.addressSearch(newAddress, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const { x, y } = result[0];
              const defaultCoordinate = { x: 33.4506913, y: 126.5706148 }; // 카카오 본사
              addNormalPlace(newAddress, x || defaultCoordinate.x, y || defaultCoordinate.y);
            }
            document.head.removeChild(mapScript);
          });
        });
      },
    });
  };

  return (
    <>
      <div css={commonCssObj.partContainer}>
        <div css={cssObj.titleWrapper}>
          <strong css={cssObj.title}>근무지</strong>
          <div css={cssObj.checkboxWrapper(false)}>
            <Checkbox
              {...register("detail.place.is_undefined")}
              onChange={(e) => {
                setValue("detail.place.is_undefined", e.target.checked);
                setValue("detail.place.data", []);
                setValue("detail.place.etc", null);
              }}
            />
            <span>채용 후 결정</span>
          </div>
        </div>
        {!watch("detail.place.is_undefined") && (
          <div css={cssObj.contentsWrapper}>
            <div css={cssObj.radioWrapper}>
              <div>
                <Radio
                  checked={type === "normal"}
                  onClick={() => {
                    setType("normal");
                    setValue("detail.place.etc", null);
                    clearPlaceError();
                  }}
                />
                <span>일반</span>
              </div>
              <div>
                <Radio
                  checked={type === "specific"}
                  onClick={() => {
                    setType("specific");
                    setValue("detail.place.data", []);
                    clearPlaceError();
                  }}
                />
                <span>특수</span>
              </div>
              <span css={cssObj.errorMessage}>{errors.detail?.place?.message}</span>
            </div>
            {type === "normal" && (
              <>
                <div css={cssObj.buttonGroup}>
                  <button type="button" onClick={onClickAddress} css={cssObj.addAddressButton}>
                    <FiPlus /> 주소 추가
                  </button>
                  <button
                    type="button"
                    css={cssObj.addFactoryButton}
                    onClick={() => setModal({ state: true, modifyIndex: null })}
                  >
                    <FiPlus /> 공장 등록
                  </button>
                </div>
                {(isFactoryExist || watch("detail.place.data").length !== 0) && (
                  <div css={cssObj.factoryListWrapper}>
                    {watch("detail.place.data")
                      .filter((place) => place.type === "일반")
                      .map((normalPlace, index) => {
                        if (normalPlace.type === "일반") {
                          return (
                            <div css={cssObj.place(true)} key={`${normalPlace.type}${normalPlace.location.address}`}>
                              <span>{normalPlace.location?.address}</span>
                              <button type="button" css={cssObj.minusButton} onClick={() => removeNormalPlace(index)}>
                                <BsDash />
                              </button>
                            </div>
                          );
                        }
                        return undefined;
                      })}
                    {factoryDataObj?.factoryDataArr.map((factory, index) => {
                      const isSelectedFactory =
                        selectedFactoryArr.findIndex((place) => place.factory.id === factory.id) !== -1;

                      return (
                        <div css={cssObj.place(isSelectedFactory)} key={factory.id}>
                          <Checkbox
                            checked={isSelectedFactory}
                            onChange={(e) => {
                              changeFactory(e.target.checked, {
                                id: factory.id,
                                name: factory.name,
                                address: factory.address,
                              });
                            }}
                          />
                          <h2>{factory.name}</h2>
                          <span>{factory.address}</span>
                          <button
                            type="button"
                            css={cssObj.editButton}
                            onClick={() => setModal({ state: true, modifyIndex: index })}
                          >
                            <FiEdit3 />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            {type === "specific" && (
              <div>
                <DropDown
                  customTitle={
                    <button type="button" css={commonCssObj.select(12.5, false)}>
                      {watch("detail.place.etc") ? (
                        <span css={cssObj.specific}>{watch("detail.place.etc")}</span>
                      ) : (
                        <span css={cssObj.placeholder}>선택</span>
                      )}
                      <FiChevronDown />
                    </button>
                  }
                  menu={{
                    width: 200,
                    options: SPECIFIC_PLACE_ARR.map((specificPlace) => ({
                      content: specificPlace,
                      onClick: () => setValue("detail.place.etc", specificPlace),
                    })),
                  }}
                  menuConfig={{ closeAfterClickEvent: true }}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {modal.state && (
        <FactoryModal
          factory={(() => {
            if (modal.modifyIndex === null || !factoryDataObj) {
              return null;
            }
            const { name, product, address, maleNumber, femaleNumber, bus, dormitory } =
              factoryDataObj.factoryDataArr[modal.modifyIndex];
            return {
              factory_name: name,
              product,
              address,
              male_number: maleNumber,
              female_number: femaleNumber,
              bus_bool: bus.exists,
              bus_etc: bus.desc,
              dormitory_bool: dormitory.exists,
              dormitory_etc: dormitory.desc,
            };
          })()}
          addFactoryArr={(newFactory) => {
            addFactoryMutate(newFactory);
            closeFactoryModal();
          }}
          modifyFactoryArr={(newFactory) => {
            if (factoryDataObj && modal.modifyIndex !== null) {
              editFactoryMutate({ ...newFactory, id: factoryDataObj.factoryDataArr[modal.modifyIndex].id });
            }
          }}
          closeModal={closeFactoryModal}
        />
      )}
    </>
  );
};
