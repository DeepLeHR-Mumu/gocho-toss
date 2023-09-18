import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout, LoginModal } from "@/components";
import { useUserInfo } from "@/apis/auth/useUserInfo";

import { MenuLink } from "./component";
import { myPageMenu, sideNavMenu, partElementArr } from "./constant";
import { cssObj } from "./style";

const MyPage: NextPage = () => {
  const router = useRouter();
  const { isError } = useUserInfo();

  const currentPart = partElementArr.find(({ type }) => type === router.query.type);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      router.replace({ query: { type: "profile" } });
    }
  }, [router]);

  if (isError) {
    return (
      <div css={cssObj.background}>
        <LoginModal
          close={() => {
            router.push("/");
          }}
        />
      </div>
    );
  }

  return (
    <Layout>
      <main css={cssObj.wrapper}>
        <section css={cssObj.navBox}>
          <div css={cssObj.navigationBox}>
            <div css={cssObj.sideNavigation}>
              {myPageMenu.map(({ type, text }) => {
                const isSelected = currentPart?.type === type;
                return <MenuLink key={text} text={text} type={type} isSelected={isSelected} />;
              })}
            </div>
            <div css={cssObj.sideNavigation}>
              {sideNavMenu.map((menuItem) => {
                if (menuItem.isNewTab) {
                  return (
                    <a
                      css={cssObj.menu(false)}
                      key={menuItem.text}
                      href={menuItem.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {menuItem.text}
                    </a>
                  );
                }

                const isSelected = currentPart?.type === menuItem.type;
                return (
                  <MenuLink key={menuItem.text} text={menuItem.text} type={menuItem.type} isSelected={isSelected} />
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div css={cssObj.elementBox}>
            <h3 css={cssObj.title}>{currentPart?.title}</h3>
            {currentPart?.element}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MyPage;
