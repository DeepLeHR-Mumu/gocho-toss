import Image from "next/image";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useCompanyDetail } from "shared-api/company";

import {
  wrapper,
  logoBox,
  container,
  bookmarkButton,
  iconBox,
  bookmarkText,
  bookmarkCount,
  viewCountContainer,
  viewIconBox,
  viewText,
  viewCount,
  companyName,
  industryText,
} from "./style";

export const InfoBox: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  if (!isSuccess || isLoading) {
    return <>Loading TODO</>;
  }

  return (
    <section css={wrapper}>
      <div css={container}>
        <div css={logoBox}>
          <Image src={companyDetailData.data.logoUrl} layout="fill" objectFit="contain" />
        </div>
        <div>
          <button type="button" css={bookmarkButton}>
            <div css={iconBox}>
              <BsFillBookmarkFill />
            </div>
            <p css={bookmarkText}>
              기업 북마크
              <span css={bookmarkCount}>{companyDetailData.data.bookmark}</span>
            </p>
          </button>
          <div css={viewCountContainer}>
            <div css={viewIconBox}>
              <FiEye />
            </div>
            <p css={viewText}>
              조회수
              <span css={viewCount}>{companyDetailData.data.view}</span>
            </p>
          </div>
        </div>
      </div>
      <p css={companyName}>{companyDetailData.data.name}</p>
      <p css={industryText}>{companyDetailData.data.industry}</p>
    </section>
  );
};
