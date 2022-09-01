import { FunctionComponent, useEffect } from "react";
import Image from "next/image";

import nozoTrue from "@public/images/global/companyDetail/nozo_true_icon.svg";
import nozoFalse from "@public/images/global/companyDetail/nozo_false_icon.svg";

import { BasicInfoPartProps } from "./type";
import {
  infoContainer,
  flexBox,
  infoTitle,
  info,
  nozoImage,
  mapView,
} from "./style";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({
  companyData,
}) => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=4cd1e44b1f4020047498f82bf6ac02c1&libraries=services&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.365264512305174,
            127.10676860117488
          ),
          level: 7,
        };
        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          companyData.address,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (result: any, status: any) => {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infoWindow = new window.kakao.maps.InfoWindow({
                content: `<div style='height: 3rem; padding: 0.5rem; text-align: center; font-size: 0.875rem;'>${companyData.address}</div>`,
              });
              infoWindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => {
      return mapScript.removeEventListener("load", onLoadKakaoMap);
    };
  }, []);

  return (
    <div css={infoContainer}>
      <div>
        <div css={flexBox}>
          <h4 css={infoTitle}>업종</h4>
          <div css={info}>{companyData.industry}</div>
        </div>
        <div css={flexBox}>
          <h4 css={infoTitle}>기업형태</h4>
          <div css={info}>{companyData.size}</div>
        </div>
        <div css={flexBox}>
          <h4 css={infoTitle}>사원수</h4>
          <div css={info}>{companyData.employeeNumber}</div>
        </div>
        <div css={flexBox}>
          <h4 css={infoTitle}>기업 한줄소개</h4>
          <div css={info}>{companyData.intro}</div>
        </div>
        <div css={flexBox}>
          <h4 css={infoTitle}>기업 주소</h4>
          <div css={info}>{companyData.address}</div>
        </div>
        <div css={flexBox}>
          <h4 css={infoTitle}>노조여부</h4>
          <div css={info}>
            {companyData.nozo.exists ? "노조 있음" : "노조 없음"}
            <div css={nozoImage}>
              <Image src={companyData.nozo.exists ? nozoTrue : nozoFalse} />
            </div>
          </div>
        </div>
      </div>
      <div id="map" css={mapView} />
    </div>
  );
};
