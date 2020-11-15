import React from 'react'

export default props => {
    return (
        <div className="filtros-interna">
            <h2>Faça sua busca aqui</h2>
            <div className="busca">
                <input type="text" name="filtro"/>
                <button className="busca-palavra">Busca</button>
            </div>
        </div>
    )
}