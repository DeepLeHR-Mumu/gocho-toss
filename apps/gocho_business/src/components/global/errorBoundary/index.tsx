import { Component } from "react";
import Image from "next/image";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import jobi_500 from "@/public/image/jobi_500.svg";
import { INTERNAL_URL } from "@/constants/url";

import { cssObj } from "./style";
import { PropsDef, StateDef } from "./type";

export class ErrorBoundary extends Component<PropsDef, StateDef> {
  constructor(props: PropsDef) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   this.setState({ error, errorInfo });
  //   // eslint-disable-next-line no-console
  //   console.log(error, errorInfo);
  // }

  render() {
    const { state, props } = this;
    if (state.hasError) {
      return (
        <main css={cssObj.container}>
          <InvisibleH2 title="없는 페이지" />
          <div css={cssObj.jobiImage}>
            <Image src={jobi_500} alt="" fill  priority />
          </div>
          <p css={cssObj.title}>예기치 못한 오류가 발생했습니다</p>
          <div css={cssObj.catchPhraseContainer}>
            <p css={cssObj.catchPhrase}>고장, 불편 사항은 아래 채널톡에서 신고 부탁드려요 😢</p>
          </div>
          <div css={cssObj.linkContainer}>
            <SharedButton
              radius="round"
              fontColor={COLORS.GRAY10}
              backgroundColor={COLORS.GRAY80}
              size="medium"
              text="새로고침"
              onClickHandler={() => {
                window.location.reload();
              }}
            />
            <SharedButton
              radius="round"
              fontColor={COLORS.GRAY100}
              backgroundColor={COLORS.BLUE_NEON40}
              size="medium"
              text="홈으로"
              onClickHandler={() => {
                window.location.href = INTERNAL_URL.JD_LIST;
              }}
            />
          </div>
        </main>
      );
    }

    return props.children;
  }
}
