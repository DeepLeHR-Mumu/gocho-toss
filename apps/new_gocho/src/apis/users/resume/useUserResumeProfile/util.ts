import { UserResumeProfileDef } from "../type";

export const selector = (userResumeProfile: UserResumeProfileDef) => ({
  id: userResumeProfile.id,
  image: userResumeProfile.image,
  name: userResumeProfile.name,
  phoneNumber: userResumeProfile.phone_number,
  email: userResumeProfile.email,
  birthDate: userResumeProfile.birth_date,
  location: {
    address: userResumeProfile.location?.address,
    x: userResumeProfile.location?.x,
    y: userResumeProfile.location?.y,
  },
  hobby: userResumeProfile.hobby,
  specialty: userResumeProfile.specialty,
});
