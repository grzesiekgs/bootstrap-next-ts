import { useRef } from 'react';

export function debounce<DebounceCallback extends AnyFunction, Args extends any[] = Parameters<DebounceCallback>>(
  callback: DebounceCallback,
  timeout: number,
  immediate?: boolean
) {
  let timeoutID: Optional<NodeJS.Timeout>;

  function debounceTimeout(context: any, args: Args) {
    timeoutID = undefined;

    if (!immediate) {
      callback.apply(context, args);
    }
  }

  return function (...args: Args) {
    const immediateCall = immediate && !timeoutID;
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    if (timeoutID !== undefined) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(debounceTimeout, timeout, context, args);

    if (immediateCall) {
      callback.apply(context, args);
    }
  };
}

export const useDebounce = <DebounceCallback extends AnyFunction, Args extends any[] = Parameters<DebounceCallback>>(
  callback: DebounceCallback,
  timeout: number
) => {
  const lastCallTime = useRef<Nullable<number>>(null);

  return (...args: Args) => {
    if (lastCallTime.current === null) {
      lastCallTime.current = Date.now();

      return;
    }

    const callTime = Date.now();
    const callTimeDiff = callTime - lastCallTime.current;

    if (callTimeDiff >= timeout) {
      callback(...args);

      lastCallTime.current = callTime;
    }
  };
};
