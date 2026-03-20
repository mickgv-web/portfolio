import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false); // <--- Nuevo estado

  useEffect(() => {
    const handleScroll = () => {
      // 1. Lógica para mostrar/ocultar el botón
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Lógica para detectar si estamos en el footer
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      const footerHeight = 100; // Ajusta este valor según el alto de tu footer

      if (scrollHeight - scrollPos < footerHeight) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          // Añadimos la clase dinámica 'is-footer'
          className={`scroll-to-top ${isAtFooter ? 'is-footer' : ''}`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Volver arriba"
        >
          <FiArrowUp />
        </Motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;