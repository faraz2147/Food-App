import React, { useState, useEffect,useReducer } from 'react'
import menureducer from './menureducer'

const useMenuAPI=()=> {
    const ALL_ITEMS ={
        burger: [],
        pizza: [], 
        pasta: [], 
        biryani: [], 
        noodles: [],
        dessert: [],
        cart:[]
     }
    const [state, dispatch]=useReducer(menureducer, ALL_ITEMS);
    const {burger,pizza,pasta,biryani,noodles,dessert,cart}=state;
    useEffect(() => {
        fetch('https://jsonblob.com/api/07b5686b-9cc9-11ea-9a4c-13bbf958846e')
            .then(res => res.json())
            .then(json => {
                let [{ burger, pizza, pasta, biryani, noodles,dessert}] = json
                setTimeout(() => {
                   dispatch({
                       type: 'API_CALL',payload:{
                        burger: [...burger],
                        pizza: [...pizza], 
                        pasta: [...pasta], 
                        biryani: [...biryani], 
                        noodles: [...noodles],
                        dessert: [...dessert] 
                       }
                   })
                }, 1000)
            })
    }, []);
    const handleUpdate=(e,ind)=>{
        if(e.target.id=="noodles"){
            (dispatch({type:'CART',payload:{
                cart:[...cart, ...noodles.filter((a,i)=>i==ind)]
            }}))
        }
        if(e.target.id=="biryani"){
            (dispatch({type:'CART',payload:{
                cart:[...cart, ...biryani.filter((a,i)=>i==ind)]
            }}))
        }
        if(e.target.id=="pizza"){
            (dispatch({type:'CART',payload:{
                cart:[...cart, ...pizza.filter((a,i)=>i==ind)]
            }}))
        }
        if(e.target.id=="pasta"){
            (dispatch({type:'CART',payload:{
                cart:[...cart, ...pasta.filter((a,i)=>i==ind)]
            }}))
        }
        if(e.target.id=="burger"){
            (dispatch({type:'CART',payload:{
                cart:[...cart, ...burger.filter((a,i)=>i==ind)]
            }}))
        }
        if(e.target.id=="dessert"){
            (dispatch({type:'CART',payload:{
                cart:[...cart, ...dessert.filter((a,i)=>i==ind)]
            }}))
        }
    }
    return {
        state,
        handleUpdate
    }
}

export default useMenuAPI
