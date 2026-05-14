# Calculator

A web calculator with frontend (Next.js) and backend (FastAPI) separation.

## Structure

### Frontend (Next.js)
- Feature-Sliced Design Architecture
  - `features/calculator/` — Calculator state management and logic
  - `entities/calculator-history/` — History entity (zustand store)
  - `shared/ui/` — Reusable components (Button, Display)
  - `widgets/CalculatorLayout/` — Main layout with history sidebar
  - `app/` — Next.js App Router pages

### Backend (FastAPI)
- Clean Architecture
  - `domain/` — Core domain logic and models
  - `application/` — Application services (calculation, history)
  - `infrastructure/` — External dependencies
  - `api/` — HTTP API endpoints

## Features

- **Frontend:**
  - Mouse-based input
  - Four basic operations (+, -, ×, ÷)
  - 4 decimal places support
  - Calculation history (stored in browser state)
  - Keyboard support

- **Backend:**
  - RESTful API
  - In-memory history cache (volatile)
  - Input validation

## Getting Started

### Frontend

```bash
cd calculator/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Backend

```bash
cd calculator/backend
pip install -r requirements.txt  # or poetry install
uvicorn src.api.main:app --reload
```

API runs on [http://localhost:8000](http://localhost:8000)
