import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Layout } from "@component/layout";

import { InfoBox } from "../infoCard";
import { HeaderProps } from "./type";
import { buttonCSS, container, wrapper } from "./style";

export const Header: FunctionComponent<HeaderProps> = ({ pathName }) => {
  const router = useRouter();

  return (
    <section css={wrapper}>
      <Layout>
        <InfoBox />
        <div css={container}>
          <Link href={`/company/${router.query.companyId}/detail`} passHref>
            <a css={buttonCSS(pathName === "detail")}>기업 정보</a>
          </Link>

          <Link
            href={{
              pathname: `/company/${router.query.companyId}/jd`,
              query: {
                page: 1,
              },
            }}
            passHref
          >
            <a css={buttonCSS(pathName === "jd")}>채용공고 모음</a>
          </Link>
        </div>
      </Layout>
    </section>
  );
};
