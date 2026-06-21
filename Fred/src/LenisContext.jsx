import { createContext, useContext, useRef } from "react";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  const setLenis = (instance) => {
    lenisRef.current = instance;
  };

  const scrollTo = (target, options) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else {
      window.scrollTo(0, target);
    }
  };

  const value = {
    lenisRef,
    setLenis,
    scrollTo,
  };

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
