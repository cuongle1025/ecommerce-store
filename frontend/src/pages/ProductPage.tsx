import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addToCart } from '../features/Cart/cartSlice';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => 
    state.products.items.find(item => item.id === Number(id))
  );

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-6">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
