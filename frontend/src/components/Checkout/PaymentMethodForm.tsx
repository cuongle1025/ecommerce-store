import { useState } from 'react'
import iconCardCVC from '../../assets/icons/iconCardCVC.svg'
import logoVisa from '../../assets/logos/logoVisa.svg'
import logoMasterCard from '../../assets/logos/logoMasterCard.svg'
import logoDiscover from '../../assets/logos/logoDiscover.svg'
import logoAmericanExpress from '../../assets/logos/logoAmericanExpress.svg'
import logoPaypal from '../../assets/logos/logoPaypal.svg'

export default function PaymentMethodForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    'payment-method-card',
  )

  return (
    <>
      <div className="px-6 py-10 border border-black rounded-md">
        <h2 className="text-xl font-medium tracking-wider">Payment</h2>

        <form className="flex flex-col gap-6 mt-6">
          <label
            htmlFor="payment-method-card"
            className="w-full flex p-3 w-full items-center bg-white border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
              name="payment-method"
              id="payment-method-card"
              checked={selectedPaymentMethod === 'payment-method-card'}
              onChange={(e) => setSelectedPaymentMethod(e.target.id)}
            />
            <div className="flex w-full justify-between items-center">
              <span className="font-light ms-3">Credit or Debit card</span>
              <div className="inline-flex gap-1">
                <span className="border">
                  <img src={logoVisa} />
                </span>
                <span className="border">
                  <img src={logoMasterCard} />
                </span>
                <span className="border">
                  <img src={logoDiscover} />
                </span>
                <span className="border">
                  <img src={logoAmericanExpress} />
                </span>
              </div>
            </div>
          </label>

          <label
            htmlFor="payment-method-paypal"
            className="w-full flex p-3 w-full items-center bg-white border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
              name="payment-method"
              id="payment-method-paypal"
              checked={selectedPaymentMethod === 'payment-method-paypal'}
              onChange={(e) => setSelectedPaymentMethod(e.target.id)}
            />
            <div className="flex w-full justify-between items-center">
              <span className="font-light ms-3">PayPal</span>
              <span className="border">
                <img src={logoPaypal} />
              </span>
            </div>
          </label>
        </form>

        <hr className="my-6 border-neutral-300" />

        <form>
          <div>
            <input
              type="text"
              id="card-number"
              placeholder="Card number *"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              id="card-expiration"
              placeholder="MM/YY *"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              id="card-holder"
              placeholder="Card holder *"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>

          <div className="mt-3 relative">
            <input
              type="text"
              id="card-security-code"
              placeholder="Security code *"
              className="py-3 px-4 pe-11 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
            <div className="hs-tooltip absolute inset-y-0 end-0 flex items-center z-20 pe-4">
              <img
                src={iconCardCVC}
                alt="CVC icon"
                width={24}
                height={24}
                className="hs-tooltip-toggle cursor-pointer"
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-black text-xs font-medium text-white rounded-md shadow-sm"
                role="tooltip"
              >
                The 3 digits on the back of your card
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
