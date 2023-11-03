import { useState, useRef, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { FiAlertCircle, FiSend } from "react-icons/fi";

import { Profile, Chip, Textarea } from "shared-ui/deeple-ds";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useToast } from "@/globalStates";
import { useWriteCompanyComment, useCompanyCommentArr } from "@/apis/company";
import { RequestObjDef as CompanyCommentFormValues } from "@/apis/company/useWriteCompanyComment/type";
import { useUserInfo } from "@/apis/auth";
import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";
import { LoginModal } from "@/components";

import { REVIEW_MAX_LENGTH } from "./constant";
import { Review } from "./component/Review";
import { ReviewPartProps } from "./type";
import { cssObj } from "./style";

export const ReviewPart = ({ company, title, jdId }: ReviewPartProps) => {
  const [reviewState, setReviewState] = useState<"jd" | "company">("jd");
  const [loginModal, setLoginModal] = useState(false);
  const [warning, setWarning] = useState(false);

  const { setToastMessage } = useToast();

  const scrollDownRef = useRef<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyCommentFormValues>({
    mode: "onChange",
    defaultValues: { companyId: company.id, jdId: reviewState === "jd" ? jdId : undefined, description: "" },
  });

  const { data: userData } = useUserInfo();
  const { data: companyCommentData } = useCompanyCommentArr({
    companyId: Number(company.id),
    jdId: reviewState === "jd" ? jdId : undefined,
  });
  const { mutate: postWriteCompanyComment } = useWriteCompanyComment();

  const scrollToBottom = () => {
    if (scrollDownRef.current && scrollRef.current) {
      const scrollBottom = scrollRef.current.scrollHeight;
      scrollRef.current.scrollTo(0, scrollBottom);
      scrollDownRef.current = false;
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
        scrollDownRef.current = true;
        reset();
        setToastMessage("공고리뷰가 업로드 되었습니다.");
        queryClient.invalidateQueries(companyCommentArrKeyObj.all);
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
            <Profile src={company?.logoUrl || defaultCompanyLogo} size={24} altText={`${company?.name} 회사 로고`} />
            <span>{company?.name}</span>
          </div>
          <h3 css={cssObj.title}>{title}</h3>
          <div css={cssObj.chipsWrapper}>
            <Chip
              size="small"
              color={reviewState === "jd" ? "fillBlack" : "transparent"}
              onClick={() => {
                scrollDownRef.current = true;
                setReviewState("jd");
              }}
            >
              공고 리뷰
            </Chip>
            <Chip
              size="small"
              color={reviewState === "company" ? "fillBlack" : "transparent"}
              onClick={() => {
                scrollDownRef.current = true;
                setReviewState("company");
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
          <>
            <div css={cssObj.loginDesc}>
              로그인 후 기업의 <br />
              생생한 리뷰를 확인해보세요!
            </div>
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
          </>
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
          {userData && <h5>{userData.nickname}</h5>}
          <form onSubmit={handleSubmit(commentSubmit)}>
            <Textarea
              css={cssObj.commentInput}
              placeholder={`공고에 대한 리뷰를 작성해 보세요. (최대 ${REVIEW_MAX_LENGTH}자)`}
              suffix={
                <button type="submit">
                  <FiSend css={cssObj.sendIcon} />
                </button>
              }
              {...register("description", { maxLength: REVIEW_MAX_LENGTH })}
              state={errors.description ? { state: "error" } : undefined}
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
