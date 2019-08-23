import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UseObservable } from './pages'; 

export function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/useObservable/">useObservable</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={UseObservable} />
        <Route path="/useObservable/" component={UseObservable} />
      </div>
    </Router>
  );
}
