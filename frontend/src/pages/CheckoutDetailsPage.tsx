import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../app/store'
// import { removeFromCart, updateQuantity } from '../features/Cart/cartSlice'
import CheckoutSummary from '../components/Checkout/CheckoutSummary'
import ContactInfoForm from '../components/Checkout/ContactInfoForm'
import ShippingAddressForm from '../components/Checkout/ShippingAddressForm'
import PaymentMethodForm from '../components/Checkout/PaymentMethodForm'
import PrimaryButton from '../components/Buttons/PrimaryButton'

const CheckoutDetailsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
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

  const handlePlaceOrder = () => {
    navigate('/ordercomplete')
  }

  return (
    <>
      <section className="pt-10">
        <h1 className="text-center text-5xl font-medium">Check Out</h1>
      </section>
      <section className="grid grid-cols-3 mt-12 gap-16 pb-20">
        <div className="flex flex-col col-span-2 gap-6">
          <ContactInfoForm />
          <ShippingAddressForm />
          <PaymentMethodForm />
          <PrimaryButton text="Place order" onClick={handlePlaceOrder} />
        </div>
        <div className="col-span-1">
          <CheckoutSummary />
        </div>
      </section>
    </>
  )
}

export default CheckoutDetailsPage
