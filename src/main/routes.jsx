import React from 'react'

import { BrowserRouter , Route, Redirect } from 'react-router-dom'

import Home from '../templates/Home'

import Carrinho from '../templates/Carrinho'

import Produto from '../templates/Produto'

import CarrinhoProvider from '../components/Carrinho/Carrinho'

export default props => (
    <CarrinhoProvider>
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/carrinho' component={Carrinho}/>
            <Route path='/produto/:id' component={Produto}/>
        </BrowserRouter>
    </CarrinhoProvider>
)