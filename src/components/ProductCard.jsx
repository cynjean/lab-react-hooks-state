import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <div className={styles.cardHeader}>
        <span className={styles.category}>{product.category}</span>
        <span className={product.inStock ? styles.inStock : styles.stockWarning}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <h3>{product.name}</h3>
      <p className={styles.price}>{product.price}</p>

      <button
        type="button"
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
