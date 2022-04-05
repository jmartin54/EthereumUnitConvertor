const units = {
  wei: Math.pow(10, 0),
  kwei: Math.pow(10, 3),
  mwei: Math.pow(10, 6),
  gwei: Math.pow(10, 9),
  microether: Math.pow(10, 12),
  milliether: Math.pow(10, 15),
  ether: Math.pow(10, 18),
};
export type Unit = keyof typeof units;

export default units;
