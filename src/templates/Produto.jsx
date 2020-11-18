import React from 'react'

import '../components/Produtos/Produto.css'

import Topo from '../components/Topo/Topo'

import Produto from '../components/Produtos/Produto'

export default () => {
    return (
        <div className="produto_page">
            <Topo></Topo>
            <Produto></Produto>
        </div>
    )
}