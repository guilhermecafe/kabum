import React from 'react'

import Topo from '../components/Topo/Topo'

import '../components/Carrinho/Carrinho.css'

import { MdDelete } from 'react-icons/md'

import { useCarrinho } from '../components/Carrinho/Carrinho'

export default () => {
    
    const produtos = JSON.parse(sessionStorage.getItem('@kabum/carrinho'));
    
    const produto = produtos ? produtos.map((props, indice)=> {
        return (
            <li>
                <div className="imagem_produto" style={{
                    backgroundImage: 'url("/imagens/produtos/' + props.imagem + '")'
                }}>
                </div>
                <div className="detalhes">
                    <div className="titulo">
                        <h2>
                            {props.name}
                        </h2>
                        <p>
                            {props.descricao}
                        </p>
                    </div>
                    <div className="quantidade">
                        <button className="add_remove" onClick={() => removeQtd(props,indice)}><span className="icone">-</span></button>
                        <span>{props.quantidade}</span>
                        <button className="add_remove" onClick={() => adicionaQtd(props,indice)}><span className="icone">+</span></button>
                    </div>
                    <MdDelete className="remove_item" style={{marginLeft: '3vw', cursor: 'pointer'}} onClick={() => limpaItem(props,indice)} size={36} color="#d80024"/>
                </div>
            </li>
        )
    }) : []

    const carrinhoVazio = produto.length === 0 ? (<div className="mensagem_vazio">Carrinho Vazio</div>) : (
        <>
            <ul>
                <li className="legendas">
                    <div className="descricao_legenda">Descrição</div>
                    <div className="quantidade_legenda">Quantidade</div>
                </li>
                
                {produto}
            </ul>
            <button className="limpa_cart" onClick={() => limpaCart()}>Limpa Carrinho</button>
        </>
    )

    const { limpaCart } = useCarrinho()

    const { limpaItem } = useCarrinho()

    const { adicionaQtd } = useCarrinho()

    const { removeQtd } = useCarrinho()

    return (
        <div className="carrinho_page">
            <Topo></Topo>
            <div id="carrinhoGerencia" className="carrinho-interna">
                {carrinhoVazio}
            </div>
        </div>
    )
}