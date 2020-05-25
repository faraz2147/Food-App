import React, { useState, useEffect } from 'react';
import Burgers from './Burgers';
import Pizza from './Pizza';
import Pasta from './Pasta';
import Biryani from './Biryani';
import Noodles from './Noodles';
import Desserts from './Desserts';
import Cart from './Cart';
import useMenuAPI from './useMenuAPI';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

const Menu = () => {
   const{ state:
    {
        burger,
        pizza, 
        pasta, 
        biryani, 
        noodles,
        dessert,
        cart
    },handleUpdate
   } =useMenuAPI();
    return (
        <>
        <div className="py-5" id="backgound" style={{backgroundImage: `url("https://static.toiimg.com/photo/72023714.cms")`
        ,backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
         <h1 class="text-center text-white mt-5 mb-5">MENU</h1>
       </div>
        <div className="container ">
        <Router>
        <div className="row bg-light mt-3">
            <div className="col"><Link to="/burgers"><h5 className="mt-3">Burgers</h5></Link></div>
            <div className="col"><Link to="/pizza"><h5 className="mt-3">Pizza</h5></Link></div>
            <div className="col"><Link to="/pasta"><h5 className="mt-3">Pasta</h5></Link></div>
            <div className="col"><Link to="/biryani"><h5 className="mt-3">Biryani</h5></Link></div>
            <div className="col"><Link to="/noodles"><h5 className="mt-3">Noodles</h5></Link></div>
            <div className="col"><Link to="/desserts"><h5 className="mt-3">Desserts</h5></Link></div>
            <div className="col"><Link to="/cart"><h5 className="mt-3">Cart</h5></Link></div>
        </div>
        <Route exact path="/burgers" component={() =><Burgers burger={burger} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/pizza" component={() =><Pizza pizza={pizza} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/pasta" component={() =><Pasta pasta={pasta} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/biryani" component={() =><Biryani biryani={biryani} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/noodles" component={() =><Noodles noodles={noodles} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/desserts" component={() =><Desserts dessert={dessert} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/cart" component={() =><Cart cart={cart}/>}></Route>
        </Router>
        </div>
        </>
)
}

export default Menu
