export const stringOrNull = (text?: string | null) => {
  if (text && typeof text === "string") {
    return text.length === 0 ? null : text;
  }
  return null;
};
