import React, { useState, useEffect } from "react";

export const Detail = () => (
  <div>
    <h2>My Work Details</h2>
    <p>Here is a description of my work, along with some images and videos.</p>
    <img src="https://via.placeholder.com/150" alt="Placeholder" />
    <video width="320" height="240" controls>
      <source src="your-video-url.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

// Modal Component
export const Modal = ({ id, isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the modal is unmounted or closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the modal is unmounted or closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[75vw] h-[75vh] bg-gray-900 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl z-10"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Video Player */}
        <video className="w-full h-full object-cover" src={videoUrl} autoPlay />
      </div>
    </div>
  );
};
