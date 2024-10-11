import CardDetails from "@/components/CardDetails";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SquareCards from "@/components/SquareCards";

export default function Home() {
 
  
  return (
    <div className="w-full overflow-hidden bg-black relative">
      <div className="border-b border-[#808080]">
        <div className="md:max-w-[94%] m-auto">
          <div className="px-6 flex justify-center items-center">
            <div className="xl:max-w-[1440px] w-full">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="hidden lg:block absolute w-full top-[10%] h-[559px] z-10 black__gradient" />
        <div className="md:max-w-[94%] m-auto relative">
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

      <div>
        <SquareCards />
      </div>

      <div className="md:max-w-[94%] m-auto">
        <div className="px-6 flex justify-center items-center">
          <div className="xl:max-w-[1440px] w-full">
            <CardDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
