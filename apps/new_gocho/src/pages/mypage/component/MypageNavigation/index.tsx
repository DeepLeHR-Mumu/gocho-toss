import Link from "next/link";

import { FunctionComponent } from "react";
import { myPageMenu, sideNavMenu } from "../../constants";

import { Box } from "../Box";

import { cssObj } from "./style";

export const MypageNavigation: FunctionComponent = () => {
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
