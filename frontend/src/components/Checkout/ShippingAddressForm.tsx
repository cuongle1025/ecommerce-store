import { useState } from 'react'
import { US_STATES } from '../../features/Checkout/constants'

export default function ShippingAddressForm() {
  const [state, setState] = useState('')

  return (
    <>
      <div className="px-6 py-10 border border-black rounded-md">
        <h2 className="text-xl font-medium tracking-wider">Shipping Address</h2>
        <form className="mt-6">
          <div className="w-full uppercase">
            <label
              htmlFor="street-address"
              className="block text-xs font-bold mb-2 text-neutral-400"
            >
              Street Address *
            </label>
            <input
              type="text"
              id="street-address"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>

          <div className="w-full uppercase mt-6">
            <label
              htmlFor="zip-code"
              className="block text-xs font-bold mb-2 text-neutral-400"
            >
              ZIP Code *
            </label>
            <input
              type="text"
              id="zip-code"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>

          <div className="flex gap-6 mt-6">
            <div className="w-full uppercase">
              <label
                htmlFor="city"
                className="block text-xs font-bold mb-2 text-neutral-400"
              >
                City *
              </label>
              <input
                type="text"
                id="city"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
              />
            </div>
            <div className="w-full uppercase">
              <label
                htmlFor="state"
                className="block text-xs font-bold mb-2 text-neutral-400"
              >
                State *
              </label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
              >
                <option value="">Select a state</option>
                {US_STATES.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
