import { useState, useEffect, useCallback, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLImageElement>(null);
  const rafId = useRef<number>(null);
  const lastUpdateTime = useRef<number>(0);
  const THROTTLE_MS = 7;

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    const now = performance.now();

    if (now - lastUpdateTime.current >= THROTTLE_MS) {
      lastUpdateTime.current = now;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame for smoother animation
      rafId.current = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    },
    [updatePosition]
  );

  useEffect(() => {
    // Initial position
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Create and inject global CSS to hide the default cursor
    const style = document.createElement("style");
    style.textContent = `
      * {
        cursor: none !important;
      }
      ::selection {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener("mousemove", handleMouseMove);

    document.body.style.cursor = "none";

    // Set up hover effects for interactive elements
    const addHoverToInteractive = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, [role="button"]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (cursorRef.current)
            cursorRef.current.style.transform += " scale(1.2)";
        });

        el.addEventListener("mouseleave", () => {
          if (cursorRef.current) {
            cursorRef.current.style.transform =
              cursorRef.current.style.transform.replace(" scale(1.2)", "");
          }
        });
      });
    };

    addHoverToInteractive();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
      document.head.removeChild(style); // Clean up the style element
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <img
      ref={cursorRef}
      src="/cutecursor.png"
      alt=""
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  );
};

export default CustomCursor;
