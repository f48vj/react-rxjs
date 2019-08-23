import * as React from 'react';

export function Counter({ count, plusOne, minusOne }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={minusOne}>-1</button>
      <button onClick={plusOne}>+1</button>
    </div>
  );
}
