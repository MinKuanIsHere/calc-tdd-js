# Calc TDD 開發敘述

本專案使用 TDD 方式完成，開發流程如下：

---

## ➕ Step 1: add(a, b)

1. 撰寫測試：預期 1.2 + 3.4 = 4.6
2. 執行測試失敗（紅燈）
3. 加入 `add()` 方法，return a + b
4. 測試通過（綠燈）

---

## ➖ Step 2: subtract(a, b)

1. 撰寫測試：5.5 - 2 = 3.5 等
2. 初始失敗 → 加入 subtract 方法
3. 綠燈通過

---

## ✖️ Step 3: multiply(a, b)

1. 撰寫正負數乘法與 0 測試
2. 新增 multiply 方法 → 測試通過

---

## ➗ Step 4: divide(a, b)

1. 撰寫除法測試 + 除以 0 應拋出錯誤
2. 加入 divide 方法並加上錯誤處理
3. 所有情境測試通過

---

## 🔒 Step 5: 輸入驗證

1. 撰寫錯誤測資（非數字輸入）
2. 所有方法共用 `validateInput(a, b)`
3. 非 number、NaN 皆會拋出錯誤
4. 全部方法測試通過

---

## ✅ CI & Coverage

- 使用 GitHub Actions 自動執行 `npm test -- --coverage`
- Coverage 達 100%
- 已在本機產生 HTML 報表

---
