from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.v1.routes import router as calculate_router


app = FastAPI(
    title="Calculator API",
    description="Simple calculator with history tracking",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Calculator API"}


@app.include_router(calculate_router)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
