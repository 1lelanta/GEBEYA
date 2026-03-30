import React, { useEffect, useState } from 'react'
import './NewCollections.css'

import Item from '../Items/Item'
import { fetchJson } from '../../config/api'
import new_collections from '../Assets/new_collections'

const NewCollections = () => {
  const [new_collection, setNew_collection]=useState([])

  useEffect(() => {
    const loadNewCollections = async () => {
      try {
        const data = await fetchJson('/newcollections');
        setNew_collection(Array.isArray(data) && data.length > 0 ? data : new_collections);
      } catch (error) {
        console.error('Failed to load new collections:', error);
        setNew_collection(new_collections);
      }
    };

    loadNewCollections();
  }, []);
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
        {new_collection.map((item, i)=>{
          return <Item key ={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price = {item.old_price} new_price_etb={item.new_price_etb} old_price_etb={item.old_price_etb}/>
        })}
        </div>
    </div>
  )
}

export default NewCollections