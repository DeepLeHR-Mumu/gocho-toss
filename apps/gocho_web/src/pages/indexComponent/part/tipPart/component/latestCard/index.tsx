import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { COMMUNITY_TIPS_LIST_URL } from "@constant/internalURL";

import {
  cardWrapper,
  linkArea,
  cardImageBox,
  cardInfo,
  cardTitle,
  cardDesc,
} from "./style";
import { LatestCardProps } from "./type";

export const LatestCard: FunctionComponent<LatestCardProps> = ({ tipData }) => {
  return (
    <section css={cardWrapper}>
      <Link href={COMMUNITY_TIPS_LIST_URL} passHref>
        <a css={linkArea}>
          <div css={cardImageBox}>
            <Image
              src={tipData.thumbnailSrc}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div css={cardInfo}>
            <p>
              <strong css={cardTitle}>
                {tipData.title.split("-").map((line) => {
                  return <span key={line}>{line}</span>;
                })}
              </strong>
            </p>
            <p css={cardDesc}>{tipData.description}</p>
          </div>
        </a>
      </Link>
    </section>
  );
};
