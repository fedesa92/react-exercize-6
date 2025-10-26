import Container from '@mui/material/Container'
import './App.css'
import { CssBaseline, Paper, Typography } from '@mui/material'
import ThemeProvider from './theme/ThemeProvider'
import { CartProvider } from './context/CartContext'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
     <ThemeProvider>
       <CssBaseline />
       <CartProvider>
        <Container sx={{mt: 5, textAlign: 'center'}}>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>
       </CartProvider>
     </ThemeProvider>
  )
}

export default App
