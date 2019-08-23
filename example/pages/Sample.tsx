import * as React from 'react';
import { Component } from 'react';
import { Counter } from '../components';
import { BehaviorSubject, Subscription } from 'rxjs';

export class Sample extends Component<any, { count: number }> {
  count$ = new BehaviorSubject(0);
  subscription: Subscription;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.subscription = this.count$.subscribe(count =>
      this.setState({ count })
    );
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>sample</h2>
        <Counter
          count={count}
          plusOne={() => this.count$.next(this.count$.value + 1)}
          minusOne={() => this.count$.next(this.count$.value - 1)}
        />
      </div>
    );
  }
}
