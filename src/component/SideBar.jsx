import React from 'react'
import {FaListUl} from "react-icons/fa"
import {createQueryObject} from "../helper/helper"

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
    <div>
    <div><FaListUl/>
    <p>categories</p>
    </div>
    <ul onClick={categoryHandler}>
    <li>ALl</li>
    <li>Electronics</li>
    <li>Jewelery</li>
    <li>Men's Clothing</li>
    <li>Woman's Clothing</li>
      </ul>
  </div>
  )
}

export default SideBar