export default function makeSymbolPrice(price) {
  const stringPrice = price.toString();
  const lastStringPrice = stringPrice.slice(-3);
  const firstStringPrice = stringPrice.slice(0, -3);

  return `₩ ${firstStringPrice},${lastStringPrice}`;
}
