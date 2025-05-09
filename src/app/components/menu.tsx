"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Menu() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Metadata", href: "/metadata" },
    { name: "Products", href: "/products" },
    { name: "Articles", href: "/articles/breaking-news-123" },

  ];

  // Correctly call usePathname()
  const pathname = usePathname();

  return (
    <ul className="main-menu flex flex-wrap gap-x-6 items-center"> 
      {navLinks.map((link, index) => {
        
   const isActive =
  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={index}>
            <Link
              href={link.href}
              className={`p-1 transition-all text-indigo-800 hover:bg-white  rounded-[5px] ${
                isActive ? 'font-bold  text-white bg-white rounded-sm' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
