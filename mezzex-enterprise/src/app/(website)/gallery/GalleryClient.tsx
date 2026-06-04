'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LightboxModal, { LightboxMedia } from './LightboxModal';

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface VideoItem extends GalleryItem {
  thumb: string;
}

export interface GalleryClientProps {
  images: GalleryItem[];
  videos: VideoItem[];
  mediaItems: LightboxMedia[];
}

const classMap: Record<string, string> = {
  all: 'border-blue-600 text-white bg-blue-600',
  image: 'border-green-600 text-green-600',
  video: 'border-purple-600 text-purple-600',
};

export default function GalleryClient({
  images,
  videos,
}: GalleryClientProps) {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const mediaItems = useMemo<LightboxMedia[]>(() => {
    if (filter === 'image') {
      return images.map((img) => ({
        type: 'image',
        src: img.src,
        alt: img.alt,
      }));
    }

    if (filter === 'video') {
      return videos.map((vid) => ({
        type: 'video',
        src: vid.src,
        alt: vid.alt,
      }));
    }

    return [
      ...images.map((img) => ({
        type: 'image' as const,
        src: img.src,
        alt: img.alt,
      })),
      ...videos.map((vid) => ({
        type: 'video' as const,
        src: vid.src,
        alt: vid.alt,
      })),
    ];
  }, [filter, images, videos]);

  const filteredImages =
    filter === 'all' || filter === 'image' ? images : [];

  const filteredVideos =
    filter === 'all' || filter === 'video' ? videos : [];

  return (
    <>
{/* Heading */}
<div className="text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
    Gallery
  </h1>
</div>
{/* Filter */}
<div className="flex flex-wrap justify-center gap-3">
  {['all', 'image', 'video'].map((type) => (
    <button
      key={type}
      type="button"
      onClick={() => setFilter(type as 'all' | 'image' | 'video')}
      className={`
        rounded-full
        border
        px-5
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        ${
          filter === type
            ? classMap[type]
            : 'border-gray-300 bg-white text-gray-700 hover:border-blue-500'
        }
      `}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  ))}
</div>


<div className='bg-black p-12'>
      {/* Gallery */}
<motion.section
  className="container  mx-auto px-3 pb-4 md:pb-8 lg:pb-3"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Images */}
          {filteredImages.map((img) => {
            const index =
              filter === 'image'
                ? filteredImages.findIndex((x) => x.id === img.id)
                : mediaItems.findIndex((x) => x.src === img.src);

            return (
              <motion.div
                key={img.id}
                onClick={() => setCurrentIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                className="
  h-[240px]
  sm:h-[260px]
  md:h-[280px]
  w-full
  object-cover
  transition-transform
  duration-500
  group-hover:scale-110
"
                />
              </motion.div>
            );
          })}

          {/* Videos */}
          {filteredVideos.map((vid) => {
            const index =
              filter === 'video'
                ? filteredVideos.findIndex((x) => x.id === vid.id)
                : mediaItems.findIndex((x) => x.src === vid.src);

            return (
              <motion.div
                key={vid.id}
                onClick={() => setCurrentIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={vid.thumb}
                  alt={vid.alt}
                  width={600}
                  height={400}
               className="
  h-[240px]
  sm:h-[260px]
  md:h-[280px]
  w-full
  object-cover
  transition-transform
  duration-500
  group-hover:scale-110
"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div
  className="
    flex
    h-14
    w-14
    md:h-16
    md:w-16
    items-center
    justify-center
    rounded-full
    bg-white/95
    shadow-xl
    transition-transform
    duration-300
    group-hover:scale-110
  "
>
                    <svg
                      className="ml-1 h-7 w-7 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

</div>

      {/* Lightbox */}
      {currentIndex !== null && (
        <LightboxModal
          mediaItems={mediaItems}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onPrev={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? mediaItems.length - 1 : (prev ?? 0) - 1
            )
          }
          onNext={() =>
            setCurrentIndex((prev) =>
              prev === mediaItems.length - 1 ? 0 : (prev ?? 0) + 1
            )
          }
        />
      )}
    </>
  );
}