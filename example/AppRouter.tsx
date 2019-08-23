import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Sample, UseObservable, ReduxObservable } from './pages'; 

export function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/sample/">sample</Link>
            </li>
            <li>
              <Link to="/useObservable/">useObservable</Link>
            </li>
            <li>
              <Link to="/redux-observable/">redux-observable</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Sample} />
        <Route path="/sample/" component={Sample} />
        <Route path="/useObservable/" component={UseObservable} />
        <Route path="/redux-observable/" component={ReduxObservable} />
      </div>
    </Router>
  );
}
