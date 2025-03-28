# Calc TDD Report

- Software Testing – Homework 2
- Author: 陳旻寬（Master Student, NYCU）
- Student ID: 313552009

- This report documents the step-by-step development of a calculator program using **Test-Driven Development (TDD)**, written in **JavaScript (Node.js)**. 
- The version supports four arithmetic operations on floating-point numbers, with complete input validation and 100% test coverage using Jest.

---

## Development Environment

- Node.js v18+
- npm (Node Package Manager)
- Git (for version control)

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/MinKuanIsHere/calc-tdd-js.git
cd calc-tdd-js

# Install dependencies
npm install

# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage
```

> To open the HTML coverage report:
> - On macOS/Linux: `open coverage/lcov-report/index.html`
> - On Windows/WSL: `explorer.exe coverage/lcov-report/index.html`

---

## Calculator Specification

| Function        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `add(a, b)`      | Returns the sum of two numbers                                              |
| `subtract(a, b)` | Returns the difference between a and b                                      |
| `multiply(a, b)` | Returns the product of two numbers                                           |
| `divide(a, b)`   | Returns the quotient of a and b. Throws an error when `b == 0`              |

### Input Requirements

- Inputs must be of type **number** (floats or integers)
- If either input is `NaN`, a non-number (e.g., string, null), an error will be thrown:
  ```
  Error: Invalid input: both arguments must be numbers
  ```

---

## TDD Development Process

TDD is a software development practice that follows this cycle:

```
1. Write a failing test
2. Write the simplest code to pass the test
3. Refactor while keeping tests green
```

Below is a summary of how each function was developed using TDD:

### 1️⃣ `add(a, b)`

- Wrote initial tests:
  - `add(1.2, 3.4) → 4.6`
  - `add(-1, -2.5) → -3.5`
- Initial test failed (method not implemented)
- Implemented `add()` method → All tests passed

### 2️⃣ `subtract(a, b)`

- Designed test cases:
  - `subtract(5.5, 2) → 3.5`
  - `subtract(-3, -2) → -1`
- Implemented `subtract()` method → All tests passed

### 3️⃣ `multiply(a, b)`

- Designed test cases:
  - `multiply(3, 2) → 6`
  - `multiply(-1.5, 2) → -3`
  - `multiply(0, 5) → 0`
- Implemented `multiply()` method → Passed all cases

### 4️⃣ `divide(a, b)`

- Designed tests for:
  - `divide(6, 3) → 2`
  - `divide(-9, 3) → -3`
  - `divide(1, 0)` should throw error
- Implemented `divide()` method with division-by-zero check

### 5️⃣ Input Validation for All Methods

- Created shared helper: `validateInput(a, b)`
- Wrote tests to catch errors for:
  - `add("abc", 2)`
  - `multiply(null, 5)`
  - `subtract(NaN, 1)`
- Refactored all four methods to include validation logic

---

## Test Design Summary

Each function is tested with:

| Case Type             | Examples                          |
|----------------------|-----------------------------------|
| Basic arithmetic     | Positive, negative, and zero      |
| Floating-point math  | e.g., `add(1.2, 3.4) → 4.6`       |
| Error input          | Strings, null, undefined, NaN     |
| Division safety      | `divide(5, 0)` → throws error     |

---

## Project Structure

```
calc-tdd-js/
├── calc.js                # Calculator class implementation
├── calc.test.js           # Jest test suite
├── coverage/              # Auto-generated test coverage report
├── node_modules/          # Installed dependencies (excluded from Git)
├── package.json           # Dependencies and test script
├── package-lock.json      # Lock file
├── .github/
│   └── workflows/
│       └── test.yml       # GitHub Actions CI config
└── README.md              # This report
```

`node_modules/` is ignored via `.gitignore` and regenerated with `npm install`

---

## Results

- All test cases passed
- Test Coverage: 100%
- GitHub Actions CI: Passes on every push
- Screenshot of test and coverage output:

![Test and Coverage Screenshot](image.png)

---

## Conclusion

This assignment demonstrates a clean and systematic application of TDD principles. Each feature was driven by failing tests, followed by implementation and refactoring. Input validation was consistently handled, and the project maintains complete test coverage with CI integration.