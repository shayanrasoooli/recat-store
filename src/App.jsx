
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import DetailsPage from './pages/DetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import PageNotFound from './pages/404'
import ProductProvider from './context/ProductContext'

function App() {

  return (
    <ProductProvider>


    <Routes>
      <Route index element={<Navigate to="/products" replace/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/products/:id' element={<DetailsPage/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path='/*' element={<PageNotFound/>}/>

    </Routes>
    </ProductProvider>
  )
}

export default App