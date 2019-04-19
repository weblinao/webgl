export default {
  /**
   * 随机生成颜色
   * @returns {{r: number, g: number, b: number, a: number}}
   */
  rendomColor() {
    const r = (Math.random() * 255) | 0;
    const g = (Math.random() * 255) | 0;
    const b = (Math.random() * 255) | 0;
    const a = Math.random() * 1;
    return {r, g, b, a}
  },
  /**
   * 修改canvas大小
   * @param canvas
   * @param width
   * @param height
   */
  resizeCanvas(canvas, width = window.innerWidth, height = window.innerHeight) {
    if (canvas.width !== width) {
      canvas.width = width;
    }
    if (canvas.height !== height) {
      canvas.height = height;
    }
  }
}
