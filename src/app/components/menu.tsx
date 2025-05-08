import React from 'react'
import Link from 'next/link'

export default function Menu() {

  let navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Metadata", href: "/products" },
    { name: "Products", href: "/products" },
    { name: "Metadata", href: "/metadata" },



  ]
  return (
    <>
      <ul className="main-menu flex flex-wrap gap-x-6 items-center">
        {
          navLinks.map((link, index) => (
            <li key={index}>
              <Link className="p-1 hover:bg-white hover:rounded-[5px] transition-all" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>


    </>

  )
}
