// src/Sortlist.js
import React, { useEffect } from 'react';
import { FetchSortlist } from '../assets/featured/SortSlice';
import { useSelector, useDispatch } from 'react-redux';
import './loading.css';

const Sortlist = () => {
  const dispatch = useDispatch();
  const Sortslice = useSelector((state) => state.sortlist);

  useEffect(() => {
    dispatch(FetchSortlist());
  }, [dispatch]);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
      {Sortslice.loading && <div className="spinner"></div>}
      {Sortslice.error && <h3 className="text-red-600">Error: {Sortslice.error}</h3>}

      {!Sortslice.loading && Sortslice?.items && Sortslice.items.map((product) => (
        <div key={product.id} className="bg-white border rounded-lg shadow-md p-4 flex flex-col mt-28 items-center h-[350px]">
          <div className="w-full h-40 overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover h-full rounded-t-lg"
            />
          </div>
          <div className="flex flex-col items-center mt-4 flex-grow">
            <h3 className="text-lg font-semibold text-center">{product.title}</h3>
            <p className="text-gray-500">${product.price.toFixed(2)}</p>
            <button className="mt-auto w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sortlist;
