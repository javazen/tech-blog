import React from 'react'
import { navLinks } from './Navbar'
import Link from 'next/link'

interface MobileNavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({menuOpen, setMenuOpen}: MobileNavProps) {
  return (
    <div className='md:hidden'>
      {/* overlay */}
      <div className={`fixed inset-0 z-40 bg-black/60 
        backdrop-blur-sm transition-opacity duration-300
        ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}/>
      {/* menu */}
      <ul className={`fixed top-18 right-0 z-50 h-[80vh] w-full flex flex-col items-center justify-center gap-10
        backdrop-blur-xl border-t border-white/10 bg-secondary-background/80 
        transition-transform duration-500 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(({url, label}) => (
            <li key={url} className="cursor-pointer">
              <Link 
                onClick={() => setMenuOpen(false)}
                href={url} 
                className='text-xl font-semibold tracking-wide text-gray-200 hover:text-indigo-400 transition-colors'>
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
