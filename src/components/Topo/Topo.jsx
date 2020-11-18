import React from 'react'

import { MdShoppingCart } from 'react-icons/md';

import './Topo.css'

export default (props) => {
    return (
        <div className="topo-teste">
            <a className="logo_kabum" href="/">
                <img src="/imagens/logo.png" width="288" height="104" border="0"></img>
            </a>
            <a className="carrinho_divisao" href="/carrinho">
                <div className="name_qtd">
                    <h3>Meu Carrinho</h3>
                    <span><u id="produto-quantidade">0</u> Produtos</span>
                </div>
                <MdShoppingCart size={36} color="#fff"></MdShoppingCart>
            </a>
        </div>
    )
}