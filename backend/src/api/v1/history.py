from typing import List

from pydantic import BaseModel

from domain.models import Calculation


class HistoryItem(BaseModel):
    expression: str
    result: float
    timestamp: int


class HistoryResponse(BaseModel):
    history: List[HistoryItem]
