import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage'
import FavouritesPage from './pages/FavouritesPage'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/Github-search' element={<HomePage/>}/>
        <Route path='/Github-search/favourites' element={<FavouritesPage/>}/>
      </Routes>
    </>
  )
}

export default App
