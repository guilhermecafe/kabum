import React from 'react'

export default props => {
    return (
        <div className="produto-interna">
            <div className="imagem-produto">
                <img src="imagens/produto_fake.png" alt="Produto Fake Kabum"></img>
            </div>
            <div className="descricao-produto">
                <h1>Nome do Produto</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button>Comprar</button>
            </div>
        </div>
    )
}