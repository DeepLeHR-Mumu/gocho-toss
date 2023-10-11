import { cssObj } from "./style";
import { tosArrDef } from "./type";
import { tosExecutionDesc, tosArr } from "./constant";

export const TOSPart = () => (
  <main css={cssObj.wrapper}>
    <section>
      {tosArr.map((item: tosArrDef) => (
        <div key={item.title}>
          <p>{item.title}</p>
          <br />
          {item.subItem.map((data) => (
            <>
              <p>{data.title}</p>
              <ul>
                {data.infoArr.map((list) => (
                  <li key={list}>{list}</li>
                ))}
                <br />
              </ul>
            </>
          ))}
        </div>
      ))}

      <p>{tosExecutionDesc}</p>
    </section>
  </main>
);
