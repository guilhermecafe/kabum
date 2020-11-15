import React from 'react'
import BarraLateral from './BarraLateral'
import ListaProdutos from './ListaProdutos'

import './Produtos.css'


export default props => {

    return (
        <div className="divisao_apresenta">
            <div className="filtros">
                <BarraLateral></BarraLateral>
            </div>
            <div className="produtos">
                <ListaProdutos></ListaProdutos>
            </div>
        </div>
    )
}