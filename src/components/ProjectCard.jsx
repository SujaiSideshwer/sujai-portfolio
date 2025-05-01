import { useState } from "react";

export function ProjectCard({ title, description, repo, media }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Project Details */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="whitespace-pre-line mb-4">{description}</p>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View GitHub Repo
        </a>
      </div>

      {/* Slideshow */}
      <div className="flex-1 w-full max-w-md">
        <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          {/* Media */}
          {media[current].src.endsWith(".mp4") ? (
            <video
              src={media[current].src}
              controls
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={media[current].src}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-contain"
            />
          )}

          {/* Slide Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-1 rounded-full shadow"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-1 rounded-full shadow"
          >
            ▶
          </button>

          {/* Slide Number */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {current + 1} / {media.length}
          </div>
        </div>

        {/* Caption */}
        <p className="mt-2 text-center text-sm text-gray-500 italic">
          {media[current].caption}
        </p>
      </div>
    </div>
  );
}
