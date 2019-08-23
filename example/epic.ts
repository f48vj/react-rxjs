import { ActionsObservable, ofType, combineEpics } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

const PlusOneEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType('plus-one-async'),
    delay(500),
    mapTo({ type: 'plus-one' })
  );

const minusOneEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType('minus-one-async'),
    delay(500),
    mapTo({ type: 'minus-one' })
  );

export const rootEpic = combineEpics(PlusOneEpic, minusOneEpic);
