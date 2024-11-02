
import Image from "next/image";
function ShopByCategory() {
    return (
        <div className="md:mt-12 mt-6">
            <div
                className="inline-flex flex-col text-right
                )} mb-4 ms-4"
            >
                <h2 className="text-xl font-jost-400">Shop By Category</h2>
                <span className="text-base text-primary font-jost-400">View all</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="p-4 relative h-64 lg:h-96 w-full bg-white hover:shadow-md transition-shadow duration-300 ease-in-out flex items-center justify-center">
                    <Image
                        src="/Proizvodi/download (4).png"
                        alt="Rings"
                        width={350}
                        height={400}
                        className="rounded-lg w-full h-full object-cover"
                    />
                    <div className="absolute right-4 bottom-4 text-xs font-jost-400">
                        Rings
                    </div>
                </div>
                <div className="p-4 relative h-64 lg:h-96 w-full bg-white hover:shadow-md transition-shadow duration-300 ease-in-out flex items-center justify-center">
                    <Image
                        src="/Proizvodi/Screenshot 2022-09-12 170918.png"
                        alt="Bundles"
                        width={350}
                        height={400}
                        className="rounded-lg w-full h-full object-cover"
                    />
                    <div className="absolute right-4 bottom-4 text-xs font-jost-400">
                        Bundles
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 h-full col-span-2  lg:col-span-1">
                    <div className="p-4 relative h-36 md:h-full w-full bg-white hover:shadow-md transition-shadow duration-300 ease-in-out flex items-center justify-center ">
                        <Image
                            src="/Proizvodi/download.png"
                            alt="Earrings"
                            width={350}
                            height={400}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute right-4 bottom-4 text-xs font-jost-400">
                            Earrings
                        </div>
                    </div>
                    <div className="p-4 relative h-36 md:h-full w-full bg-white hover:shadow-md transition-shadow duration-300 ease-in-out flex items-center justify-center">
                        <Image
                            src="/Proizvodi/1111download.png"
                            alt="Necklaces"
                            width={350}
                            height={400}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute right-4 bottom-4 text-xs font-jost-400">
                            Necklaces
                        </div>
                    </div>
                    <div className="p-4 relative h-36 md:h-full w-full bg-white hover:shadow-md transition-shadow duration-300 ease-in-out flex items-center justify-center">
                        <Image
                            src="/Proizvodi/download (1).png"
                            alt="Bracelets"
                            width={350}
                            height={400}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute right-4 bottom-4 text-xs font-jost-400">
                            Bracelets
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopByCategory;
