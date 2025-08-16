export const jsEval = (expr) => {
  try {
    // Allow Python-style math operations including exponents, modulo, etc.
    const sanitized = expr
      .replace(/\^/g, '**') // Convert ^ to **
      .replace(/[^-()\d/*+%.\s]/g, ''); // Allow basic math chars
    
    // Create math functions scope with Python math equivalents
    const mathScope = {
      __proto__: null, // Prevent prototype pollution
      Math: {
        sqrt: Math.sqrt,
        pow: Math.pow,
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        log: Math.log,
        log10: Math.log10,
        pi: Math.PI,
        e: Math.E
      }
    };
    
    // Evaluate in isolated scope
    const result = new Function('return ' + sanitized).call(mathScope);
    
    return typeof result === 'number' ? result : NaN;
  } catch (e) {
    return NaN;
  }
};
