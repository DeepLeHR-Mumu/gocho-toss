export const utmLinkCreator = (applyUrl: string) => {
  if (applyUrl.includes("?")) {
    return `${applyUrl}&utm_source=gochodaejol_dotcom`;
  }
  return `${applyUrl}?utm_source=gochodaejol_dotcom`;
};
