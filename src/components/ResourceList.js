import React from 'react';

// YouTube Channel Logo
const youtubeLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

// Function to extract YouTube video ID from a URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

function ResourceList({ resources }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {resources.map((resource, index) => (
        <div
          key={index}
          className="flex flex-col bg-gray-800 hover:bg-white transform hover:scale-105 transition duration-300 ease-in-out shadow-md rounded-lg overflow-hidden text-white hover:text-black w-full h-full"
        >
          <div className="flex-grow p-5">
            <h3 className="text-lg font-semibold mb-2">{resource.name}</h3>
            <p className="text-sm mb-4">{resource.description}</p>

            {/* Render YouTube content based on type */}
            {resource.type === 'YouTube Video' ? (
              // Embed the YouTube video
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(resource.url)}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={resource.name}
                />
              </div>
            ) : resource.type === 'YouTube Channel' ? (
              // Display YouTube channel logo and link
              <div className="flex items-center justify-center mb-4">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <img
                    src={youtubeLogo}
                    alt="YouTube Channel"
                    className="w-16 h-16 mb-2"
                  />
                  <span className="text-blue-400 hover:text-blue-700 font-medium">Visit YouTube Channel</span>
                </a>
              </div>
            ) : (
              // For other types of resources
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-700 font-medium"
              >
                {resource.url}
              </a>
            )}
          </div>

          <div className="bg-gray-900 hover:bg-gray-200 p-3 text-right">
            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {resource.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceList;
