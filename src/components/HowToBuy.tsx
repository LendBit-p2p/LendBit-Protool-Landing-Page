import Image from 'next/image';

const HowToBuy: React.FC = () => {
    return (
        <div className="max-w-[80%] mx-auto flex flex-col items-center md:flex-row md:justify-center py-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center mx-4 my-6 w-[300px] h-[350px] relative">
                <Image
                    src="/wallet.png"
                    alt="Connect Wallet"
                    width={120}
                    height={120}
                />
                <h3 className="text-2xl font-semibold mt-4">Connect Wallet</h3>
                <p className="text-gray-500 mt-2">
                    Easily connect your crypto wallet to get started with Lendbit.
                </p>
            </div>

            {/* Linking SVG between Step 1 and Step 2 (only on desktop) */}
            <div className="hidden md:block">
                <Image src="/chain1.svg" alt="Linking" width={100} height={10} />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center mx-4 my-6 w-[300px] h-[350px] relative">
                <Image
                    src="/deposit.png"
                    alt="Deposit Collateral"
                    width={120}
                    height={120}
                />
                <h3 className="text-2xl font-semibold mt-4">Deposit Collateral</h3>
                <p className="text-gray-500 mt-2">
                    Secure your loan or prepare to lend by depositing supported crypto assets as collateral.
                </p>
            </div>

            {/* Linking SVG between Step 2 and Step 3 (only on desktop) */}
            <div className="hidden md:block">
                <Image src="/chain2.svg" alt="Linking" width={100} height={10} />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center mx-4 my-6 w-[300px] h-[350px] relative">
                <Image
                    src="/transact.png"
                    alt="Lend or Borrow"
                    width={120}
                    height={120}
                />
                <h3 className="text-2xl font-semibold mt-4">Lend or Borrow</h3>
                <p className="text-gray-500 mt-2">
                    Explore the marketplace to lend your assets and earn returns or borrow funds with flexible terms.
                </p>
            </div>
        </div>
    );
};

export default HowToBuy;
