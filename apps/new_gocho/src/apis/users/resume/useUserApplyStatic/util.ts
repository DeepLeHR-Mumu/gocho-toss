import { UserApplyStaticDef } from "../type";

export const selector = (statics: UserApplyStaticDef) => ({
  applyCompleteCount: statics.apply_complete_count,
  applyCancelCount: statics.apply_cancel_count,
  applyReadCount: statics.apply_read_count,
  applyUnreadCount: statics.apply_unread_count,
});
