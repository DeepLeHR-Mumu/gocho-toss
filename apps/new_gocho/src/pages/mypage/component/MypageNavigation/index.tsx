import Link from "next/link";

import { FC } from "react";
import { myPageMenu, sideNavMenu } from "../../constants";

import { Box } from "../Box";

import { cssObj } from "./style";

interface MypageNavigationProps {
  currentPart: string | undefined;
}

export const MypageNavigation: FC<MypageNavigationProps> = ({ currentPart }) => {
  return (
    <div css={cssObj.navigationBox}>
      <Box>
        <div css={cssObj.sideNavigation}>
          {myPageMenu.map(({ key, type, text }) => {
            if (type)
              return (
                <Link
                  key={key}
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
              const { key, link, text } = menuItem;

              return (
                <Link key={key} href={link}>
                  {text}
                </Link>
              );
            }
            const { key, type, text } = menuItem;

            return (
              <Link
                key={key}
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
};
