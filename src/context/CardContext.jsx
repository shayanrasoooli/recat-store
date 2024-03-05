import React, { createContext, useContext, useReducer } from 'react'
import { sumProducts } from '../helper/helper';

const CardContext = createContext();

const initialState = {
   selectedItem : [],
   itemsCounter : 0,
   total:0,
   checkout : false
};

const reducer = (state , action) => {
  console.log(action);
  switch (action.type) {
    // case 'ADD-ITEM':
      
    //   if(!state.selectedItem.find((item) => item.id === action.payload.id)){
    //     state.selectedItem.push({...action.payload , quantity : 1})
    //   }
    //   return {
    //     ...state , 
    //     // selectedItem:[...state.selectedItem],
    //     ...sumProducts(state.selectedItem),
    //     checkout:false
    //   }

    // case  "REMOVE_ITEM" :
    //   const newSelectedItem =state.selectedItem.filter((item) => item.id !== action.payload.id)
    //   return{
    //     ...state,
    //     selectedItem:[...newSelectedItem],
    //     ...sumProducts(newSelectedItem)
    //   }
    // case "INCREASE" :
    //   const increaseIndex = state.selectedItem.findIndex(item => item.id === action.payload.id)
    //   state.selectedItem[increaseIndex].quantity++
    //   return{
    //     ...state,
    //     ...sumProducts(state.selectedItem)
    //   }   

    // case "DECREASE" :
    //   const decreaseIndex = state.selectedItem.findIndex(item => item.id === action.payload.id)
    //   state.selectedItem[decreaseIndex].quantity--;
    //   return{
    //     ...state, 
    //     ...sumProducts(state.selectedItems)
    //   }
    // case "CHECKOUT" : 
    // return{
    //   selectedItem : [],
    //   itemsCounter:0,
    //   total:0,
    //   checkout:true,
    // };
    case 'ADD-ITEM':
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          selectedItem: [...state.selectedItem, { ...action.payload, quantity: 1 }],
          ...sumProducts([...state.selectedItem, { ...action.payload, quantity: 1 }]),
          checkout: false
        };
      }
      return state;
    
    case "REMOVE_ITEM":
      return {
        ...state,
        selectedItem: state.selectedItem.filter((item) => item.id !== action.payload.id),
        ...sumProducts(state.selectedItem.filter((item) => item.id !== action.payload.id))
      };
    
    case "INCREASE":
      return {
        ...state,
        selectedItem: state.selectedItem.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item),
        ...sumProducts(state.selectedItem.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item))
      };
    
    case "DECREASE":
      return {
        ...state,
        selectedItem: state.selectedItem.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item),
        ...sumProducts(state.selectedItem.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item))
      };
    
    case "CHECKOUT":
      return {
        selectedItem: [],
        itemsCounter: 0,
        total: 0,
        checkout: true
      };
  
    default:
      throw new Error("Invalid Action!")
  }
};

function CardProvider({children}) {
  const [state , dispatch] = useReducer(reducer , initialState);

  return (
    <CardContext.Provider value={{state , dispatch}}>{children}</CardContext.Provider>
  )
} 

const useCard = () => {
    const {state ,dispatch} = useContext(CardContext);
    return [state , dispatch];
}


export {useCard}
export default CardProvider