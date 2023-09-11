import { privacyExecutionDesc, privacyArr, CTOINFO } from "shared-constant";

import { PrivacyDef } from "./type";
import { cssObj } from "./style";

export const PrivacyPart = () => (
  <section css={cssObj.wrapper}>
    {privacyArr.map((item: PrivacyDef) => (
      <div key={item.title}>
        <p>{item.title}</p>
        {item.subItem.map((data) => (
          <>
            <p>{data.title}</p>
            <ul>
              {data.infoArr.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
            <br />
          </>
        ))}
      </div>
    ))}

    <ul>
      <li>가. 개인정보 보호 책임자</li>
      <li>성명 : {CTOINFO.name}</li>
      <li>전화번호 : {CTOINFO.tel}</li>
      <li>이메일 : {CTOINFO.eMail}</li>
    </ul>

    <p>
      <span>
        {"<"} 부칙 {">"}
      </span>
      {privacyExecutionDesc}
    </p>
  </section>
);
