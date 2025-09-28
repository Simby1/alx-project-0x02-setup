import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <nav className="flex space-x-6">
        <Link href="/" className="text-white hover:text-blue-200 transition duration-150 font-semibold">
          Root
        </Link>
        <Link href="/home" className="text-white hover:text-blue-200 transition duration-150 font-semibold">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-blue-200 transition duration-150 font-semibold">
          About
        </Link>
        {/* /posts and /users later */}
      </nav>
    </header>
  );
};

export default Header;