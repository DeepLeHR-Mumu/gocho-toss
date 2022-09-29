import Image from "next/image";
import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useCompanyDetail } from "shared-api/company";
import { COLORS } from "shared-style/color";

import { wrapper, logoBox } from "./style";

export const InfoBox: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  if (!isSuccess || isLoading) {
    return <>d</>;
  }

  return (
    <section css={wrapper}>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        `}
      >
        <div css={logoBox}>
          <Image src={companyDetailData.data.logoUrl} layout="fill" objectFit="contain" />
        </div>
        <div>
          <button
            type="button"
            css={css`
              background-color: ${COLORS.GRAY90};
              padding: 16px 24px;
              border-radius: 24px;
              width: 152px;
              display: flex;
              justify-content: center;
              margin-bottom: 0.875rem;
            `}
          >
            <div
              css={css`
                color: ${COLORS.GRAY60};
                font-size: 0.8rem;
                margin-right: 0.2rem;
              `}
            >
              <BsFillBookmarkFill />
            </div>
            <p
              css={css`
                color: ${COLORS.GRAY30};
                font-weight: 400;
                font-size: 14px;
              `}
            >
              기업 북마크
              <span
                css={css`
                  margin-left: 0.3rem;
                  color: ${COLORS.GRAY60};
                `}
              >
                {companyDetailData.data.bookmark}
              </span>
            </p>
          </button>
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <div
              css={css`
                color: ${COLORS.GRAY40};
                margin-right: 0.1rem;
              `}
            >
              <FiEye />
            </div>
            <p
              css={css`
                color: ${COLORS.GRAY40};
                font-weight: 400;
              `}
            >
              조회수
              <span
                css={css`
                  margin-left: 0.3rem;
                  color: ${COLORS.BLUE_FIRST40};
                `}
              >
                {companyDetailData.data.view}
              </span>
            </p>
          </div>
        </div>
      </div>
      <p
        css={css`
          font-size: 1.375rem;
          color: ${COLORS.GRAY10};
          margin-bottom: 1.5rem;
        `}
      >
        {companyDetailData.data.name}
      </p>
      <p
        css={css`
          color: ${COLORS.GRAY40};
          font-weight: 400;
        `}
      >
        {companyDetailData.data.industry}
      </p>
    </section>
  );
};
