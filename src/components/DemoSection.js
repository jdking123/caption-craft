import SparklesIcon from "@/components/SparklesIcon";
import VideosFront from "@/VideosFront";
import VideosFront2 from "@/VideosFront2";
export default function DemoSection() {
  return (
    <section className="flex mx-auto justify-around mt-8 sm:mt-12 items-center">
      <VideosFront2/>
      <div className="hidden sm:block">
        <SparklesIcon/>
      </div>
      <VideosFront/>
    </section>
  );
}
