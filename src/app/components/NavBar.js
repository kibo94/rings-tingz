'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="container p-4  m-auto flex items-center justify-between text-sm">
            <div className='hidden md:block'></div>
            <div className="flex items-center md:hidden">
                <Link href="/"><Image src="/logo/white-background.jpg" width="150" height="150" alt="logo" /></Link>
            </div>

            <div className="hidden md:flex justify-center items-center gap-8">
                <Link href="/new-in">NEW IN</Link>
                <Link href="/inspo">INSPO</Link>
                <Link href="/shop">SHOP</Link>
                <Link href="/"><Image src="/logo/white-background.jpg" width="150" height="150" alt="logo" /></Link>
                <Link href="/outlet">OUTLET</Link>
                <Link href="/about">ABOUT</Link>
            </div>
            <div className="flex gap-8 items-center">
                <Image src="/Icons/search.png" width="25" height="25" alt="search" />
                <Image src="/Icons/heart.png" width="25" height="25" alt="favorites" />
                <div className="relative">
                    <Image src="/Icons/shopping-bag.png" width="40" height="40" alt="cart" />
                    <div className="bg-gray-700 absolute top-2 right-0 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</div>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex items-center justify-center w-8 h-8">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z" fill="black" />
                    </svg>

                </button>
            </div>
            {menuOpen && (
                <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col items-center p-6 space-y-6 md:hidden">
                    <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl">&times;</button>
                    <Link href="/new-in" onClick={() => setMenuOpen(false)}>NEW IN</Link>
                    <Link href="/inspo" onClick={() => setMenuOpen(false)}>INSPO</Link>
                    <Link href="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link>
                    <Link href="/outlet" onClick={() => setMenuOpen(false)}>OUTLET</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                </div>
            )}
        </div>
    );
}
