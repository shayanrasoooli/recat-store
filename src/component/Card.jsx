import React from 'react';
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb"

import { MdDeleteOutline } from "react-icons/md"

import { TbShoppingBagCheck } from "react-icons/tb"
import { productQuantity, shortenText } from '../helper/helper';
import styles from "./Card.module.css"
import { useCard } from '../context/CardContext';




function Card({data}) {
    const {id , title , image , price} = data;

    const [state , dispatch] = useCard();

    const quantity = productQuantity(state , id);
    console.log(quantity);
    console.log(data);

    const   clickHandler = (type) => {
        dispatch({type   , payload:data});    }


    return (
    <div className={styles.card}>
        <img src={image} alt={title} style={{width:"150px"}} />
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}> <TbListDetails/>  </Link>
            <div>
                {
                    quantity === 1 && (
                        <button onClick={() => clickHandler("REMOVE_ITEM")}><MdDeleteOutline/></button>
                    ) 
                }

                {
                    quantity > 1 && (
                        <button onClick={() => clickHandler("DECREASE")}>-</button>

                    )
                }
                {!!quantity && (
                    <span style={{color:"black"}}>{quantity}</span>

                )}
                {
                    quantity === 0 ? (
            // <button onClick={() => clickHandler("ADD_ITEM")}><TbShoppingBagCheck/></button>
            <button onClick={() => clickHandler("ADD-ITEM")}><TbShoppingBagCheck/></button>

                    ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
                    )
                }





            </div>
        </div>
    </div>
  )
}

export default Card