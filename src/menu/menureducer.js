const menureducer = (state, action) => {

    const {type,payload:context}= action
    const {burger,pizza,pasta,biryani,noodles,dessert,cart}=state;

    switch (type) {
        case 'API_CALL': {
            return{
                ...state,
                ...context
            }
        }
        case 'CART': {
            console.log(cart)
            return{
                ...state,
                ...context
            }
        }
        default:{
            return state
        }
    }
}
export default menureducer