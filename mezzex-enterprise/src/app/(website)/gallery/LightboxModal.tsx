'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxMedia {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface LightboxModalProps {
  mediaItems: LightboxMedia[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  mediaItems,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const media = mediaItems[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
          absolute
          right-5
          top-5
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white/15
          text-white
          backdrop-blur
          transition
          hover:bg-white/25
        "
      >
        <X size={24} />
      </button>

      {/* Previous */}
      {mediaItems.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="
            absolute
            left-4
            md:left-8
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-white
            backdrop-blur
            hover:bg-white/25
          "
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Content */}
      <div
        className="
          relative
          w-full
          max-w-6xl
          animate-in
          fade-in
          zoom-in
          duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === 'image' ? (
          <div className="relative">
            <Image
              src={media.src}
              alt={media.alt}
              width={1600}
              height={1000}
              priority
              className="
                max-h-[85vh]
                w-auto
                rounded-2xl
                object-contain
                mx-auto
                shadow-2xl
              "
            />
          </div>
        ) : (
          <video
            src={media.src}
            controls
            autoPlay
            className="
              max-h-[85vh]
              w-full
              rounded-2xl
              shadow-2xl
            "
          />
        )}

        {/* Counter */}
        {mediaItems.length > 1 && (
          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              rounded-full
              bg-black/60
              px-4
              py-2
              text-sm
              text-white
              backdrop-blur
            "
          >
            {currentIndex + 1} / {mediaItems.length}
          </div>
        )}
      </div>

      {/* Next */}
      {mediaItems.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="
            absolute
            right-4
            md:right-8
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-white
            backdrop-blur
            hover:bg-white/25
          "
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}