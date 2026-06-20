import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product])
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div className={darkMode ? 'app appDark' : 'app'}>
      <header className="appHeader">
        <div>
          <p className="eyebrow">Fresh picks, simple shopping</p>
          <h1>Shopping App</h1>
          <p className="intro">Choose your essentials and keep your cart organized.</p>
        </div>
        <DarkModeToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode((currentMode) => !currentMode)}
        />
      </header>

      <main className="shoppingLayout">
        <section className="productsPanel" aria-labelledby="products-heading">
          <div className="sectionHeading">
            <div>
              <p className="sectionLabel">Shop</p>
              <h2 id="products-heading">Available Products</h2>
            </div>

            <label className="filterControl">
              <span>Filter by Category</span>
              <select value={category} onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Veggies">Veggies</option>
              </select>
            </label>
          </div>

          <ProductList category={category} onAddToCart={handleAddToCart} />
        </section>

        <Cart items={cartItems} />
      </main>
    </div>
  )
}

export default App
