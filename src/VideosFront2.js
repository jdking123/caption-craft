


 export default function VideosFront2() {
  return (
    <div className="hidden border-2 broder-white sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
    <video autoPlay loop muted controls >
          {/* Directly reference the video file from the public directory */}
          <source src="/vids/withoutcaps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> 
    </div>
   
  );
}

