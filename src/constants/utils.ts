import { MutableRefObject } from 'react';
/**
 * A debounce function using refs so that the timer persists between renders
 * @param {*} func - the function to be run after a delay
 * @param {*} delay - the delay in milliseconds
 * @param {*} ref - used to persist the timerID
 */

type DebounceFn = (
  func: () => void,
  delay: number,
  ref: MutableRefObject<ReturnType<typeof setTimeout>>,
) => void;

export const debounceWithRef: DebounceFn = (func, delay, ref) => {
  if (ref.current) {
    clearTimeout(ref.current);
  }

  ref.current = setTimeout(func, delay);
};
