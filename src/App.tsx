import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { CartProvider } from './context/CardContext'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackProvider } from './context/SnackContext'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <ToastContainer />
        <CartProvider>
          <SnackProvider>
            <AppRoutes />
            <GlobalStyle />
            <Normalize />
          </SnackProvider>
        </CartProvider>
      </Theme>
    </BrowserRouter>
  )
}
