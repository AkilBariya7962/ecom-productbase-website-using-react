import React, { useEffect } from 'react';
import { Fecthproductdata } from '../assets/featured/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import './loading.css';
import HomePage from './Home';
import { add } from '../assets/featured/AddCart';
import Title from './Title';

const ProductCard = () => {

  const dispatch = useDispatch();
  const Products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(Fecthproductdata());
  }, [dispatch]);

  const AddHandle = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <HomePage />
      <Title />
      {Products.loading && <div className="spinner"></div>}

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4">
        {Products.error && <h3 className="text-red-600">Error: {Products.error}</h3>}

        {!Products.loading && Products.items && Products.items.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-4 flex flex-col justify-between h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-60 w-full object-cover rounded-t-lg mb-4"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 mt-2">${product.price.toFixed(2)}</p>
            </div>
            <button
              className="mt-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700"
              onClick={() => AddHandle(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
