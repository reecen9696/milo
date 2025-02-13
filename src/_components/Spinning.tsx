import { useEffect, useState } from "react";
import spinIcon from "../assets/spinning.png"; // Replace with your image

const SpinningIcon = () => {
  const [rotation, setRotation] = useState(0);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 1 : -1; // Detect direction (down = right, up = left)
      setRotation((prev) => prev + direction * 5); // Adjust rotation speed
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      src={spinIcon}
      alt="Spinning Icon"
      className="fixed bottom-7 w-20 left-[48%] z-[9999] transform -translate-x-1/2"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default SpinningIcon;
