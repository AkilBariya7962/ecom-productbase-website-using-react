import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchGcloth } from '../assets/featured/GclothSlice'
import { add } from '../assets/featured/AddCart';

function Gcloth() {

  const dispatch = useDispatch();
  const ClothSlice = useSelector((state) => state.cloth)

  useEffect(() => {
    dispatch(FetchGcloth());
  }, [dispatch]);

  const AddHandle = (product) => {
    dispatch(add(product));
    alert("Product added to cart");
  }

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
        {ClothSlice.loading && <div className="spinner"></div>}
        {ClothSlice.error && <h3 className="text-red-600">Error: {ClothSlice.error}</h3>}

        {ClothSlice.items.map((product) => (
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
              <p className="text-gray-500">${product.price}</p>
              <button className="mt-auto w-full bg-purple-600 text-white py-2 rounded-lg
               hover:bg-purple-700"
                onClick={() => AddHandle(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gcloth
