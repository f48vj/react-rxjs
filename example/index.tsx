import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { interval } from 'rxjs';
import { useObservable } from '../.';

const intervalInst = interval(500);

const App = () => {
  const count = useObservable(intervalInst);
  return (
    <div>
      {count}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
