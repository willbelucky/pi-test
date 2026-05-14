from typing import List, Optional

from domain.models import Calculation


class InMemoryHistoryCache:
    """In-memory cache for calculation history."""
    
    def __init__(self, max_size: Optional[int] = None):
        self._cache: List[Calculation] = []
        self._max_size = max_size
    
    def add(self, calculation: Calculation) -> None:
        """Add a calculation to history."""
        self._cache.append(calculation)
        
        # Remove oldest entries if max_size is reached
        if self._max_size and len(self._cache) > self._max_size:
            self._cache = self._cache[-self._max_size:]
    
    def get_all(self) -> List[Calculation]:
        """Get all calculations in history (newest last)."""
        return self._cache.copy()
    
    def get_last(self) -> Optional[Calculation]:
        """Get the most recent calculation."""
        if self._cache:
            return self._cache[-1]
        return None
    
    def clear(self) -> None:
        """Clear all history."""
        self._cache.clear()

# Global cache instance
_history_cache = InMemoryHistoryCache()


def get_history_cache() -> InMemoryHistoryCache:
    """Get the global history cache instance."""
    return _history_cache
