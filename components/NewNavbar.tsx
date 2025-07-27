'use client'
import React from 'react'
import DesktopMenu from './ui/DesktopMenu'
import MobMenu from './ui/MobMenu'
import { Menus } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const NewNavbar = () => {
  return (
    <div className='z-[999]'>
      <header className="h-16 text-[15px] fixed inset-0 flex-center shadow-lg bg-white z-[99]">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto z-[99]">
          <div className="flex-center gap-x-3 z-[999] relative">
            <Image src="/logo.png" width={150} height={100} alt=" " className="w-[150px] md:w-[200px]"/>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="hidden lg:flex-center gap-x-5">
            <Link
            href="/blog"
            prefetch={false}
              aria-label="sign-in"
              className="relative text-primary-color text-md px-4 py-2 shadow rounded-lg border-2 border-primary-color hover:bg-primary-color hover:text-white hover:scale-105 transition-all duration-300 flex-center"
            >
              Blog
            </Link>
            <Link
            href="/contact"
            prefetch={false}
              aria-label="sign-in"
              className="bg-primary-color text-white text-md z-[999] relative px-4 py-2 shadow rounded-lg border-2 border-primary-color hover:scale-105 transition-all duration-300 flex-center"
            >
              Contact
            </Link>
          </div>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
        </nav>
      </header>
    </div>
  )
}

export default NewNavbar