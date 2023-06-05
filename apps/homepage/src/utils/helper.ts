/**
 *
 * @param min
 * @param max
 * @returns
 */
export function generateRandomColor(min: number, max: number): string {
  const red = Math.floor(Math.random() * (max - min + 1) + min);
  const green = Math.floor(Math.random() * (max - min + 1) + min);
  const blue = Math.floor(Math.random() * (max - min + 1) + min);

  const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

  return color;
}

/**
 *
 * @param hex
 * @param alpha
 * @returns
 */
export function hexToRgb(hex: string, alpha: number = 1): string {
  let hexValue = hex.replace('#', '');

  // 处理三位简写的颜色码
  if (hexValue.length === 3) {
    hexValue = hexValue
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const red = parseInt(hexValue.substr(0, 2), 16);
  const green = parseInt(hexValue.substr(2, 2), 16);
  const blue = parseInt(hexValue.substr(4, 2), 16);

  if (alpha < 1) {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  } else {
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
