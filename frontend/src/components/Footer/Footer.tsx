// import React from 'react'
import LinkedinIcon from '../../assets/icons/iconLinkedin.svg'
import GithubIcon from '../../assets/icons/iconGithub.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col bg-neutral-700 text-white pt-20 pb-8 px-40">
      <div className="grid grid-cols-2 pb-12 border-b border-neutral-400">
        <div className="flex divide-x gap-8 divide-neutral-400 items-center">
          <a
            className="flex font-medium text-2xl text-white focus:outline-none focus:opacity-80 "
            href="/"
            aria-label="3legant"
          >
            3legant
            <p className="text-neutral-400">.</p>
          </a>
          <p className="pl-8 font-light">Home Furniture Store</p>
        </div>
        <div className="flex items-center justify-end gap-10 text-sm">
          <a
            className="font-regular text-white hover:opacity-80 focus:outline-none"
            href="/"
          >
            Home
          </a>
          <a
            className="font-regular text-white hover:opacity-80 focus:outline-none"
            href="/shop"
          >
            Shop
          </a>
          <a
            className="font-regular text-white hover:opacity-80  focus:outline-none"
            href="/product"
          >
            Product
          </a>
          <a
            className="font-regular text-white hover:opacity-80  focus:outline-none"
            href="/contact-us"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div className="flex gap-7">
          <p className="text-xs text-neutral-300 tracking-wide font-light">
            &copy; 2024 3legant. All rights reserved.
          </p>
          <a
            className="font-semibold text-xs text-white hover:opacity-80  focus:outline-none"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-semibold text-xs text-white hover:opacity-80  focus:outline-none"
            href="#"
          >
            Terms of Use
          </a>
        </div>
        <div className="flex justify-end gap-6">
          <a href="https://www.linkedin.com/in/cuong-le-407083179/">
            <img
              src={LinkedinIcon}
              alt="Linkedin Icon"
              height={24}
              width={24}
            />
          </a>
          <a href="https://github.com/cuongle1025">
            <img src={GithubIcon} alt="Github Icon" height={24} width={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
