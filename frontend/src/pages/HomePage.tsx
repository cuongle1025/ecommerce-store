import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setProducts, setLoading, setError } from '../features/Products/productsSlice';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        // Replace this with your actual API call
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (err) {
        dispatch(setError('Failed to fetch products'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
