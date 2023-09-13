import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { Profile, Textarea, Button } from "shared-ui/deeple-ds";

import { useWriteCompanyComment } from "@/apis/company";
import { useUserProfile } from "@/apis/auth";
import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";

import { cssObj } from "./style";

export const WriteReview = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: userData } = useUserProfile();
  const { mutate: postWriteCompanyComment } = useWriteCompanyComment();

  const { register, handleSubmit, reset } = useForm<{ comment: string }>();

  const writeComment: SubmitHandler<{ comment: string }> = (commentObj) => {
    postWriteCompanyComment(
      { companyId: Number(router.query.companyId), description: commentObj.comment },
      {
        onSuccess: () => {
          reset();
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
        onError: () => {
          // TODO 실패 시
        },
      }
    );
  };

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.profileWrapper}>
        <Profile src={userData?.image || ""} size={40} altText={`${userData?.nickname} 유저 로고`} />
        <span>{userData?.nickname}</span>
      </div>
      <form onSubmit={handleSubmit(writeComment)}>
        <Textarea height={4.5} {...register("comment")} />
        <div css={cssObj.buttonWrapper}>
          <Button type="submit" size="small">
            작성완료
          </Button>
        </div>
      </form>
    </div>
  );
};
