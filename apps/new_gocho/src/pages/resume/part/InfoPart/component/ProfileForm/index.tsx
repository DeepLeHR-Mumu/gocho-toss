import Image from "next/image";
import { FC, useRef, useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { FiSearch } from "react-icons/fi";

import { Button, Input } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { fileEncording } from "@/pages/mypage/part/ProfilePart/utils";
import basicProfile from "@/public/image/jobi/jobi_500.png";

import { cssObj } from "./style";
import { ProfileFormProps } from "./type";
import { MAX_PROFILE_SIZE } from "./constants";

export const ProfileForm: FC<ProfileFormProps> = ({ handleEditMode }) => {
  const { setToastMessage } = useToast();

  const [userProfilePreview, setUserProfilePreview] = useState<string>();
  // const [userProfile, setUserProfile] = useState<File | null>(null);
  // const [isProfileDirty, setIsProfileDirty] = useState<boolean>(false);

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const profile = event.target.files?.[0];

    if (profile && profile.size > MAX_PROFILE_SIZE) {
      setToastMessage("5MB 이하의 사진을 첨부해 주세요.");
      return;
    }

    if (profile) {
      // setUserProfile(profile);
      // clearErrors("nickName");
      // trigger("nickName");

      try {
        const result = await fileEncording(profile);

        if (typeof result === "string") {
          setUserProfilePreview(result);
          // setIsProfileDirty(true);
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
        // console.log(addressObj.address);
        // setValue("location.address", addressObj.address, { shouldDirty: true });
        // clearErrors("location.address");

        window.kakao.maps.load(() => {
          const geocoder = new window.kakao.maps.services.Geocoder();

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geocoder.addressSearch(addressObj.address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              // const { x, y } = result[0];
              // console.log(x, y);
              // setValue("location.x", x);
              // setValue("location.y", y);
            }
          });
        });
      },
    });
  };

  return (
    <form css={cssObj.formWrapper}>
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
                value="장의영"
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
                value="19980928"
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
                value="01022724575"
              />
            </div>
          </div>

          <div css={cssObj.etcInfoWrapper}>
            <div>
              <p>이메일</p> <Input type="text" placeholder="이메일을 입력해 주세요" />
            </div>
            <div>
              <p>거주지</p>
              <Input
                type="text"
                placeholder="거주지를 입력해 주세요"
                onClick={onClickAddress}
                aria-disabled
                suffix={<FiSearch css={cssObj.searchIcon} />}
              />
            </div>
            <div>
              <p>취미</p> <Input type="text" placeholder="취미를 입력해 주세요" />
            </div>
            <div>
              <p>특기 </p> <Input type="text" placeholder="특기를 입력해 주세요" />
            </div>
          </div>
        </section>

        <section css={cssObj.profileWrapper}>
          <Image src={userProfilePreview ?? basicProfile} alt="" width={168} height={200} />

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
        <Button size="small" type="submit" onClick={handleEditMode}>
          저장
        </Button>
        <Button size="small" type="button" onClick={handleEditMode} color="outlineGray">
          취소
        </Button>
      </div>
    </form>
  );
};
