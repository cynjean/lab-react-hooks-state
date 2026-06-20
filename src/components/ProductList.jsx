import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Bread', price: '$3.00', category: 'Bakery', inStock: true },
]

const ProductList = ({ category, onAddToCart }) => {
  const visibleProducts = category === 'all'
    ? sampleProducts
    : sampleProducts.filter((product) => product.category === category)

  return (
    <div className="productGrid">
      {visibleProducts.length === 0 && (
        <p className="emptyMessage">No products available in this category.</p>
      )}

      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
