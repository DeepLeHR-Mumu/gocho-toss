export const isInvalidDate = (date: Date) => {
  return Number.isNaN(date.getTime());
};

export const isExpired = (date: Date) => {
  const today = new Date();

  return date.getTime() < today.getTime();
};

export const getDayUntilExpiry = (expiryTime: Date) => {
  const targetExpiryTime = new Date(expiryTime);
  targetExpiryTime.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timestampUntilExpiry = targetExpiryTime.getTime() - today.getTime();

  return Math.floor(timestampUntilExpiry / 1000 / 60 / 60 / 24);
};

export const getRandomItems = <T>(items: T[], count: number): T[] => {
  if (count >= items.length) {
    return items;
  }

  const shuffled = items.slice();
  // eslint-disable-next-line no-plusplus
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
};
