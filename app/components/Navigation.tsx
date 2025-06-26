'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/ssg-example', label: 'SSG Demo' },
    { href: '/ssr-example', label: 'SSR Demo' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 12 }}
      className="relative shadow-md border-b-4 border-[var(--f1-red)] bg-[var(--f1-black)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-widest text-[var(--f1-red)] uppercase">
              F1folio
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 uppercase tracking-wide border-b-2 ${
                  pathname === item.href
                    ? 'text-[var(--f1-red)] border-[var(--f1-red)] bg-[var(--f1-white)]'
                    : 'text-[var(--f1-white)] border-transparent hover:text-[var(--f1-red)] hover:border-[var(--f1-red)] hover:bg-[var(--f1-gray)]/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Racing stripe effect */}
      <div className="absolute left-0 right-0 bottom-0 h-2 f1-checkered" style={{ zIndex: 2 }} />
    </motion.nav>
  );
} 