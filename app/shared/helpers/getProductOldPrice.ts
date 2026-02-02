export const getProductOldPrice = (price: number) => {
  return (price + price * 0.1).toFixed(2);
};