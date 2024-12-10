import React from 'react';

const YouTubeVideo = () => {
    return (
        <div>
            <h2></h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gpXHwoH6gms?si=cpsoj08ZuNSLcgPl"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;
