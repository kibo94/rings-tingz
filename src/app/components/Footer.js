import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className='container m-auto'>
            <div className="p-0 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-start items-center">
                    <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/4">
                        <div className="flex flex-col items-center md:items-end">
                            <Image className="gap-2" src="/logo/white-background.jpg" width="200" height="200" alt="logo" />
                            <div className="flex items-center justify-center gap-4 mt-2">
                                <div className="p-1 border rounded border-black">
                                    <Image src="/Icons/instagram.png" alt="Instagram" width={24} height={24} className="object-contain" />
                                </div>
                                <div className="p-1 border rounded border-black">
                                    <Image src="/Icons/youtube.png" alt="YouTube" width={24} height={24} className="object-contain" />
                                </div>
                                <div className="p-1 border rounded border-black">
                                    <Image src="/Icons/facebook.png" alt="Facebook" width={24} height={24} className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center md:text-left md:place-content-start place-content-center">

                        <div className="space-y-2">
                            <h3 className="font-jost-400 text-lg">Contact</h3>
                            <ul className="space-y-1">
                                <li><Link href="/customer-care" className="hover:underline">Customer care</Link></li>
                                <li><Link href="/whatsapp" className="hover:underline">WhatsApp</Link></li>
                                <li><Link href="/email-us" className="hover:underline">Email us</Link></li>
                                <li><Link href="/store-locator" className="hover:underline">Store Locator</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-jost-400 text-lg">Services</h3>
                            <ul className="space-y-1">
                                <li><Link href="/express-delivery" className="hover:underline">Express delivery</Link></li>
                                <li><Link href="/how-to-return" className="hover:underline">How to Return</Link></li>
                                <li><Link href="/return-label" className="hover:underline">Return label</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-jost-400 text-lg">Our company</h3>
                            <ul className="space-y-1">
                                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                                <li><Link href="/investor-relations" className="hover:underline">Investor Relations</Link></li>
                                <li><Link href="/sustainability" className="hover:underline">Sustainability</Link></li>
                                <li><Link href="/press" className="hover:underline">Press</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center py-8">
                <div className="w-full border-t-4 border-gray-100 mb-4"></div>
                <div className="flex  justify-center gap-4  p-2 md:p-4 flex-col md:flex-row md:items-start items-center">
                    <Link href="/faq" className="hover:underline font-jost-400">FAQ</Link>
                    <Link href="/help-contact" className="hover:underline font-jost-400">HELP & CONTACT</Link>
                    <Link href="/privacy-statment" className="hover:underline font-jost-400">PRIVACY STATEMENT</Link>
                    <Link href="/terms-conditions" className="hover:underline font-jost-400">TERMS & CONDITIONS</Link>
                    <Link href="/terms-of-use" className="hover:underline font-jost-400">TERMS OF USE</Link>
                    <Link href="/cookie-settings" className="hover:underline font-jost-400">COOKIE SETTINGS</Link>
                </div>


                <div className="w-full border-t-4 border-gray-100 mt-4"></div>
            </div>
            <div className='mt-2 mb-2 flex justify-center'>
                <Image
                    src="/Baneri/Screenshot 2024-10-31 231029.png"
                    alt="Icon 1"
                    width={400}
                    layout="responsive"
                    height={24}
                    className="object-contain"
                />
            </div>
            <p className='text-xs text-center mb-6 md:w-full w-2/3 m-auto
            '>Cene na sajtu su iskazane u dinarima sa uračunatim poreyom,a plaćanje se vrsši isključivo u dinarima.Isporuka se vrši SAMO na teritoriji Republike Srbije.Nastojimo da budemo stop precizniji u opisu proizvoda,
                prikazu slika i samih cena, ali ne možemo garantovati da su sve informacije kompletne i bez grešaka.Svi artikli prikayani na sajtu su deo naše ponude i ne podrazumeva da su dostupni u svakom trenutku-
                Raspoloživost robe možete proveriti poyivanjem Call Centra ili online na +381 (Q) 32 325 030 ili online prodaja +381 (0) 62489 294 (po ceni lokalnog poziva)
                <br />
                <br />
                @ 2022 Ringz&Tingz DOO | Sva prava zadržana. Powered by Croonus Tehnologies

            </p>
        </div>

    )
}

export default Footer