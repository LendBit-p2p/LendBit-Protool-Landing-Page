import Image from 'next/image';

const FinalSection: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center text-center px-4 relative">
            {/* Text Content Section */}
            <div className="flex flex-col items-start max-w-3xl mx-auto text-left mt-12 md:mt-24 mb-12 z-10">
                <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">
                    Security & Growth
                </div>
                <h2 className="text-3xl md:text-5xl text-white font-bold mb-4">
                    Secure Your Assets and Expand Your Portfolio with Lendbit
                </h2>
                <p className="text-gray-400 mb-8">
                    At Lendbit, we prioritize the security of your assets with advanced blockchain technology and smart contracts, ensuring all transactions are safe, transparent, and protected. Our platform offers flexible lending and borrowing options, empowering you to grow your crypto holdings and access liquidity with ease. Whether you're aiming to earn returns or seize new opportunities, Lendbit provides a secure and efficient way to maximize your digital assets."
                </p>
                <button className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 mb-4">
                    Open dApp
                </button>
                <a href="#" className="text-orange-500 underline">
                    Learn about security and risk
                </a>
            </div>

            {/* Orange Image (Top-Right Corner) */}
            <div className="absolute top-[-259px] right-0 w-64 h-64 md:w-96 md:h-96">
                <Image
                    src="/Semicircle.png"
                    alt="Orange Circular Image"
                    width={300}
                    height={300}
                    layout="responsive"
                />
            </div>

            {/* Yellow Image (Center-Bottom Placeholder) */}
            <div className="w-full md:max-w-5xl mt-20 mb-8 z-10 u-class-shadow">
                <Image
                    src="/Dashboard.png"
                    alt="Yellow Placeholder Image"
                    width={960}
                    height={720}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default FinalSection;
