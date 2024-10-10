import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-black">
      <div className="border-b border-[#808080]">
        <div className="md:max-w-[94%] m-auto">
          <div className="px-6 flex justify-center items-center">
            <div className="xl:max-w-[1440px] w-full">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[94%] m-auto">
        <div className="px-6 flex justify-center items-start">
          <div className="xl:max-w-[1440px] w-full">
            <Hero />
          </div>
        </div>

        <div className="px-6 flex justify-center items-center">
          <div className="xl:max-w-[1440px] w-full">
            <Discover />
          </div>
        </div>



      </div>
    </div>
  );
}
