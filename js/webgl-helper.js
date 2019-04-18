export default {
  /**
   * 获取canvas对象
   * @param id canvasID名
   * @returns {Element | null}
   */
  getCanvas(id) {
    return document.querySelector(`#${id}`);
  },
  /**
   * 获取webgl绘图环境
   * @param canvas
   * @returns {(CanvasRenderingContext2D | null) | (WebGLRenderingContext | null) | (CanvasRenderingContext2D | WebGLRenderingContext | null)}
   */
  getWebGLContext(canvas) {
    return canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  },
  /**
   * 创建着色器对象
   * @param gl gl对象
   * @param glType 着色器类型
   * @param scriptID 着色器程序所在scriptID
   * @returns {WebGLShader}
   */
  createShaderFromScript(gl, glType, scriptID) {
    // 获取着色器源码
    let shaderSource = document.querySelector(`#${scriptID}`).innerHTML;
    // 创建着色器对象
    let shader = gl.createShader(glType);
    // 将源码分配给着色器对象
    gl.shaderSource(shader, shaderSource);
    // 编译着色器程序
    gl.compileShader(shader);

    return shader;
  },
  /**
   * 创建着色器程序
   * @param gl gl对象
   * @param vertexShader 顶点着色器
   * @param fragmentShader 片元着色器
   * @returns {*|WebGLProgram}
   */
  createProgram(gl, vertexShader, fragmentShader) {
    let program = gl.createProgram();
    // 将顶点着色器挂载到着色器程序上
    gl.attachShader(program, vertexShader);
    // 将片元着色器挂载到着色器程序上
    gl.attachShader(program, fragmentShader);
    // 链接着色器程序
    gl.linkProgram(program);

    return program;
  }
}
