import React from 'react'

import { useCarrinho } from '../Carrinho/Carrinho'

import { useParams } from "react-router-dom";

export default () => {
    let { id } = useParams();

    const produtos = JSON.parse(sessionStorage.getItem('@kabum/produtos'));

    const produto = produtos.filter(produto => (produto.id === id));

    const { adicionar } = useCarrinho()

    return (
        <>
            <div className="produto-interna">
                <div className="imagem-produto">
                    <img src={!produto[0].imagem||produto[0].imagem==""?'/imagens/produto_fake.png':('/imagens/produtos/'+produto[0].imagem)} alt="Produto Fake Kabum"/>
                </div>
                <div className="descricao-produto">
                    <h1>{produto[0].name}</h1>
                    <p>{produto[0].descricao}</p>
                    <button onClick={() => adicionar(produto[0])}>Comprar</button>
                </div>
            </div>
        </>
    )
}