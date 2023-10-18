import { SelectorUserResumeProfile } from "@/apis/users/resume/useUserResumeProfile/type";

export interface ProfileFormProps {
  userId: number;
  handleEditMode: () => void;
  resumeProfile: SelectorUserResumeProfile;
}
