import './App.css'
import HomePage from './pages/HomePage'
import PokeDetailPage from './pages/PokeDetailPage'
import PokedexPage from './pages/PokedexPage'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

    // useSelector accede a la store, y devuelve el estado pedido en el callback

    return (
      <div>

        <Routes>
          <Route path = '/' element = { <HomePage />} />
          <Route element = {<ProtectedRoutes />}>
            <Route path = '/pokedex' element = { <PokedexPage />} />
            <Route path = '/pokedex/:name' element = { <PokeDetailPage />} />
          </Route>
        </Routes>
      </div>
    )
}

export default App