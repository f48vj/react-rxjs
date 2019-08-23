import * as React from 'react';
import { interval } from 'rxjs';
import { useObservable } from '../../src';

const intervalInst = interval(500);

export const UseObservable = () => {
  const count = useObservable(intervalInst);
  return (
    <div>
      <h2>useObservable</h2>
      {count}
    </div>
  );
};
