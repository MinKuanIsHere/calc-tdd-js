class Calc {
  // 共用驗證方法
  validateInput(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      throw new Error('Invalid input: both arguments must be numbers');
    }
  }

  // 加法
  add(a, b) {
    this.validateInput(a, b);
    return a + b;
  }

  // 減法
  subtract(a, b) {
    this.validateInput(a, b);
    return a - b;
  }

  // 乘法
  multiply(a, b) {
    this.validateInput(a, b);
    return a * b;
  }

  // 除法（含除以 0 錯誤處理）
  divide(a, b) {
    this.validateInput(a, b);
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

module.exports = Calc;
