import { useEffect, useRef } from 'react'
import './UseAutoScroll.css'

const UseAutoScroll = (dependencies) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [dependencies]);

  return containerRef;
}

export default UseAutoScroll