import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import useBirrCurrency from '../../hooks/useBirrCurrency'

const Item = (props) => {
  const { formatMarketPrice } = useBirrCurrency();
  const oldPriceValue = props.old_price_etb ?? props.old_price;
  const newPriceValue = props.new_price_etb ?? props.new_price;
  const discount =
    oldPriceValue > newPriceValue
      ? Math.round(((oldPriceValue - newPriceValue) / oldPriceValue) * 100)
      : 0;

  const handleViewProduct = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} className='item-image-wrap' onClick={handleViewProduct}>
        {discount > 0 && <span className='item-badge'>{discount}% OFF</span>}
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {formatMarketPrice(props.new_price, props.new_price_etb)}
        </div>
        <div className="item-price-old">
          {formatMarketPrice(props.old_price, props.old_price_etb)}
        </div>
      </div>
      <Link to={`/product/${props.id}`} className='item-action' onClick={handleViewProduct}>
        View details
      </Link>
    </div>
  )
}

export default Item