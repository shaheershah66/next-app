'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <nav className="flex justify-center gap-10">
        <Link href="/" className={pathname === '/' ? 'font-bold text-blue-600' : ''}>
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'font-bold text-blue-600' : ''}>
          About
        </Link>
      </nav>
    </header>
  );
}
