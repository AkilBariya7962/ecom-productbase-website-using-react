import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../assets/featured/AddCart";

const Cartitem = () => {
  const Cartitems = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id) => {
    dispatch(remove(id))
  }
  return (
    <>
      {Cartitems.length === 0 ? <h2 className="text-amber-600 p-20 flex justify-center items-center h-screen">
        Your cart is empty. Add some products to continue shopping.
      </h2> : <div className="p-14">
        {Cartitems.map((items) => (
          <div key={items.id}>
            <div className="w-full bg-white flex justify-between items-center p-6">
              <div className="img">
                <img className="w-20 p-3" src={items.image} alt="" />
              </div>
              <div className="title">
                <h3>{items.title}</h3>
              </div>
              <div className="price">
                <h3>{items.price} ₹</h3>
              </div>
              <button className="bg-amber-600 text-white pl-5 pr-5 pt-1 pb-1 rad rounded-md hover:bg-amber-500"
                onClick={() => removeItem(items.id)}
              >
                Remove From Cart
              </button>
              <button className="bg-amber-600 text-white pl-5 pr-5 pt-1 pb-1 rad rounded-md hover:bg-amber-500"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>}

    </>
  )
}

export default Cartitem;