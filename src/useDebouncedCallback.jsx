import { useEffect, useRef } from "react";

export function useDebouncedCallback(callback, delay) {
  //console.log(callback, delay);
  const timerRef = useRef(null);
  const callbackRef = useRef(callback);
  useEffect(() => {
    console.log("callback changed", callback);
    callbackRef.current = callback;
  }, [callback]);

  function debouncedCallback(...args) {
    //console.log("inside debounced callback");
    //console.log("clearing timer ref", timerRef.current);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      console.log("args", ...args, "callback", callback);
      callback(...args);
    }, delay);
    //console.log("new timer ref", timerRef.current);
  }
  useEffect(() => {
    return function () {
      //console.log("final clearing timer ref", timerRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);
  return debouncedCallback;
}
