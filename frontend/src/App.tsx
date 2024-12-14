import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CartDrawer from './components/Cart/CartDrawer'
import CheckoutDetailsPage from './pages/CheckoutDetailsPage'
import OrderCompletePage from './pages/OrderCompletePage'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const App: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact-us" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkoutdetails" element={<CheckoutDetailsPage />} />
          <Route path="/ordercomplete" element={<OrderCompletePage />} />
        </Route>
      </Routes>
      <CartDrawer />
    </>
  )
}

export default App
