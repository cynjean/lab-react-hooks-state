import React from 'react'

const Cart = ({ items }) => {
  return (
    <aside className="cartPanel" aria-labelledby="cart-heading">
      <div className="cartHeading">
        <div>
          <p className="sectionLabel">Your order</p>
          <h2 id="cart-heading">Shopping Cart</h2>
        </div>
        <span className="cartCount" aria-label={`${items.length} cart items`}>
          {items.length}
        </span>
      </div>

      {items.length === 0 ? (
        <p className="emptyCart">Your cart is ready for something fresh.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>{item.name} is in your cart.</span>
              <strong>{item.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Cart
