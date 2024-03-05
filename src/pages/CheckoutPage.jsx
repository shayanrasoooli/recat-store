import React from 'react'

import { useCard } from "../context/CardContext"
import Basketcard from '../component/Basketcard'
import BasketSidebar from '../component/BasketSidebar';


// import styles from "./CheckOut.module.css"
import styles from "../component/CheckOut.module.css"

function CheckoutPage() {
  const [state , dispatch] = useCard();

  const clickHandler = (type , payload ) => {
    dispatch({type , payload})
  }

  if (!state.itemsCounter) {
    return(
      <div className={styles.container}>

        <h2>empty</h2>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketSidebar clickHandler={clickHandler} state={state}/>
      <div className={styles.products}>{state.selectedItem.map((item) => (<Basketcard clickHandler={clickHandler} key={item.id} data={item}/>))}</div>
    </div>
  )
}

export default CheckoutPage