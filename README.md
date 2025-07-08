# useDebounceCallback

## This template provides a minimal way to debounce any function using a custom hook. Here the useDebounceCallback can be made better.

`function debouncedCallback(...args) {
    //console.log("inside debounced callback");
    console.log("clearing timer ref", timerRef.current);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      console.log("args", ...args);
      callback(...args);
    }, delay);
    console.log("new timer ref", timerRef.current);
  } `

## this debouncedCallback could be turned into a stable function using useCallback hook to that in case of re-renders, we don't need to keep re-creating the same function. This useCallback is needed if we pass the `debouncedSearch ` to its child components. We could also use a callbackRef to get the latest callback using a useEffect.
