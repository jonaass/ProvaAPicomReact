import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import Maiornumero from './pages/maiornumero'

export default function SiteRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/corPrimaria' element={<CorPrimaria />} />
            <Route path='/frequencia' element={<Frequencia />} />
            <Route path='/ingresso' element={<Ingresso />} />
            <Route path='/maiornumero' element={<Maiornumero />} />
        </Routes>
        </BrowserRouter>
    )
}