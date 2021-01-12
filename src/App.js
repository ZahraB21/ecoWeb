import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Navbar, Products, Cart } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) => {
        const items = await commerce.cart.add(productId, quantity);

        setCart(items.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[])

    console.log(cart);
    return (
        <div>
            <Navbar totalItems = {cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App;


