export function formatNumber(num) {
  if (typeof num !== 'number' || isNaN(num)) return num;
  if (Number.isInteger(num)) return num.toLocaleString() + '.00';
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8
  });
}
