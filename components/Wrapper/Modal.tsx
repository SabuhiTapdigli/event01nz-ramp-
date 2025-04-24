"use client";
import React, { useState, useEffect } from "react";

const Modal = ({ isVisible, children }: any) => {
  const [userScrolled, setUserScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setUserScrolled(true); // Set to true when the user scrolls
    };

    window.addEventListener("scroll", handleScroll, { once: true }); // Trigger only on the first scroll

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Show modal only if both apiCondition and userScrolled are true
    if (isVisible) {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      setIsOpen(false);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black bg-opacity-50">
      <div className="fixed inset-0 overflow-y-auto p-4 flex items-center justify-center">
        <div className="relative rounded-lg bg-white  shadow-lg max-h-full overflow-y-auto w-full">
          <button
            className="absolute right-4 top-4 rounded-full bg-red-500 p-2 text-white"
            onClick={handleClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
