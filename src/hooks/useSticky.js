import { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 200))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  })
  
  return { isSticky, element }
}

export default useSticky