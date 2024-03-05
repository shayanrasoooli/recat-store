import React from 'react'
import { Link } from 'react-router-dom'

import { PiShoppingCartBold } from "react-icons/pi"
import { useCard } from '../context/CardContext'
import styles from "./Layout.module.css"

function Layout({children}) {
    const [state] = useCard();
  return (
    <>
    <header className={styles.header}>
        <Link to="/products">botoshop</Link>
        <Link to="/checkout"><PiShoppingCartBold/>
        {!!state.itemsCounter && (
        <span>{state.itemsCounter}</span>

        )}
        </Link>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>developed by shayan with love </p>
    </footer>
    </>
  )
}

export default Layout
