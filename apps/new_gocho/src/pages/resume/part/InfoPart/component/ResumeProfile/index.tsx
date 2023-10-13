import { FC } from "react";
import Image from "next/image";

import basicProfile from "@/public/image/jobi/jobi_500.png";

import { ResumeProfileProps } from "./type";

export const ResumeProfile: FC<ResumeProfileProps> = ({ resumeProfile }) => (
  <div>
    <Image src={resumeProfile.image ?? basicProfile} width={168} height={200} alt="" />
    <div>
      <div>
        <h1>{resumeProfile.name}</h1>
        <p>{resumeProfile.birthDate}</p>
      </div>
      <div>
        <p>Icon</p>
        <p>{resumeProfile.phoneNumber}</p>
      </div>
      <div>
        <p>Icon</p>
        <p>{resumeProfile.email}</p>
      </div>
      <div>
        <p>Icon</p>
        <p>{resumeProfile.location.address}</p>
      </div>
    </div>
  </div>
);
