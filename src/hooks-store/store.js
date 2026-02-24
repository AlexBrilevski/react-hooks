import { useEffect, useState } from "react";

const globalState = {};
let listeners = [];

const useStore = () => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(listener => listener !== setState);
    };
  }, [setState]);
};
