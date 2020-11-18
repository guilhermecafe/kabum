import React from 'react'

import { useCarrinho } from './Carrinho/Carrinho'

export default props => {
    const { adicionar } = useCarrinho()
    return (
        <div className="itens" key={props.props.id}>
            <div className="image_prod">
                <img src={!props.props.imagem||props.props.imagem==""?'/imagens/produto_fake.png':('/imagens/produtos/'+props.props.imagem)} alt="Produto Fake Kabum"/>
            </div>
            <h3>{props.props.name}</h3>
            <button onClick={() => adicionar(props.props)}>Adicionar no Carrinho</button>
            <a href={props.link}>+ detalhes</a>
        </div>
    )
}