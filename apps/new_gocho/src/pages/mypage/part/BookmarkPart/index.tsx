import { useState } from "react";

import { BookmarkPage } from "./type";
import { bookmarkPart } from "./constants";

import { cssObj } from "./style";

export const BookmarkPart = () => {
  const [curPart, setPart] = useState<BookmarkPage>(bookmarkPart[0]);

  const handlePartClick = (partKey: number) => {
    const part = bookmarkPart.find(({ key }) => {
      return key === partKey;
    });
    if (!part) return;
    setPart(part);
  };

  return (
    <>
      <div css={cssObj.navWrapper}>
        {bookmarkPart.map(({ key, title }) => {
          return (
            <div key={key} css={cssObj.navItem}>
              <button
                type="button"
                css={key === curPart.key ? cssObj.selectedText : cssObj.buttonText}
                onClick={() => {
                  handlePartClick(key);
                }}
              >
                {title}
              </button>
              {key === curPart.key && <hr css={cssObj.selectedHr} />}
            </div>
          );
        })}
      </div>
      <hr css={cssObj.bottomHr} />
      {curPart.element}
    </>
  );
};
