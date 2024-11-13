import React, { useEffect } from "react";

interface ImageOverlayProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  imageUrl,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-100 flex justify-center items-center"
      data-testid="overlay-background"
      onClick={handleClose}
    >
      <div className="relative top-0 max-w-full max-h-full p-2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 px-4 py-2 rounded-full"
          data-testid="close-overlay-button"
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt="Fullscreen"
          data-testid="image-overlay"
          className="max-w-full max-h-[480px] object-contain"
        />
      </div>
    </div>
  );
};

export default ImageOverlay;
