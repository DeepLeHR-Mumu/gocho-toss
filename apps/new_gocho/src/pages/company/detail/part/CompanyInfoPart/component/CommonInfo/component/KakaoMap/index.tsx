import { FunctionComponent, useEffect } from "react";

import { KakaoMapProps } from "./type";
import { cssObj } from "./style";

export const KakaoMap: FunctionComponent<KakaoMapProps> = ({ address }) => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.Kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.Kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 6,
        };
        const map = new window.Kakao.maps.Map(container, options);
        const geocoder = new window.Kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          address,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (result: any, status: any) => {
            // 정상적으로 검색이 완료됐으면
            if (status === window.Kakao.maps.services.Status.OK) {
              const coords = new window.Kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.Kakao.maps.Marker({
                map,
                position: coords,
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infoWindow = new window.Kakao.maps.InfoWindow({
                content: `<div style='height: 3rem; padding: 0.5rem; text-align: center; font-size: 0.875rem;'>${address}</div>`,
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

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [address]);

  return <div css={cssObj.mapBox} id="map" />;
};
