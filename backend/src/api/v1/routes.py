from fastapi import APIRouter

from application.calc_service import calculate, format_result
from application.history_service import get_history_cache
from .calculate import CalculateRequest, CalculateResponse
from .history import HistoryItem, HistoryResponse

router = APIRouter(prefix="/api", tags=["calculator"])


@router.post("/calculate", response_model=CalculateResponse)
async def calculate_endpoint(request: CalculateRequest):
    """Perform calculation on the given expression."""
    result = calculate(request.expression)
    formatted_result = format_result(result)
    
    # Save to history
    get_history_cache().add(
        type('Calculation', (), {
            'expression': request.expression,
            'result': result,
            'timestamp': int(__import__('time').time() * 1000)
        })()
    )
    
    return CalculateResponse(
        result=result,
        formatted_result=formatted_result
    )


@router.get("/history", response_model=HistoryResponse)
async def history_endpoint():
    """Get all calculation history."""
    cache = get_history_cache()
    history = cache.get_all()
    
    history_items = [
        HistoryItem(
            expression=h.expression,
            result=h.result,
            timestamp=h.timestamp
        )
        for h in history
    ]
    
    return HistoryResponse(history=history_items)
