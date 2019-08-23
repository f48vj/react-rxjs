import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(observable$: Observable<T>, initState?: T) {
    const [state, setState] = useState(initState);

    useEffect(() => {
        const subscription = observable$.subscribe((value) => setState(value));
        return () => subscription.unsubscribe();
    }, [observable$]);
    return state;
}