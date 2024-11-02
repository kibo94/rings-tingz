import Image from 'next/image'
import Button from './Button'
function RingsThingsBrand() {
    return (
        <div className="md:mt-24 md:mb-24 mt-12 mb-12">
            <div className='flex w-full items-end md:flex-row flex-col-reverse gap-4 md:gap-0 relative h-400'>
                <div className='w-full  md:absolute left-0 top-0 h-full md:w-4/5'>
                    <Image src={"/Baneri/LOVE 1.jpg"} width={0}
                        height={0}
                        sizes="90vw"
                        style={{ width: '100%', height: '100%' }} alt='brand-image' />
                </div>
                <div className='w-full md:absolute md:right-0'>
                    <div className="flex flex-col   md:text-right md:items-end gap-2  bottom-0  right-0 ">
                        <h3 className={`text-2xl   m-0 p-0 w-500 font-jost-500 w-full`}>Carefully created peices for you to layer, style and mix</h3>
                        <p className="normal-case pt-0 pb-1">Rings&Things brand</p>
                        <Button text='Read More' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RingsThingsBrand