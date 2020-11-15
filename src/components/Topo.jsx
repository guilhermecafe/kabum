import React from 'react'

import './Topo.css'

export default props => {
    return (
        <div className="topo-teste">
            <h1>Teste Front-End Kabum</h1>
            <ul className="menu">
                <li>
                    <a href="/home">Home</a></li>
                <li>
                    <a href="/carrinho">Carrinho</a></li>
            </ul>
        </div>
    )
}