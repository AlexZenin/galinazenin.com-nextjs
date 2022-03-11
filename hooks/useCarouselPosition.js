import { useState, useRef, useEffect } from "react";

export const useCarouselPosition = ({
  root = null,
  rootMargin = "0px",
  threshold = 0.5,
}) => {
  const [entryIndex, updateEntryIndex] = useState(null);
  const [nodes, setNodes] = useState([]);

  const observer = useRef(null);

  function onIntersectionObserved(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
        const intersectingIndex = Array.from(
          entry.target.parentNode.children
        ).indexOf(entry.target);
        updateEntryIndex(intersectingIndex);
      }
    });
  }

  let scrollToNext = () => {
    if (entryIndex < nodes.length - 1) {
      scrollToElement(entryIndex + 1);
    }
  };

  let scrollToPrevious = () => {
    if (entryIndex > 0) {
      scrollToElement(entryIndex - 1);
    }
  };

  let scrollToElement = (index) => {
    nodes[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      (entries) => onIntersectionObserved(entries),
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const { current: currentObserver } = observer;

    if (nodes !== []) {
      nodes.forEach((node) => {
        observer.current.observe(node);
      });
    }

    return () => currentObserver.disconnect();
  }, [nodes, root, threshold]);

  return [
    setNodes,
    entryIndex,
    scrollToElement,
    scrollToNext,
    scrollToPrevious,
  ];
};
