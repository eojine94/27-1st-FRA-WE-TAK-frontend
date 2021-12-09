export default function numToPrice(num) {
  const resultNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `$ ${resultNumber}`;
}
