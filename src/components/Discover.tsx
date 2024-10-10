const Discover = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row sm:py-16 py-6">
       <div className="flex w-full items-end justify-between relative">
            <h1 className="font-KyivType font-bold text-white ss:text-[48px] text-[32px] ss:leading-[48px] leading-[32px] max-w-[1060px]">
                Discover real-time lending and borrowing opportunities at your fingertips.
            </h1>

            <a 
                href="https://app.lendbit.finance/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                  className="border border-white rounded-3xl px-4 py-2 flex-shrink-0"
            >
                {`Marketplace _>`}
            </a>
            <div className="absolute z-[1] w-[955.72px] h-[527.46px] rounded-[90%] top-32 right-0 first__gradient" />
            <div className="absolute z-[0] w-[517.14px] h-[273.03px] rounded-3xl second__gradient top-52 left-12" />
            <div className="absolute z-[0] w-[621.96px] h-[328.37px] rounded-3xl first__gradient top-48 left-2" />
            <div className="absolute z-[0] w-[632.45px] h-[900.5px] rounded-xl third__gradient top-20 right-0" />
        </div>


      
        {/* Optional gradient backgrounds */}
        
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </section>
  );
};

export default Discover;
