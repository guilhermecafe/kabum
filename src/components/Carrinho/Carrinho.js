import React, { createContext, useState, useContext, useEffect } from 'react'

const CarrinhoContext = createContext()

export default function CarrinhoProvider({children}) {

    const produtos = JSON.parse(sessionStorage.getItem('@kabum/carrinho'));

    const produtoCart = produtos ? produtos : []
        
    const [carrinho, setCarrinho] = useState(produtoCart)

    const [quantidade, setQuantidade] = useState(carrinho.length)

    useEffect(()=>{
        document.getElementById('produto-quantidade').innerHTML = carrinho.length
    }, [carrinho])

    function adicionar(item) {

        const novoCarrinho = carrinho

        let verifica = false

        novoCarrinho.map(props=>{

            if(props.id===item.id){
                verifica = true
            }
            
        })

        if(!verifica){

            novoCarrinho.push(item)

            setCarrinho([...novoCarrinho])

            sessionStorage.setItem('@kabum/carrinho', JSON.stringify(novoCarrinho));

            setQuantidade({
                quantidade: carrinho.length + 1
            })

            window.location.assign("/carrinho")

        } else {
            alert('Produto já inserido no carrinho!')
        }
        
    }

    function limpaCart() {

        const novoCarrinho = []

        setCarrinho([...novoCarrinho])

        sessionStorage.removeItem('@kabum/carrinho');

    }

    function limpaItem(item,indice) {

        const novoCarrinho = carrinho

        novoCarrinho.splice(indice, 1);

        setCarrinho([...novoCarrinho])

        sessionStorage.setItem('@kabum/carrinho', JSON.stringify(novoCarrinho));

        setQuantidade({
            quantidade: carrinho.length - 1
        })

    }

    function adicionaQtd(item,indice) {

        const novoCarrinho = carrinho
        
        novoCarrinho[indice].quantidade = novoCarrinho[indice].quantidade + 1

        setCarrinho([...novoCarrinho])

        sessionStorage.setItem('@kabum/carrinho', JSON.stringify(novoCarrinho));

    }

    function removeQtd(item,indice) {

        const novoCarrinho = carrinho
        
        novoCarrinho[indice].quantidade = novoCarrinho[indice].quantidade - 1

        setCarrinho([...novoCarrinho])

        sessionStorage.setItem('@kabum/carrinho', JSON.stringify(novoCarrinho));

    }

    const store = {
        adicionar,
        limpaCart,
        limpaItem,
        adicionaQtd,
        removeQtd,
        carrinho,
        quantidade
    }

    return (
        <CarrinhoContext.Provider value={store}>
            {children}
        </CarrinhoContext.Provider>
    )


}

export function useCarrinho() {
    const context = useContext(CarrinhoContext)

    const {
        carrinho,
        adicionar,
        limpaCart,
        limpaItem,
        adicionaQtd,
        removeQtd,
        quantidade
    } = context

    return {
        carrinho,
        adicionar,
        limpaCart,
        limpaItem,
        adicionaQtd,
        removeQtd,
        quantidade
    }
}