import { FAIL, SUCCES } from "./constants";


export const restaurantListReducer=(state={restaurantList:[]},action)=>{
    switch (action.type) {
        case SUCCES:
           return{
            restaurantList:action.payload
           }

           case FAIL:
            return{
                restaurantList:[]
            }
    
        default:
            return state
    }
}