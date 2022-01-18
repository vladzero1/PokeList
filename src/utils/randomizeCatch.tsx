/**
 *
 * @param successPercentage
 * it must be between 0-100.
 * @returns boolean
 */
export const randomCatch = (successPercentage: number) => {
  successPercentage = successPercentage > 100 ? 100 : successPercentage;
  successPercentage = successPercentage < 0 ? 0 : successPercentage;
  const num = Math.random();
  return num > successPercentage / 100 ? true : false;
};
