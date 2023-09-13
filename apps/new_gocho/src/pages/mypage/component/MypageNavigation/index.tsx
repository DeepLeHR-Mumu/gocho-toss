import Link from "next/link";

import { FC } from "react";
import { myPageMenu, sideNavMenu } from "../../constants";

import { Box } from "../Box";

import { cssObj } from "./style";
import { MypageNavigationProps } from "./type";

export const MypageNavigation: FC<MypageNavigationProps> = ({ currentPart }) => (
  <div css={cssObj.navigationBox}>
    <Box>
      <div css={cssObj.sideNavigation}>
        {myPageMenu.map(({ type, text }) => {
          if (type)
            return (
              <Link
                key={text}
                href={{
                  query: {
                    type,
                  },
                }}
                css={currentPart === type && cssObj.highlightMenu}
              >
                {text}
              </Link>
            );
          return null;
        })}
      </div>
    </Box>
    <Box>
      <div css={cssObj.sideNavigation}>
        {sideNavMenu.map((menuItem) => {
          if (menuItem.isNewTab) {
            const { link, text } = menuItem;

            return (
              <a key={text} href={link} target="_blank" rel="noreferrer">
                {text}
              </a>
            );
          }
          const { type, text } = menuItem;

          return (
            <Link
              key={text}
              href={{
                query: {
                  type,
                },
              }}
              css={currentPart === type && cssObj.highlightMenu}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </Box>
  </div>
);
