import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FULL STACK WEB DEVELOPER', 'FRONTEND DEVELOPER', 'FLUTTER DEVELOPER'],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypingAnimation;
