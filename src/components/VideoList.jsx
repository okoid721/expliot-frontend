import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);

  // Fetch videos from the server
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/videos');
        console.log('Fetched videos:', response.data.videos);
        setVideos(response.data.videos);
        setFilteredVideos(response.data.videos); // Initially display all videos
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
    };
    fetchVideos();
  }, []);

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter videos based on the caption
    const filtered = videos.filter((video) =>
      video.caption.toLowerCase().includes(query)
    );
    setFilteredVideos(filtered);
  };

  // Function to copy video URL to clipboard
  const handleShare = (videoPath) => {
    const videoUrl = `http://localhost:5000/${videoPath}`;
    navigator.clipboard.writeText(videoUrl)
      .then(() => {
        alert('Video URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Error copying URL to clipboard', err);
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-gray-900 text-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8">AVAILABLE VIDEOS</h2>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by caption..."
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video._id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-all">
              <video width="100%" height="auto" controls className="rounded-lg">
                <source src={`http://localhost:5000/${video.videoPath}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-semibold mt-4">{video.caption}</h3>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleShare(video.videoPath)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Share
                </button>
                <span className="text-gray-400 text-sm">Video ID: {video._id}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-white text-lg font-semibold">
            <p>Please join the premium channel to watch this video.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoList;
