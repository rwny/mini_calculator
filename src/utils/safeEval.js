export const safeEval = (expr) => {
  try {
    // Replace simple math expressions with their evaluated result
    if (/^[\d+\-*/(). ]+$/.test(expr)) {
      return eval(expr);
    }
    return parseFloat(expr);
  } catch (e) {
    return NaN;
  }
};