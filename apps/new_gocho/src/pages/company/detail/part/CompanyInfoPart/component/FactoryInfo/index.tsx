import { useState } from "react";
import { FiMapPin } from "react-icons/fi";

import { Chip } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { Executives } from "@/components/modal/FactoryInfoModal/component/Executives";
import { Bus } from "@/components/modal/FactoryInfoModal/component/Bus";
import { Dormitory } from "@/components/modal/FactoryInfoModal/component/Dormitory";
import { FactoryDef } from "@/apis/company/type/company";
import { copyToClipboard } from "@/utils";
import { commonCssObj } from "@/pages/company/detail/style";

import { FactoryInfoProps } from "./type";
import { cssObj } from "./style";

export const FactoryInfo = ({ factoryArr }: FactoryInfoProps) => {
  const [selected, setSelected] = useState<FactoryDef | null>(factoryArr[0]);
  const { setToastMessage } = useToast();
  const copyAddress = (address: string) => {
    copyToClipboard(address);
  };

  if (factoryArr.length === 0) {
    return <> </>;
  }

  return (
    <section css={commonCssObj.box}>
      <h3 css={commonCssObj.title}>공장 정보</h3>
      <div css={cssObj.factoryChipWrapper}>
        {factoryArr.map((factory) => (
          <Chip
            key={factory.id}
            size="large"
            color={factory.id === selected?.id ? "fillBlue" : "nonSelected"}
            onClick={() => {
              setSelected(factory);
            }}
          >
            {factory.name}
          </Chip>
        ))}
      </div>
      {selected && (
        <div css={cssObj.factoryInfoWrapper}>
          <div css={cssObj.factorySummary}>
            <div css={cssObj.infoTitleWrapper}>
              <FiMapPin css={cssObj.mapIcon} />
              <h3 css={cssObj.infoTitle}>{selected.name}</h3>
              <span css={cssObj.infoSubtitle}>{selected.product}</span>
            </div>
            <div css={cssObj.summaryWrapper}>
              <Executives maleNumber={selected.male_number} femaleNumber={selected.female_number} />
              <Bus bus={selected.bus.exists} />
              <Dormitory dormitory={selected.dormitory.exists} />
            </div>
          </div>
          <div css={cssObj.factoryDescription}>
            <h3>주소</h3>
            <span>
              {selected.address}
              <button
                type="button"
                css={cssObj.copy}
                onClick={() => {
                  copyAddress(selected.address);
                  setToastMessage("주소가 복사되었습니다!");
                }}
              >
                복사
              </button>
            </span>
            <h3>특이사항</h3>
            {selected.bus.desc && (
              <p>
                <strong>통근버스</strong> {selected.bus.desc}
              </p>
            )}
            {selected.dormitory.desc && (
              <p>
                <strong>기숙사</strong> {selected.dormitory.desc}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
