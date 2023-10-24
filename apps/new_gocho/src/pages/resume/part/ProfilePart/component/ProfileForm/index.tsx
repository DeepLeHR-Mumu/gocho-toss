import Image from "next/image";
import { FC, useRef, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiSearch } from "react-icons/fi";

import { Button, Input } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";

import { usePutUserResumeProfile } from "@/apis/users";
import { PutResumeProfileDef } from "@/apis/users/resume/usePutUserResumeProfile/type";
import { fileEncording } from "@/pages/mypage/part/ProfilePart/utils";
import basicProfile from "@/public/image/resume/BasicProfile.svg";

import { cssObj } from "./style";
import { ProfileFormProps } from "./type";
import { MAX_PROFILE_SIZE } from "./constants";

export const ProfileForm: FC<ProfileFormProps> = ({ userId, handleEditMode, resumeProfile }) => {
  const { setToastMessage } = useToast();

  const { mutate: putResumeProfile } = usePutUserResumeProfile(userId);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PutResumeProfileDef>({
    mode: "onChange",
    defaultValues: {
      email: resumeProfile.email,
      location: {
        address: resumeProfile.location.address,
        x: resumeProfile.location.x,
        y: resumeProfile.location.y,
      },
      hobby: resumeProfile.hobby,
      specialty: resumeProfile.specialty,
    },
  });

  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [userProfilePreview, setUserProfilePreview] = useState<string>();

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const profile = event.target.files?.[0];

    if (profile && profile.size > MAX_PROFILE_SIZE) {
      setProfileFile(null);

      setToastMessage("5MB 이하의 사진을 첨부해 주세요.");
      return;
    }

    if (profile) {
      setProfileFile(profile);

      try {
        const result = await fileEncording(profile);

        if (typeof result === "string") {
          setUserProfilePreview(result);
        }
      } catch (error) {
        setToastMessage("파일 업로드 중 오류가 발생했습니다. 파일 양식을 확인하거나 다시 시도해 주세요.");
      }
    }
  };

  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("location.address", addressObj.address, { shouldDirty: true });

        window.kakao.maps.load(() => {
          const geocoder = new window.kakao.maps.services.Geocoder();

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geocoder.addressSearch(addressObj.address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const { x, y } = result[0];
              setValue("location.x", x);
              setValue("location.y", y);
            }
          });
        });
      },
    });
  };

  const onSubmitResumeProfile: SubmitHandler<PutResumeProfileDef> = async (data) => {
    if (!profileFile) {
      await putResumeProfile({
        userId,
        requestObj: data,
      });
    } else {
      await putResumeProfile({
        userId,
        image: profileFile,
        requestObj: data,
      });
    }

    setToastMessage("기본정보가 업로드 완료되었습니다.");

    handleEditMode();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitResumeProfile)} css={cssObj.formWrapper}>
      <div css={cssObj.formBox}>
        <section css={cssObj.infoWrapper}>
          <div css={cssObj.basicInfoWrapper}>
            <div>
              <p>이름</p>
              <Input
                type="text"
                aria-disabled
                state={{
                  state: "disabled",
                }}
                value={resumeProfile.name}
                css={cssObj.rMargin}
              />
            </div>
            <div>
              <p>생년월일</p>
              <Input
                type="text"
                aria-disabled
                state={{
                  state: "disabled",
                }}
                value={resumeProfile.birthDate}
              />
            </div>
            <div>
              <p>연락처</p>
              <Input
                type="text"
                aria-disabled
                state={{
                  state: "disabled",
                }}
                value={resumeProfile.phoneNumber}
              />
            </div>
          </div>

          <div css={cssObj.etcInfoWrapper}>
            <div>
              <p>이메일</p>{" "}
              <Input
                type="text"
                placeholder="이메일을 입력해 주세요"
                maxLength={20}
                state={{
                  state: errors.email ? "error" : "default",
                  message: errors.email ? errors.email.message : "",
                }}
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/i,
                    message: "올바른 이메일을 입력해 주세요.",
                  },
                })}
              />
            </div>
            <div>
              <p>거주지</p>
              <Input
                type="text"
                placeholder="거주지를 입력해 주세요"
                onClick={onClickAddress}
                aria-disabled
                {...register("location.address")}
                suffix={<FiSearch css={cssObj.searchIcon} />}
              />
            </div>
            <div>
              <p>취미</p>
              <Input type="text" placeholder="취미를 입력해 주세요" maxLength={40} {...register("hobby")} />
            </div>
            <div>
              <p>특기 </p>
              <Input type="text" placeholder="특기를 입력해 주세요" maxLength={40} {...register("specialty")} />
            </div>
          </div>
        </section>

        <section css={cssObj.profileWrapper}>
          <Image src={userProfilePreview ?? resumeProfile.image ?? basicProfile} alt="" width={168} height={200} />

          <input
            id="userProfile"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            aria-label="프로필 업로드"
            ref={uploadRef}
            css={cssObj.upload}
            onChange={handleProfileChange}
          />
          <Button
            size="small"
            type="button"
            color="outlineGray"
            onClick={() => {
              if (uploadRef.current) {
                uploadRef.current.click();
              }
            }}
          >
            프로필 사진 변경
          </Button>
          <p>5MB이하 600x450픽셀의 jpg, png, jpeg 파일 권장</p>
        </section>
      </div>

      <div css={cssObj.buttonWrapper}>
        <Button size="small" type="submit">
          저장
        </Button>
        <Button size="small" type="button" onClick={handleEditMode} color="outlineGray">
          취소
        </Button>
      </div>
    </form>
  );
};
