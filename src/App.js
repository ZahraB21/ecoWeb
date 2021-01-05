import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Navbar, Products } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;


