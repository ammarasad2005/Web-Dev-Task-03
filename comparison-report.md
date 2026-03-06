# AI vs Student Code Comparison Report — Login System

**Course:** Web Design and Development  
**Task:** Task 3 — Login System using Express.js, MongoDB, Sessions, and Class

---

## Section 1: Introduction

This task required building a login system using Express.js, MongoDB (via Mongoose), express-session, and a JavaScript Class. Two implementations were created: one by a student (human agent), written step-by-step with incremental commits, and one by an AI agent, written in a single clean pass. The purpose of this report is to compare the two approaches and highlight the differences in structure, readability, security, and session handling.

---

## Section 2: Code Overview

**Student Code:** Written step by step across six incremental commits, the student implementation is straightforward and functional. It uses simple patterns such as verbose if/else blocks and string concatenation, reflecting a learning-oriented approach.

**AI Code:** Written in one complete pass, the AI implementation uses arrow function middleware, template literals, HTTP status codes (200, 400, 401, 500), and a more structured Mongoose schema with `unique`, `trim`, and explicit `collection` options. The code is clean, well-organized, and reflects professional development habits.

---

## Section 3: Comparison Table

| Feature | Student Code | AI Code |
|---|---|---|
| Structure | Simple | Advanced |
| Readability | Medium | Easy |
| Security | Basic | Basic |
| Session Handling | Yes | Yes |

### Explanation

- **Structure:** Student code works correctly but uses a flat, sequential style. AI code uses arrow function middleware, schema options (`unique`, `trim`, `collection`), and a `PORT` constant for better organization.
- **Readability:** Student code uses verbose `if/else` patterns and string concatenation. AI code uses early returns, consistent `const`, template literals, and cleaner error naming (`error` not `err`).
- **Security:** Both implementations store passwords in plain text — neither uses hashing, as it was not required by the task. Both are therefore rated Basic. The AI code adds minor input validation and proper HTTP status codes (401, 400), giving slightly better defensive behavior, but fundamentally both are Basic since password hashing is out of scope.
- **Session Handling:** Both implementations correctly use `express-session`, set `req.session.user` on login, and destroy the session on logout. Both pass this requirement fully.

---

## Section 4: Key Differences Observed

The student code is more verbose but easier to follow for a beginner learning Express and MongoDB for the first time. The AI code uses proper HTTP status codes (200, 400, 401, 500), which is better development practice and more informative to API clients. The AI code's Mongoose schema includes `unique: true` and `trim: true` for the username field, which prevents duplicate registrations and trims whitespace automatically. The AI code also uses `collection: 'users'` to explicitly match the required MongoDB collection name specified in the task. Both solutions correctly implement all four required routes (`/register`, `/login`, `/dashboard`, `/logout`) and session behavior.

---

## Section 5: Conclusion

Both implementations fully meet the task requirements, including all four routes, session management, the User class structure, and correct expected output strings. The student approach reflects a natural learning progression through incremental, milestone-based commits. The AI approach reflects professional coding habits — clean structure, proper HTTP semantics, and schema constraints — though both are equally appropriate for the scope of this task.
