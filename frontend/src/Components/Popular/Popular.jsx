import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Item'
import { fetchJson } from '../../config/api'
import data_product from '../Assets/data'

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const loadPopularProducts = async () => {
      try {
        const data = await fetchJson('/popularinwomen');
        setPopularProducts(Array.isArray(data) && data.length > 0 ? data : data_product);
      } catch (error) {
        console.error('Failed to load popular products:', error);
        setPopularProducts(data_product);
      }
    };

    loadPopularProducts();
  }, []);
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
              return<Item key ={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price = {item.old_price}/> 
            })}
        </div>
    </div>
  )
}

export default Popular