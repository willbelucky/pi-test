from pydantic import BaseModel


class CalculateRequest(BaseModel):
    expression: str


class CalculateResponse(BaseModel):
    result: float
    formatted_result: str
