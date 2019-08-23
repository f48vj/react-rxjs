import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Counter } from '../components';
import { useSelector, useDispatch } from 'react-redux';

function ConnectedCounter() {
  const count = useSelector<any, any>(state => state.count);
  const dispatch = useDispatch();
  return (
    <Counter
      count={count}
      plusOne={() => dispatch({ type: 'plus-one-async' })}
      minusOne={() => dispatch({ type: 'minus-one-async' })}
    />
  );
}

export function ReduxObservable() {
  return (
    <div>
      <h2>redux-observable</h2>
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    </div>
  );
}
