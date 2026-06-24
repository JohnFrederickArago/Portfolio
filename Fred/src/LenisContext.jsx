/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useRef } from "react";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  const setLenis = useCallback((instance) => {
    lenisRef.current = instance;
  }, []);

  const scrollTo = useCallback((target, options) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else {
      window.scrollTo(0, target);
    }
  }, []);

  const value = useMemo(
    () => ({
      lenisRef,
      setLenis,
      scrollTo,
    }),
    [setLenis, scrollTo],
  );

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
