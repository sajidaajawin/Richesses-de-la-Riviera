import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from '../Components/Counter';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  console.log("firstttttttttttttttttttttt",cartProduct)
  const [total, setTotal] = useState([]);
  console.log("22222222222222",total)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProduct(storedCart);

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getitems");
        console.log('Cart Products:', storedCart);
        console.log('Total:', response.data);
        setTotal(response.data);
      } catch (error) {
        console.error('An error occurred during data fetch:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    // Update local storage whenever cartProduct changes
    localStorage.setItem('cart', JSON.stringify(cartProduct));
  }, [cartProduct]);

  const handleQuantityChange = (productId, quantityChange) => {
    setCartProduct((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + quantityChange };
        }
        return item;
      });

      // Send updated cart data to the backend
      updateCartInDatabase(updatedCart);

      return updatedCart;
    });
  };

  const handleRemoveItem = (id) => {
    const removedProduct = cartProduct.find((item) => item.id === id);
    const updatedCart = cartProduct.filter((item) => item.id !== id);

    // Send updated cart data to the backend
    updateCartInDatabase(updatedCart);

    setCartProduct(updatedCart);
  };

  const updateCartInDatabase = async (updatedCart) => {
    // const token = localStorage.getItem('token');
    // axios.defaults.headers.common['Authorization'] = token;
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    try {
      // Extract product information from the cart for the API request
      const cartProducts = updatedCart.map(({ id, quantity   }) => ({ productId: id, quantity  }));
      // Send the updated cart data to the backend API
      await axios.post('http://localhost:8000/items', {
      cartProducts,
        
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      console.log('Cart updated in the database');
    } catch (error) {
      console.error('Error updating cart in the database:', error);
    }
  };

  return (
    <section className="h-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-[#17403C]">Your Cart</h1>
        </div>

        {total.length > 0 ? (
          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-gray-50 shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {total.map((product) => (
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0" key={product.product_id}>
                        {/* ... (remaining code) ... */}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/payment">
                    <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-[#17403C] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#C3CAC3]">
                      Checkout
                      <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
