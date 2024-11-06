import React from 'react'
import ShopBanner from '../assets/images/ShopBanner.png'
import iconFilter from '../assets/icons/iconFilter.svg'
import ProductSort from '../components/Products/ProductSort'
import ProductGrid from '../components/Products/ProductGrid'
import NewsletterBanner from '../components/Banners/NewsletterBanner'

const ShopPage: React.FC = () => {
  const prices = [
    'All Price',
    '$0.00 - 99.99',
    '$100.00 - 199.99',
    '$200.00 - 299.99',
    '$300.00 - 399.99',
    '$400.00+',
  ]
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.3)), url(${ShopBanner})`,
          }}
          className="min-h-[392px] flex flex-col gap-6 justify-center items-center bg-cover bg-center bg-no-repeat"
        >
          <ol className="flex items-center whitespace-nowrap">
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-neutral-400 hover:text-neutral-700 focus:outline-none focus:text-neutral-700"
                href="/"
              >
                Home
              </a>
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-neutral-700 truncate"
              aria-current="page"
            >
              Shop
            </li>
          </ol>
          <h2 className="font-medium text-5xl text-black tracking-wide">
            Shop Page
          </h2>
          <p className="text-xl font-light tracking-wide">
            Let&apos;s design the place you always imagined.
          </p>
        </div>
      </section>
      <section className="pt-[60px] pb-[100px] flex flex-col">
        <div className="grid grid-cols-5 gap-6">
          <div className="flex flex-col items-start col-span-1 gap-8">
            <button
              type="button"
              className="group justify-center items-center gap-2.5 inline-flex focus:outline-none"
            >
              <img src={iconFilter} alt="Filter Icon" />
              <p className="text-xl font-semibold group-hover:underline">
                Filter
              </p>
            </button>
            <div className="flex flex-col items-start gap-4">
              <p className="font-semibold">CATEGORIES</p>
              <button className="text-sm text-neutral-400 font-semibold hover:underline hover:text-neutral-700">
                All Rooms
              </button>
              <button className="text-sm text-neutral-400 font-semibold hover:underline hover:text-neutral-700">
                Living Room
              </button>
              <button className="text-sm text-neutral-400 font-semibold hover:underline hover:text-neutral-700">
                Bedroom
              </button>
              <button className="text-sm text-neutral-400 font-semibold hover:underline hover:text-neutral-700">
                Kitchen
              </button>
            </div>
            <div className="flex flex-col items-start w-full gap-4">
              <p className="font-semibold">PRICE</p>
              {prices.map((price, i) => (
                <div className="w-full" key={i}>
                  <label
                    htmlFor={`hs-default-checkbox${i}`}
                    className="flex w-full items-center cursor-pointer justify-between"
                  >
                    <span className="text-sm font-semibold text-neutral-400">
                      {price}
                    </span>
                    <input
                      type="checkbox"
                      className="shrink-0 w-6 h-6 border-[#6c7174] rounded text-neutral-700 focus:ring-blue-500 cursor-pointer"
                      id={`hs-default-checkbox${i}`}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col col-span-4 gap-8">
            <div className="flex justify-between">
              <p className="text-xl font-medium">Living Room</p>
              <ProductSort />
            </div>
            <div>
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-10 md:-mx-20 lg:-mx-40 xl:-mx-80">
        <NewsletterBanner />
      </section>
    </>
  )
}

export default ShopPage
