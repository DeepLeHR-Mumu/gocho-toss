import { SelectorUserResumeProfile } from "@/apis/users/resume/useUserResumeProfile/type";

export interface ProfileFormProps {
  handleEditMode: () => void;
  resumeProfile: SelectorUserResumeProfile;
}
