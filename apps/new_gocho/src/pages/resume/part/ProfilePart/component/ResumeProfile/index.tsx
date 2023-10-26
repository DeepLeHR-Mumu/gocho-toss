import { FC } from "react";
import Image from "next/image";

import basicProfile from "@/public/image/jobi/jobi_500.png";
import email from "@/public/image/resume/profile/email.svg";
import phone from "@/public/image/resume/profile/phone.svg";
import address from "@/public/image/resume/profile/address.svg";
import { dateToYYMMDD } from "@/utils";

import { ResumeProfileProps } from "./type";
import { cssObj } from "./style";

export const ResumeProfile: FC<ResumeProfileProps> = ({ resumeProfile }) => {
  const isEtcInfo = !!(resumeProfile.hobby || resumeProfile.specialty);

  return (
    <section css={cssObj.wrapper}>
      <article css={cssObj.profileBox}>
        <Image src={resumeProfile.image ?? basicProfile} css={cssObj.profileImage} width={137} height={160} alt="" />
        <div css={cssObj.profileWrapper}>
          <div css={cssObj.profileHeader}>
            <h1>{resumeProfile.name}</h1>
            <p>{dateToYYMMDD(resumeProfile.birthDate)}</p>
          </div>
          <div css={cssObj.profileInfo}>
            <div>
              <Image src={phone} alt="" />
              <p css={cssObj.default}>{resumeProfile.phoneNumber}</p>
            </div>
            <div>
              <Image src={email} alt="" />
              {resumeProfile.email ? (
                <p css={cssObj.default}>{resumeProfile.email}</p>
              ) : (
                <p css={cssObj.placeholder}>이메일을 입력해주세요.</p>
              )}
            </div>
            <div>
              <Image src={address} alt="" />
              {resumeProfile.location ? (
                <p css={cssObj.default}>{resumeProfile.location.address}</p>
              ) : (
                <p css={cssObj.placeholder}>집 주소를 입력해주세요.</p>
              )}
            </div>
          </div>
        </div>
      </article>
      {isEtcInfo && (
        <article css={cssObj.etcBox}>
          {resumeProfile.hobby && (
            <div css={cssObj.etcWrapper}>
              <p css={cssObj.etcHeader}>취미</p>
              <p css={cssObj.etcBody}>{resumeProfile.hobby}</p>
            </div>
          )}
          {resumeProfile.specialty && (
            <div css={cssObj.etcWrapper}>
              <p css={cssObj.etcHeader}>특기</p>
              <p css={cssObj.etcBody}>{resumeProfile.specialty}</p>
            </div>
          )}
        </article>
      )}
    </section>
  );
};
