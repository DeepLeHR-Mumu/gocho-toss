import { useState, useRef, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { FiAlertCircle, FiSend } from "react-icons/fi";

import { Profile, Chip, Input } from "shared-ui/deeple-ds";

import { useWriteCompanyComment, useCompanyCommentArr } from "@/apis/company";
import { RequestObjDef as CompanyCommentFormValues } from "@/apis/company/useWriteCompanyComment/type";
import { useUserProfile } from "@/apis/auth";
import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";
import { LoginModal } from "@/components";

import { Review } from "./component/Review";
import { ReviewPartProps } from "./type";
import { cssObj } from "./style";

export const ReviewPart = ({ company, title, jdId }: ReviewPartProps) => {
  const [reviewState, setReviewState] = useState<"jd" | "company">("jd");
  const [loginModal, setLoginModal] = useState(false);
  const [warning, setWarning] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollWillbeBottom = useRef(false);
  const queryClient = useQueryClient();

  const { register, reset, handleSubmit } = useForm<CompanyCommentFormValues>({
    defaultValues: { companyId: company.id, jdId: reviewState === "jd" ? jdId : undefined, description: "" },
  });

  const { data: userData } = useUserProfile();
  const { data: companyCommentData } = useCompanyCommentArr({
    companyId: Number(company.id),
    jdId: reviewState === "jd" ? jdId : undefined,
  });
  const { mutate: postWriteCompanyComment } = useWriteCompanyComment();

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollBottom = scrollRef.current.scrollHeight;
      scrollRef.current.scrollTo(0, scrollBottom);
    }
  };

  const commentSubmit: SubmitHandler<CompanyCommentFormValues> = (commentObj) => {
    if (!userData) {
      setLoginModal(true);
      return;
    }

    if (commentObj.description.trim().length === 0) {
      return;
    }

    postWriteCompanyComment(commentObj, {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        scrollWillbeBottom.current = true;
      },
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [companyCommentData?.comment_arr]);

  return (
    <>
      <aside css={cssObj.wrapper}>
        <div css={cssObj.headerWrapper}>
          <div css={cssObj.companyWrapper}>
            <Profile src={company?.logoUrl || ""} size={24} altText={`${company?.name} 회사 로고`} />
            <span>{company?.name}</span>
          </div>
          <h3 css={cssObj.title}>{title}</h3>
          <div css={cssObj.chipsWrapper}>
            <Chip
              size="small"
              color={reviewState === "jd" ? "fillBlack" : "transparent"}
              onClick={() => {
                setReviewState("jd");
                scrollToBottom();
              }}
            >
              공고 리뷰
            </Chip>
            <Chip
              size="small"
              color={reviewState === "company" ? "fillBlack" : "transparent"}
              onClick={() => {
                setReviewState("company");
                scrollToBottom();
              }}
            >
              기업 리뷰
            </Chip>
            <div css={cssObj.alertWrapper}>
              <FiAlertCircle
                css={cssObj.alertIcon}
                onMouseOver={() => {
                  setWarning(true);
                }}
                onMouseLeave={() => {
                  setWarning(false);
                }}
              />
              {warning && (
                <div css={cssObj.alertHoverBox}>
                  해당 공고와 기업에 대한 유저들의 리뷰입니다. 무분별한 욕설, 비방글은 통보없이 삭제 또는 제재가 가해질
                  수 있습니다.
                </div>
              )}
            </div>
          </div>
        </div>
        {!userData ? (
          <div css={cssObj.contentsWrapper(true)} ref={scrollRef}>
            <Review
              uploader={{ nickname: "유저닉네임" }}
              time="시간"
              comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda excepturi autem officiis
          dignissimos,"
              thumbsUp={{ count: 0, isClicked: false }}
              thumbsDown={{ count: 0, isClicked: false }}
            />
            <Review
              uploader={{ nickname: "유저닉네임" }}
              time="시간"
              comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda excepturi autem officiis
          dignissimos,"
              thumbsUp={{ count: 0, isClicked: false }}
              thumbsDown={{ count: 0, isClicked: false }}
            />
          </div>
        ) : (
          <div css={cssObj.contentsWrapper(false)} ref={scrollRef}>
            {companyCommentData?.comment_arr && companyCommentData.comment_arr.length !== 0 ? (
              companyCommentData.comment_arr.map((comment) => (
                <Review
                  key={comment.id}
                  companyId={company.id}
                  commentId={comment.id}
                  uploader={{ ...comment.uploader }}
                  time={comment.created_time}
                  comment={comment.description}
                  thumbsUp={{ count: comment.like, isClicked: comment.is_liked }}
                  thumbsDown={{ count: comment.dislike, isClicked: comment.is_disliked }}
                  isMyComment={comment.uploader.nickname === userData?.nickname}
                />
              ))
            ) : (
              <p css={cssObj.noComment}>
                아직 등록된 {reviewState === "jd" ? "공고" : "기업"} 리뷰가 없습니다.
                <br />첫 리뷰를 남겨보세요!
              </p>
            )}
          </div>
        )}
        <div css={cssObj.footerWrapper}>
          <form onSubmit={handleSubmit(commentSubmit)}>
            <Input
              type="textarea"
              suffix={
                <button type="submit">
                  <FiSend css={cssObj.sendIcon} />
                </button>
              }
              {...register("description")}
            />
          </form>
        </div>
      </aside>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
    </>
  );
};
