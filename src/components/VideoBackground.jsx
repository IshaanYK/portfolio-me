export default function VideoBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-dark-surface/80 backdrop-blur-[3px] z-10"></div>

            {/* 
        The video file should be placed in the /public folder at the root of the project.
        By default, this looks for 'background.mp4'
      */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover scale-105"
            >
                <source src={`${import.meta.env.BASE_URL}background.mp4`} type="video/mp4" />
                {/* Fallback for browsers that don't support mp4 */}
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
