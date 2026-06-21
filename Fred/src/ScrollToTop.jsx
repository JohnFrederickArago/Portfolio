import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "./LenisContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { scrollTo } = useLenis();

  useEffect(() => {
    scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
