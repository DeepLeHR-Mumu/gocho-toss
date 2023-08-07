export { notFoundPageErrorEvent } from "./400";

export { unknownPageErrorEvent } from "./500";

export { loginSuccessEvent, loginPageFunnelEvent } from "./login";

export {
  registerClickEvent,
  registerCompanySearchClickEvent,
  registerCompanySearchNextClickEvent,
  registerCompanyAddSearchClickEvent,
  registerPhoneValidationClickEvent,
  registerEmailNextClickEvent,
  registerCompleteClickEvent,
} from "./register";

export {
  homeFunnelEvent,
  homeJdUploadEvent,
  homeJdListEvent,
  homeQnaEvent,
  homeAlarmClickEvent,
  homeAlertEvent,
  homeCompanyInfoClickEvent,
  homeNewsClickEvent,
  homeProfileInfoClickEvent,
  homeVerityCompanyEvent,
} from "./home";

export {
  jdEditConfirmEvent,
  jdEditDoneEvent,
  jdEditExitDoneEvent,
  jdEditExitEvent,
  jdEditFailEvent,
  jdEditPageFunnelEvent,
} from "./jdEdit";

export {
  jdEndButtonEvent,
  jdEndDoneEvent,
  jdDeleteButtonEvent,
  jdDeleteDoneEvent,
  jdEditButtonEvent,
  jdListPageFunnelEvent,
} from "./jdList";

export {
  jdUploadClickEvent,
  jdUploadDoneEvent,
  jdUploadExitDoneEvent,
  jdUploadExitEvent,
  jdUploadFailEvent,
  jdUploadPageFunnelEvent,
  jdMailClickEvent,
  jdAcademicClickEvent,
  jdRotationClickEvent,
  jdPlaceAddClickEvent,
  jdCareerClickEvent,
  jdTitleClickEvent,
} from "./jdUpload";

export {
  companyEditConfirmEvent,
  companyEditDoneEvent,
  companyEditFailEvent,
  companyEditPageFunnelEvent,
} from "./companyEdit";

export {
  factoryDeleteConfirmEvent,
  factoryDeleteDoneEvent,
  factoryEditConfirmEvent,
  factoryEditDoneEvent,
  factoryEditFailEvent,
  factoryUploadConfirmEvent,
  factoryUploadDoneEvent,
  factoryUploadFailEvent,
} from "./factory";

export { mypageFunnelEvent } from "./mypage";

export { managerListPageFunnelEvent } from "./managerList";
