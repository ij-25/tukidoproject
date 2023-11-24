import React from 'react'

const Video = () => {
    return (
        <div>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
                    width={1500}
                    height={700}
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen=""
                />
            </div>
        </div>
    )
}

export default Video
