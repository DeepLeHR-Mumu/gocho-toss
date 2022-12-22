import { FunctionComponent } from "react";
import { FiUsers } from "react-icons/fi";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BiBuildingHouse, BiBus } from "react-icons/bi";

import { cssObj } from "./style";
import { FactoryDetailInfoProps } from "./type";

export const FactoryDetailInfo: FunctionComponent<FactoryDetailInfoProps> = ({ register, totalWorkerNumber }) => (
  <>
    <div css={cssObj.container}>
      <div css={cssObj.box}>
        <p css={cssObj.infoText}>임직원</p>
        <div css={cssObj.infoContainer}>
          <div css={cssObj.iconBox}>
            <FiUsers />
          </div>
          <p css={cssObj.totalWorkerNumber}>{totalWorkerNumber === 0 ? "자동계산" : `${totalWorkerNumber} 명`}</p>
        </div>
      </div>
      <div css={cssObj.box}>
        <p css={cssObj.infoText}>남녀비율</p>
        <div css={cssObj.manWomanContainer}>
          <div css={cssObj.container}>
            <div css={cssObj.iconBox}>
              <AiOutlineMan />
            </div>
            <div css={cssObj.container}>
              <input
                {...register("male_number", { required: true, valueAsNumber: true })}
                placeholder="남성"
                css={cssObj.manWomanInput}
              />
              명
            </div>
          </div>
          <div css={cssObj.container}>
            <div css={cssObj.womanIconBox}>
              <AiOutlineWoman />
            </div>
            <div css={cssObj.container}>
              <input
                {...register("female_number", { required: true, valueAsNumber: true })}
                placeholder="여성"
                css={cssObj.manWomanInput}
              />
              명
            </div>
          </div>
        </div>
      </div>
    </div>
    <div css={cssObj.container}>
      <div css={cssObj.box}>
        <p css={cssObj.infoText}>통근버스</p>
        <div css={cssObj.infoContainer}>
          <div css={cssObj.iconBox}>
            <BiBus />
          </div>
          <div css={cssObj.trueFalseContainer}>
            <label htmlFor="busTrue" css={cssObj.trueFalseContainer}>
              <input type="radio" id="busTrue" {...register("bus_bool")} value="true" />
              <p>있음</p>
            </label>
            <label htmlFor="busFalse" css={cssObj.trueFalseContainer}>
              <input type="radio" id="busFalse" {...register("bus_bool")} value="false" />
              <p>없음</p>
            </label>
            <input {...register("dormitory_etc")} />
          </div>
        </div>
      </div>
      <div css={cssObj.box}>
        <p css={cssObj.infoText}>기숙사</p>
        <div css={cssObj.infoContainer}>
          <div css={cssObj.iconBox}>
            <BiBuildingHouse />
          </div>
          <div css={cssObj.trueFalseContainer}>
            <label htmlFor="dormitoryTrue" css={cssObj.trueFalseContainer}>
              <input type="radio" id="dormitoryTrue" {...register("dormitory_etc")} value="true" />
              <p>있음</p>
            </label>
            <label htmlFor="dormitoryFalse" css={cssObj.trueFalseContainer}>
              <input type="radio" id="dormitoryFalse" {...register("dormitory_etc")} value="false" />
              <p>없음</p>
            </label>
            <input {...register("dormitory_etc")} />
          </div>
        </div>
      </div>
    </div>
  </>
);
