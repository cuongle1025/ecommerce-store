import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CheckoutCoupon from './CheckoutCoupon'
import PrimaryButton from '../Buttons/PrimaryButton'
import UnderlineButton from '../Buttons/UnderlineButton'

export default function CheckoutSummary() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedShipping, setSelectedShipping] = useState('free-shipping')

  const continueToCheckout = () => {
    navigate('/checkoutdetails')
  }

  return (
    <div className="flex flex-col p-6 border border-black rounded-md sticky top-20 h-fit">
      <div className="flex justify-between items-center">
        <p className="text-xl tracking-wide">Cart summary</p>
        {location.pathname === '/checkoutdetails' && (
          <UnderlineButton text="Edit cart" onClick={() => navigate('/cart')} />
        )}
      </div>
      <div className="grid space-y-2 mt-4">
        <label
          htmlFor="free-shipping"
          className="w-full flex p-3 w-full bg-white border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
            name="checkout-summary"
            id="free-shipping"
            checked={selectedShipping === 'free-shipping'}
            onChange={(e) => setSelectedShipping(e.target.id)}
          />
          <div className="flex w-full justify-between">
            <span className="font-light ms-3">Free shipping</span>
            <span className="font-light">$0.00</span>
          </div>
        </label>

        <label
          htmlFor="express-shipping"
          className="w-full flex p-3 w-full bg-white border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
            name="checkout-summary"
            id="express-shipping"
            checked={selectedShipping === 'express-shipping'}
            onChange={(e) => setSelectedShipping(e.target.id)}
          />
          <div className="flex w-full justify-between">
            <span className="font-light ms-3">Express shipping</span>
            <span className="font-light">+$15.00</span>
          </div>
        </label>

        <label
          htmlFor="pick-up"
          className="w-full flex p-3 w-full bg-white border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
            name="checkout-summary"
            id="pick-up"
            checked={selectedShipping === 'pick-up'}
            onChange={(e) => setSelectedShipping(e.target.id)}
          />
          <div className="flex w-full justify-between">
            <span className="font-light ms-3">Pick up</span>
            <span className="font-light">$0.00</span>
          </div>
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <p className="font-light">Subtotal</p>
        <span>$1234.00</span>
      </div>
      <hr className="mt-2 border-neutral-300" />
      <div>
        <CheckoutCoupon />
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-xl font-semibold">Total</p>
        <span className="text-xl font-semibold">$1234.00</span>
      </div>
      {location.pathname == '/cart' && (
        <div className="mt-10">
          <PrimaryButton
            text="Continue to checkout"
            wFull
            onClick={continueToCheckout}
          />
        </div>
      )}
    </div>
  )
}
