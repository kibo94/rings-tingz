import Image from "next/image";
import Button from "./Button";

function NewsLatter() {
    return (
        <div className="md:mb-24 mb-12">
            <div className="flex w-full items-start md:items-end flex-col md:flex-row md:gap-0 gap-4 relative md:h-200  ">
                <div className="relative w-full" >
                    <div className="flex flex-col mr-20 items-start   gap-4  bottom-0  left-0 md:absolute  z-10 ">
                        <div className="flex items-center">
                            <Image
                                className="gap-2"
                                src={"/logo/white-background.jpg"}
                                width="150"
                                height="150"
                                alt="logo"
                            />
                            <h3 className={`text-2xl   m-0 p-0 font-jost-500`}>Newsletter</h3>
                        </div>
                        <p className="normal-case pt-0 pb-1" style={{ 'width': '500px' }}>
                            Get the least news from the Rings&Things Online Store regarding
                            new products,
                            exclusive specials, lifestyle and fashion trends.
                        </p>
                        <Button text='Subscribe now' />

                    </div>
                </div>
                <div className="md:absolute right-0 md:w-80% h-200 md:h-full w-full">
                    <Image
                        src={"/Baneri/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall.jpg"}
                        width={0}
                        className="object-cover"
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        alt="brand-image"
                    />
                </div>
            </div >
        </div >
    );
}

export default NewsLatter;
