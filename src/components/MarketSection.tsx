import Image from 'next/image';

const MarketSection: React.FC = () => {
    return (
        <div className="min-h-[70vh] bg-black flex flex-col items-center text-center px-4 relative">
            {/* Market Label */}
            <div className="text-sm text-gray-400 uppercase tracking-wide mt-12 mb-2">
                Market
            </div>

            {/* Popular Heading */}
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-6 z-10">
                Most <span className="text-orange-500">popular</span> integrated assets
            </h2>

            {/* Visit Marketplace Button */}
            <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 mb-12 z-10">
                Visit Marketplace _>
            </button>

            {/* Top Two Images (Within the Section, Absolute Positioning) */}
            <div className="absolute top-25 left-0 w-32 h-32 md:w-[16rem] md:h-48">
                <Image
                    src="/AssetSelector.png"
                    alt="First Image"
                    width={300}
                    height={128}
                    layout="responsive"
                />
            </div>

            <div className="absolute top-[11rem] right-0 w-32 h-32 md:w-48 md:h-48">
                <Image
                    src="/Switch.png"
                    alt="Second Image"
                    width={300}
                    height={128}
                    layout="responsive"
                />
            </div>

            {/* Bottom Single Grid Image */}
            <div className="w-full md:max-w-5xl h-64 mt-20 mb-8 z-10">
                <Image
                    src="/CryptoAssets.svg"
                    alt="Grid Image"
                    width={960}
                    height={256}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default MarketSection;
