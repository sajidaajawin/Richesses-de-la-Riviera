import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    axios
      .post(`https://fakestoreapi.com/products`, { productId: id })
      .then((response) => {
        swal("Done!", "Product has been added to the cart", "success");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  if (!product || product.length === 0) {
    return <div>Loading...</div>;
  }
  
  const Details = product[0];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex -mx-2 mb-4 justify-center">
              <div className="w-1/2 px-2">
                <button
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
