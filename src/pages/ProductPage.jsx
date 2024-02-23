import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/ProductContext';
import styles from "./ProductPage.module.css"
import Card from '../component/Card';
import Loader from '../component/Loader';
import {searchProducts , filterProducts, createQueryObject, getInitialQuery} from "../helper/helper"
import { useParams, useSearchParams } from 'react-router-dom';
import SearchBox from '../component/SearchBox';
import SideBar from '../component/SideBar';

function ProductPage() {
    const products = useProduct();

    
    const [displayed , setDisplayed] = useState([]);

    const [search , setSearch] = useState("")
    const [query , setQuery ] = useState({});

    const [searchParams , setSearchParams ] = useSearchParams()


    useEffect(() => {
      setDisplayed(products)
      setQuery(getInitialQuery(searchParams))
    },[products])


    useEffect(() => {
      setSearchParams(query)
      setSearch(query.search || "")
      let finalProducts = searchProducts(products , query.search);
      finalProducts = filterProducts(finalProducts , query.category);
      setDisplayed(finalProducts);
    } , [query])




  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

    <div className={styles.container}>
        <div className={styles.products}>
            {!displayed.length && <Loader/>}
            {displayed.map((p) => (
            <Card key={p.id} data={p}/>
            ))}
        </div>

        <SideBar query={query} setQuery={setQuery}/>

    </div>
    </>
  )
}

export default ProductPage