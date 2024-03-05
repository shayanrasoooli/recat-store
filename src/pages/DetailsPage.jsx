import React from 'react'

import {Link, useParams} from "react-router-dom";
import { useProductDetails } from '../context/ProductContext';
import Loader from "../component/Loader"

import {SiOpenproject} from "react-icons/si"
import {IoMdPricetag} from "react-icons/io"
import {FaArrowLeft} from "react-icons/fa"

import styles from "./DetailsPage.module.css"


function DetailsPage() {
  const {id} = useParams();
  const productDetails = useProductDetails(+id)
  console.log(productDetails);

  if (!productDetails) {
    <Loader/>
  }
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}> <SiOpenproject/>{productDetails.category}</p>
        <span className={styles.price}>
          <IoMdPricetag/>{productDetails.price} $
        </span>
        <span>
          <FaArrowLeft/>
          <Link to='/products'>Back to shop</Link>
        </span>
      </div>
    </div>
  )
}

export default DetailsPage