import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import useBirrCurrency from '../../hooks/useBirrCurrency'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const { formatMarketPrice, getBirrAmount } = useBirrCurrency();

    const subtotalBirr = all_product.reduce((total, product) => {
        const quantity = cartItems[product.id] || 0;
        if (quantity <= 0) {
            return total;
        }

        return total + getBirrAmount(product.new_price, product.new_price_etb) * quantity;
    }, 0);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  <div>
            <div className="cartitem-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>{formatMarketPrice(e.new_price, e.new_price_etb)}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>
                                    {formatMarketPrice(
                                        e.new_price * cartItems[e.id],
                                        e.new_price_etb !== undefined && e.new_price_etb !== null
                                            ? e.new_price_etb * cartItems[e.id]
                                            : undefined
                                    )}
                                </p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick = {()=>removeFromCart(e.id)}alt="" />
                
            </div>
            <hr />
        </div>
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-totals">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>{formatMarketPrice(0, subtotalBirr)}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Sheeping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>{formatMarketPrice(0, subtotalBirr)}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default CartItems