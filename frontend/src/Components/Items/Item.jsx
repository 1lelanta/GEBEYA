import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import useBirrCurrency from '../../hooks/useBirrCurrency'

const Item = (props) => {
  const { formatBirr } = useBirrCurrency();
  const discount =
    props.old_price > props.new_price
      ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100)
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
          {formatBirr(props.new_price)}
        </div>
        <div className="item-price-old">
          {formatBirr(props.old_price)}
        </div>
      </div>
      <Link to={`/product/${props.id}`} className='item-action' onClick={handleViewProduct}>
        View details
      </Link>
    </div>
  )
}

export default Item