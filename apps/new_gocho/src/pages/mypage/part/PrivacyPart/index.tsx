import { privacyExecutionDesc, privacyArr, CTOINFO } from "shared-constant";

interface PrivacyDef {
  title: string;
  subItem: {
    title: string;
    infoArr: string[];
  }[];
}

export const PrivacyPart = () => {
  return (
    <section>
      <strong>개인정보 처리방침</strong>

      {privacyArr.map((item: PrivacyDef) => {
        return (
          <div key={item.title}>
            <h2>{item.title}</h2>
            {item.subItem.map((data) => {
              return (
                <>
                  <strong>{data.title}</strong>
                  <ul>
                    {data.infoArr.map((list) => {
                      return <li key={list}>{list}</li>;
                    })}
                  </ul>
                </>
              );
            })}
          </div>
        );
      })}

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
};
