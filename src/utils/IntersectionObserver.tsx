import { useState, useRef, useEffect, MutableRefObject } from "react";

//hook a component to run a passed function after target viewed
// especially infinite scroll
export const useIntersectionObserver = (
  { root = null, rootMargin, threshold = 0 }: IntersectionObserverInit,
  onView: Function
): [MutableRefObject<any>] => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsLoaded(entry.isIntersecting),
      {
        root,
        rootMargin,
        threshold,
      }
    );
    observer.disconnect();

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef.current]);

  if (isLoaded) {
    onView();
  }

  return [containerRef];
};
