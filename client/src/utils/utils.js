export const calcPercentage = (price, diff) => {
  const percentage = (100 - ((price - diff) * 100) / price).toFixed(2);
  return percentage > 0 ? `${percentage}%` : `${percentage.substring(1)}%`;
};

export const setColorIndicator = price => (price > 0 ? 'green' : 'red');
