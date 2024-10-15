import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import iconSearch from '../../assets/icons/iconSearch.svg'
import iconShoppingBag from '../../assets/icons/iconShoppingBag.svg'
import iconUserCircle from '../../assets/icons/iconUserCircle.svg'

export default function Navbar() {
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  )

  const functionIcons = [
    {
      link: "https://github.com/sanskarsharma100",
      src: iconSearch,
      alt: "Search",
    },
    {
      link: "https://www.linkedin.com/in/sanskarsharma100",
      src: iconUserCircle,
      alt: "UserCircle",
    },
    {
      link: "https://www.linkedin.com/in/sanskarsharma100",
      src: iconShoppingBag,
      alt: "ShoppingBag",
    },
  ];

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-300 px-40 py-4">
      <nav className="w-full mx-auto sm:flex sm:items-center sm:justify-between">
        <a className="flex font-medium text-2xl text-black focus:outline-none focus:opacity-80 " href="/" aria-label="3legant">
          3legant
          <p className="text-neutral-400">.</p>
        </a>
        <div className="flex flex-row items-center gap-10 text-sm">
          <a className={`font-medium ${window.location.pathname === '/' ? "text-neutral-700" : "text-neutral-400"} hover:text-neutral-700 focus:outline-none"`} href="/">Home</a>
          <a className={`font-medium ${window.location.pathname === '/shop' ? "text-neutral-700" : "text-neutral-400"} hover:text-neutral-700 focus:outline-none"`} href="/shop">Shop</a>
          <a className={`font-medium ${window.location.pathname === '/product' ? "text-neutral-700" : "text-neutral-400"} hover:text-neutral-700 focus:outline-none"`} href="/product">Product</a>
          <a className={`font-medium ${window.location.pathname === '/contact-us' ? "text-neutral-700" : "text-neutral-400"} hover:text-neutral-700 focus:outline-none"`} href="/contact-us">Contact Us</a>
        </div>
        <div className="flex flex-row">
          <ul className="flex justify-center gap-4">
            {functionIcons.map((icon, i) => (
              <li key={i}>
                <a href={icon.link} target="_blank">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-6 hover:cursor-pointer hover:drop-shadow-[0_0_5px_hsl(0,0%,40%)]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

