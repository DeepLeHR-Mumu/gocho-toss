import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { COMMUNITY_TIPS_LIST_URL } from "shared-constant/internalURL";

import { cardWrapper, linkArea, cardImageBox, cardInfo, cardTitle, cardDesc } from "./style";
import { LatestCardProps } from "./type";

export const LatestCard: FunctionComponent<LatestCardProps> = ({ tipData }) => {
  return (
    <section css={cardWrapper}>
      <Link href={COMMUNITY_TIPS_LIST_URL} passHref>
        <a css={linkArea}>
          <div css={cardImageBox}>
            <Image src={tipData.thumbnailSrc} alt={tipData.title} layout="fill" objectFit="cover" />
          </div>
          <div css={cardInfo}>
            <h3>
              <strong css={cardTitle}>{tipData.title}</strong>
            </h3>
            <p css={cardDesc}>{tipData.description}</p>
          </div>
        </a>
      </Link>
    </section>
  );
};
