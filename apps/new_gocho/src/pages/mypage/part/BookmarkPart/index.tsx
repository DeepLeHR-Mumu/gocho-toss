import { useState } from "react";

import { BookmarkPage } from "./type";
import { bookmarkPart } from "./constants";

import { cssObj } from "./style";

export const BookmarkPart = () => {
  const [currentPart, setCurrentPart] = useState<BookmarkPage>(bookmarkPart[0]);

  const handlePartClick = (partKey: number) => {
    const part = bookmarkPart.find(({ key }) => key === partKey);
    if (!part) return;
    setCurrentPart(part);
  };

  return (
    <div>
      <div css={cssObj.navWrapper}>
        {bookmarkPart.map(({ key, title }) => (
          <div key={key} css={cssObj.navItem}>
            <button
              type="button"
              css={key === currentPart.key ? cssObj.selectedText : cssObj.buttonText}
              onClick={() => {
                handlePartClick(key);
              }}
            >
              {title}
            </button>
            {key === currentPart.key && <hr css={cssObj.selectedHr} />}
          </div>
        ))}
      </div>
      <hr css={cssObj.bottomHr} />
      {currentPart.element}
    </div>
  );
};
