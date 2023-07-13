let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += operator;
  document.getElementById('result').value = currentExpression;
}

function calculate() {
  try {
    const expression = currentExpression.replace('sqrt(', 'Math.sqrt(')
                                        .replace('^', '**')
                                        .replace('sin(', 'Math.sin(')
                                        .replace('cos(', 'Math.cos(')
                                        .replace('tan(', 'Math.tan(');
    const result = eval(expression);
    document.getElementById('result').value = result;
    currentExpression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentExpression = '';
  }
}

function clearResult() {
  currentExpression = '';
  document.getElementById('result').value = '';
}
