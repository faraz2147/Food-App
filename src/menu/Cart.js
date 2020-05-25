import React from 'react';


function Cart({cart}) {
    return (
        <div>
           <pre>{JSON.stringify(cart,null,4)}</pre> 
        </div>
    )
}

export default Cart
