import CartItemsList from './CartItemsList'
import PrimaryButton from '../Buttons/PrimaryButton'
import UnderlineButton from '../Buttons/UnderlineButton'

// interface Props {
//   id: string
// }

export default function CartDrawer() {
  return (
    // <div
    //   id="cart-drawer"
    //   className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-md w-full z-[101] bg-white border-s"
    //   role="dialog"
    //   tabIndex={-1}
    //   aria-labelledby="cart-drawer-label"
    // >
    //   <div className="flex justify-between px-6 py-6">
    //     <h1 className="text-3xl font-semibold tracking-wide">Cart</h1>
    //     <button
    //       type="button"
    //       className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
    //       aria-label="Close"
    //       data-hs-overlay="#cart-drawer"
    //     >
    //       <span className="sr-only">Close</span>
    //       <svg
    //         className="shrink-0 size-4"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M18 6 6 18"></path>
    //         <path d="m6 6 12 12"></path>
    //       </svg>
    //     </button>
    //   </div>
    //   <div
    //     id="cart-items-list"
    //     className="max-h-screen overflow-y-auto pb-[263px]"
    //   >
    //     <CartItemsList />
    //   </div>
    //   <div className="fixed bottom-0 flex flex-col gap-4 bg-white w-full p-6">
    //     <div className="flex justify-between">
    //       <p className="text-xl font-medium">Total excluding tax</p>
    //       <span className="text-xl font-medium">$234.00</span>
    //     </div>
    //     <div>
    //       <PrimaryButton text="Checkout" wFull />
    //     </div>
    //     <div className="flex justify-center">
    //       <UnderlineButton text="View Cart" />
    //     </div>
    //   </div>
    // </div>
    <div
      id="cart-drawer"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-md w-full z-[101] bg-white border-s grid grid-rows-[auto_1fr_auto]"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="cart-drawer-label"
    >
      <div className="flex justify-between px-6 py-6">
        <h1 className="text-3xl font-semibold tracking-wide">Cart</h1>
        <button
          type="button"
          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          aria-label="Close"
          data-hs-overlay="#cart-drawer"
        >
          <span className="sr-only">Close</span>
          <svg
            className="shrink-0 size-4"
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div id="cart-items-list" className="overflow-y-auto">
        <CartItemsList />
      </div>
      <div className="flex flex-col gap-4 bg-white w-full p-6">
        <div className="flex justify-between">
          <p className="text-xl font-medium">Total excluding tax</p>
          <span className="text-xl font-medium">$234.00</span>
        </div>
        <div>
          <PrimaryButton text="Checkout" wFull />
        </div>
        <div className="flex justify-center">
          <UnderlineButton text="View Cart" />
        </div>
      </div>
    </div>
  )
}
