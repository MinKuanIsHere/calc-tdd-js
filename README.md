# Calc TDD 專案

這是使用 Test-Driven Development (TDD) 實作的簡單計算機程式，支援加、減、乘、除，並使用 Jest 撰寫單元測試，包含輸入驗證與錯誤處理。

## 功能介紹

- 使用浮點數運算 (double)
- 支援加法、減法、乘法、除法
- 非數字輸入將拋出錯誤
- 除以 0 將拋出錯誤
- 使用 Jest 撰寫測試
- CI 整合 GitHub Actions + Coverage

## 安裝與執行

```bash
npm install
npm test
npm test -- --coverage
```

## 測試結果

- 所有功能皆通過測試
- 覆蓋率 Coverage：100%
- 已整合 GitHub Actions，自動測試與報告

## 專案結構

```
calc-tdd-js/
├── calc.js           # 主程式
├── calc.test.js      # 測試檔案
├── coverage/         # 自動產生的測試覆蓋率報告
├── calculator_spec.md# 規格書
├── narrative.md      # TDD 步驟紀錄
├── README.md
└── .github/workflows/test.yml
```