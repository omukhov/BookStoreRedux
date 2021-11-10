import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../header';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Routes>
                <Route path="/" exact element={<HomePage />}/>
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </main>
    );
};

export default App;