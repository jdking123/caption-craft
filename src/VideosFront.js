export default function VideosFront() {
  return (
    <div className="hidden border-2 broder-white sm:block bg-gray-800/50 w-[280px] h-[400px] rounded-xl mx-auto overflow-hidden">
      <video autoPlay loop muted  className="w-full h-full object-cover">
        {/* Directly reference the video file from the public directory */}
        <source src="/vids/withcaps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
