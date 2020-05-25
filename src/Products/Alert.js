import React from 'react'

const Alert=() =>{
    return (
        <div className="col-sm-8 text-center">
            <img src="https://www.infoskysolutions.com/images/cart_is_empty.png" width="250" height="250"/>
            <p className="text-muted">No items in the Cart Please Login to Place order</p>
            <button type="submit" className="bg-warning btn-md btn-rounded">Login</button>
        </div>
    )
}

export default Alert
