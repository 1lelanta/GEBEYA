import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data';
import Item from '../Items/Item';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {data_product.map((item, i)=>{
            return <Item key ={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price = {item.old_price} new_price_etb={item.new_price_etb} old_price_etb={item.old_price_etb}/>
            })}

        </div>
    </div>
  )
}

export default RelatedProducts