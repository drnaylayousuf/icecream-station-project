import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="bg-gradient-to-r from-pink-400 to-blue-400 p-4 shadow-lg"> {/* Navbar background with gradient */}
            <nav className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center space-x-4"> {/* Left section for logo and title */}
                    <Image 
                        src="/navbarimage.png" 
                        alt="Logo" 
                        width={50} // Logo width
                        height={50} // Logo height
                        className="rounded-lg" // Rounded corners for the logo
                    />
                    <span className="text-white text-xl font-bold">Ice Cream Station</span> {/* Title color changed to white for better contrast */}
                </div>
                <div className="flex space-x-6"> {/* Right section for navigation links */}
                    <Link href="/" className="text-white hover:text-pink-200 transition-colors">Home</Link>
                    <Link href="/product" className="text-white hover:text-pink-200 transition-colors">Product</Link>
                    <Link href="/location" className="text-white hover:text-pink-200 transition-colors">Our Location</Link>
                </div>
            </nav>
        </div>
    );
}
