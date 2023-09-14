import { useState } from "react";

import { BookmarkPage } from "./type";
import { bookmarkPart } from "./constant";
import { cssObj } from "./style";

export const BookmarkPart = () => {
  const [currentPart, setCurrentPart] = useState<BookmarkPage>(bookmarkPart[0]);

  const handlePartClick = (partTitle: string) => {
    const part = bookmarkPart.find(({ title }) => title === partTitle);
    if (!part) return;
    setCurrentPart(part);
  };

  return (
    <div>
      <div css={cssObj.navWrapper}>
        {bookmarkPart.map(({ title }) => (
          <button
            key={title}
            type="button"
            css={cssObj.subMenu(title === currentPart.title)}
            onClick={() => {
              handlePartClick(title);
            }}
          >
            {title}
          </button>
        ))}
      </div>
      <div css={cssObj.bottomLine} />
      {currentPart.element}
    </div>
  );
};
