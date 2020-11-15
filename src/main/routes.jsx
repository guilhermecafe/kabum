import React from 'react'

import { BrowserRouter , Route } from 'react-router-dom'

import Home from '../templates/Home'
import Carrinho from '../templates/Carrinho'
import Produto from '../templates/Produto'

export default props => (
    <BrowserRouter>
        <Route path='/home' component={Home}/>
        <Route path='/carrinho' component={Carrinho}/>
        <Route path='/produto/:id' component={Produto}></Route>
    </BrowserRouter>
)