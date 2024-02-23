import React from 'react'
import {FaListUl} from "react-icons/fa"
import {createQueryObject} from "../helper/helper"


import styles from "./SideBar.module.css"

import { category } from '../constant/List'
function SideBar({query , setQuery}) {

    const categoryHandler = (event) => {
        const {tagName} = event.target;
        const category = event.target.innerText.toLowerCase()

        if (tagName ==! "LI") {
        return
        }
        setQuery((query) =>  createQueryObject(query , {category}) )
      }
  return (
    <div className={styles.sidebar}>
    <div><FaListUl/>
    <p>categories</p>
    </div>
    <ul onClick={categoryHandler}>
        {category.map((item) => (<li className={item.type.toLowerCase() === query.category ? styles.selected : null} key={item.id}>{item.type}</li>))}
      </ul>
  </div>
  )
}

export default SideBar