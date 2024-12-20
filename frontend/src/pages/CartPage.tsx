import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../app/store'
// import { removeFromCart, updateQuantity } from '../features/Cart/cartSlice'
import CheckoutItemsList from '../components/Checkout/CheckoutItemsList'
import CheckoutSummary from '../components/Checkout/CheckoutSummary'

const CartPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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

  return (
    <>
      <section className="pt-10">
        <h1 className="text-center text-5xl font-medium">Cart</h1>
      </section>
      <section className="grid grid-cols-3 mt-12 gap-16 pb-20">
        <div className="flex flex-col col-span-2">
          <CheckoutItemsList />
        </div>
        <div className="col-span-1">
          <CheckoutSummary />
        </div>
      </section>
    </>
  )
}

export default CartPage
