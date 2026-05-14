from dataclasses import dataclass
from typing import Optional


@dataclass
class Calculation:
    """Domain model for a single calculation."""
    expression: str
    result: float
    timestamp: int
