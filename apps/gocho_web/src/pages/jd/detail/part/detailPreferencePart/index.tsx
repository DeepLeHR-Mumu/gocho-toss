import { FunctionComponent } from "react";

import { NoDataDesc } from "../common/component/noDataDesc";

import { DetailPreferencePartProps } from "./type";
import { container, containerTitle, flexBetweenBox, subTitle, desc, restPoint } from "../common/style";
import { preferredCertiContainer } from "./style";

export const DetailPreferencePart: FunctionComponent<DetailPreferencePartProps> = ({ freshPosition }) => {
  return (
    <section css={container}>
      <h4 css={containerTitle}>우대 사항</h4>

      <div css={flexBetweenBox}>
        <h5 css={subTitle}>우대 자격증</h5>

        {freshPosition.preferredCertiArr ? (
          <ul css={preferredCertiContainer}>
            {freshPosition.preferredCertiArr.map((certi) => {
              return <li key={`우대자격증_${certi}`}>{certi}</li>;
            })}
          </ul>
        ) : (
          <NoDataDesc />
        )}
      </div>

      <div css={flexBetweenBox}>
        <h5 css={subTitle}>기타 우대 사항</h5>
        <p css={desc}>
          {freshPosition.preferredEtcArr ? (
            freshPosition.preferredEtcArr.map((etc) => {
              return (
                <span css={restPoint} key={`기타우대_${etc}`}>
                  {etc}
                </span>
              );
            })
          ) : (
            <NoDataDesc />
          )}
        </p>
      </div>
    </section>
  );
};
