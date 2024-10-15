import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/Cart/cartSlice'

interface ProductCardProps {
  id: number
  name: string
  price: number
  description: string
}

export default function ProductCard({
  id,
  name,
  price,
  description,
}: ProductCardProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, quantity: 1 }))
  }

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <Link to={`/product/${id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}