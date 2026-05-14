class CalculationError(Exception):
    """Raised when calculation fails."""
    pass


class InvalidExpressionError(CalculationError):
    """Raised when expression is invalid."""
    pass
