import React, { useEffect, useState } from "react";
import "./upBtn.css";

const UpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const opacity = {
    opacity: isVisible ? "1" : "0",
  };

  return (
    <div className="up-btn" style={opacity} onClick={handleClick}>
      <h4>UP</h4>
    </div>
  );
};

export default UpBtn;
