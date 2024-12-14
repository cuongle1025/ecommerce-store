import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../app/store'
// import { removeFromCart, updateQuantity } from '../features/Cart/cartSlice'
import bowlM from '../assets/images/BowlM.png'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import confetti from 'canvas-confetti'

const OrderCompletePage: React.FC = () => {
  const navigate = useNavigate()
  const currentDate = new Date().toJSON().slice(0, 10)

  // const dispatch = useDispatch()
  // const cartItems = useSelector((state: RootState) => state.cart.items)

  // const handleRemoveItem = (id: number) => {
  //   dispatch(removeFromCart(id))
  // }

  // const handleUpdateQuantity = (id: number, quantity: number) => {
  //   dispatch(updateQuantity({ id, quantity }))
  // }

  // const total = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0,
  // )
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6,
      },
    })
  }, [])

  return (
    <>
      <section className="pt-10 mb-20">
        <div className="flex flex-col shadow-xl rounded-md p-20 justify-center items-center">
          <span className="text-3xl text-neutral-400 tracking-wide">
            Thank you! 🎉
          </span>

          <span className="text-4xl mt-4">Your order has been placed!</span>

          <div
            className="flex justify-center overflow-x-auto w-full overscroll-x-contain"
            id="order-complete-list"
          >
            <div className="mt-10 flex gap-10 pb-4">
              {Array.from({ length: 10 }, (_, index) => (
                <div className="relative shrink-0" key={index}>
                  <img
                    src={bowlM}
                    alt="Product Image"
                    className="w-20 h-24 object-contain bg-[#F3F5F7]"
                  />
                  <span className="absolute -top-3 -right-3 flex justify-center items-center w-8 h-8 px-2.5 py-1 bg-black rounded-full">
                    <span className="text-center text-white">{index + 1}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 mt-10 gap-10">
            <div className="flex flex-col gap-5">
              <span className="text-sm font-semibold text-neutral-400">
                Order number:
              </span>
              <span className="text-sm font-semibold text-neutral-400">
                Date:
              </span>
              <span className="text-sm font-semibold text-neutral-400">
                Total:
              </span>
              <span className="text-sm font-semibold text-neutral-400">
                Payment method:
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-sm font-semibold">#ASD1234</span>
              <span className="text-sm font-semibold">{currentDate}</span>
              <span className="text-sm font-semibold">$1,234.00</span>
              <span className="text-sm font-semibold">Credit Card</span>
            </div>
          </div>

          <div className="mt-10">
            <PrimaryButton
              text="Continue shopping"
              onClick={() => navigate('/shop')}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default OrderCompletePage
