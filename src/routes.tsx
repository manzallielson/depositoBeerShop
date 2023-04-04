import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BebidasPage from './pages/Main/bebidas'
import BurgersPage from './pages/Main/burgers'
import PizzasPage from './pages/Main/pizzas'
import SobremesasPage from './pages/Main/sobremesas'
import MyCartPage from './pages/Mycart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/burgers' element={<BurgersPage />} />
        <Route path='/bebidas' element={<BebidasPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/sobremesas' element={<SobremesasPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
    </Routes>
  )
}
