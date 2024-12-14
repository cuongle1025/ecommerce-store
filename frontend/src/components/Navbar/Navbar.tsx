// import { useSelector } from 'react-redux'
// import { RootState } from '../../app/store'
import { useLocation } from 'react-router-dom'
import iconSearch from '../../assets/icons/iconSearch.svg'
import iconShoppingBag from '../../assets/icons/iconShoppingBag.svg'
import iconUserCircle from '../../assets/icons/iconUserCircle.svg'
import CheckoutStepper from '../Checkout/CheckoutStepper'

export default function Navbar() {
  const location = useLocation()
  // const cartItemsCount = useSelector((state: RootState) =>
  //   state.cart.items.reduce((total, item) => total + item.quantity, 0),
  // )

  const functionButtons = [
    {
      icon: iconSearch,
      alt: 'Search',
    },
    {
      icon: iconUserCircle,
      alt: 'UserCircle',
    },
    {
      icon: iconShoppingBag,
      alt: 'ShoppingBag',
      id: '#cart-drawer',
    },
  ]

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white py-4 sticky top-0 z-[100] px-10 md:px-20 lg:px-40 xl:px-80">
      <nav className="w-full mx-auto sm:flex sm:items-center sm:justify-between">
        <a
          className="flex font-medium text-2xl text-black focus:outline-none focus:opacity-80 "
          href="/"
          aria-label="3legant"
        >
          3legant
          <p className="text-neutral-400">.</p>
        </a>
        {!['/cart', '/checkoutdetails', '/ordercomplete'].includes(
          location.pathname,
        ) ? (
          <>
            <div className="flex flex-row items-center gap-10 text-sm">
              <a
                className={`font-regular ${window.location.pathname === '/' ? 'text-neutral-700' : 'text-neutral-400'} hover:text-neutral-700 focus:outline-none"`}
                href="/"
              >
                Home
              </a>
              <a
                className={`font-regular ${window.location.pathname === '/shop' ? 'text-neutral-700' : 'text-neutral-400'} hover:text-neutral-700 focus:outline-none"`}
                href="/shop"
              >
                Shop
              </a>
              <a
                className={`font-regular ${window.location.pathname === '/product' ? 'text-neutral-700' : 'text-neutral-400'} hover:text-neutral-700 focus:outline-none"`}
                href="/product"
              >
                Product
              </a>
              <a
                className={`font-regular ${window.location.pathname === '/contact-us' ? 'text-neutral-700' : 'text-neutral-400'} hover:text-neutral-700 focus:outline-none"`}
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-row">
              <ul className="flex justify-center gap-4">
                {functionButtons.map((button, i) => (
                  <li key={i}>
                    <button type="button" data-hs-overlay={button.id}>
                      <img
                        src={button.icon}
                        alt={button.alt}
                        className="w-6 hover:cursor-pointer hover:drop-shadow-[0_0_5px_hsl(0,0%,40%)]"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="flex-1 flex justify-center">
            <CheckoutStepper />
          </div>
        )}
      </nav>
    </header>
  )
}
