from typing import Optional
import re

from domain.exceptions import InvalidExpressionError


def validate_expression(expression: str) -> bool:
    """Validate that expression only contains numbers and operators."""
    allowed_pattern = r'^[0-9+\-*/. ]+$'
    return bool(re.match(allowed_pattern, expression))


def calculate(expression: str) -> float:
    """Perform calculation on the given expression."""
    if not expression.strip():
        raise InvalidExpressionError("Expression cannot be empty")
    
    if not validate_expression(expression):
        raise InvalidExpressionError("Invalid characters in expression")
    
    try:
        # Sanitize input
        sanitized = re.sub(r'[^\d.+\-*/()]', '', expression)
        
        if not sanitized:
            raise InvalidExpressionError("No valid numbers in expression")
        
        # Check for balanced parentheses
        if sanitized.count('(') != sanitized.count(')'):
            raise InvalidExpressionError("Unbalanced parentheses")
        
        # Evaluate expression safely
        result = eval(sanitized)
        
        if isinstance(result, float):
            # Round to 4 decimal places
            result = round(result, 4)
        
        return result
    except ZeroDivisionError:
        raise InvalidExpressionError("Division by zero")
    except SyntaxError:
        raise InvalidExpressionError("Invalid syntax")
    except Exception as e:
        raise InvalidExpressionError(f"Calculation error: {str(e)}")


def format_result(result: float) -> str:
    """Format result to 4 decimal places, removing trailing zeros."""
    formatted = f"{result:.4f}"
    return formatted.rstrip('0').rstrip('.') if '.' in formatted else formatted
