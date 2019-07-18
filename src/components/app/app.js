import React from 'react';
import './app.css';
import {
    CartPage,
    HomePage
} from '../pages';
import ShopHeader from '../shop-header'
import { Switch, Route} from 'react-router-dom'


const App = () => {
        return (
            <main role="main" className="container">
            <ShopHeader numItems={5} total={220}/>
             <Switch>
                <Route
                path="/"
                component={HomePage}
                exact/>

                 <Route
                path="/cart"
                component={CartPage}
                />
            </Switch>
            </main>
         
        );
    
};
export default App;