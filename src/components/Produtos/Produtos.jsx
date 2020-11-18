import React, { Component } from 'react'

import BotaoComprar from '../CardProduto'

import axios from 'axios'

import './Produtos.css'

class produtos extends Component {
    constructor(props) {
        super(props);
        this.state = { produtos: [], produtosFind: [] };
    }

    componentDidMount() {
        return axios.get('https://5fb040687edddb001646834e.mockapi.io/api-products/teste-kabum/products')
        .then(response => {
            sessionStorage.setItem('@kabum/produtos', JSON.stringify(response.data));
            this.setState({
                produtos: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    buscaProduto = () => {
        const produtos = this.state.produtos
          
        const opcao = document.getElementById('opcao-filtro').value;
        
        const input = document.getElementById('input-filtro-nome').value;
        
        if(input){
            if(opcao == "Id"){
                
                const produtoFiltro = input == "" ? [] : produtos.filter(produto => (produto.id === input))
                this.setState({
                    produtosFind: produtoFiltro
                })
            } else {
                const produtoFiltro = produtos.filter(produto => (produto.name.toLowerCase().includes(input.toLowerCase()))) 
                
                this.setState({
                    produtosFind: produtoFiltro
                })
            }
        
        } else {
            this.setState({
                produtosFind: produtos
            })
        }
    }
    
    render() {
        return (
            <div className="divisao_apresenta">
                <div className="filtros">
                    <div className="filtros-interna">
                        <div className="busca">
                            <div className="filtro">
                                <select name="opcao" id="opcao-filtro">
                                    <option value="Palavra" selected>Filtrar por Palavra</option>
                                    <option value="Id">Filtrar por Id</option>
                                </select>
                            </div>
                            <input id="input-filtro-nome" type="text" placeholder="Faça sua busca aqui" name="filtro"/>
                            <button onClick={this.buscaProduto}>Buscar</button>
                        </div>
                    </div>
                </div>
                <div className="produtos">
                    <div id="produtos-apresenta">
                        {
                            this.state.produtosFind.length > 0 ? (
                                this.state.produtosFind.map(produtos => {
                                    const linkProd = "/produto/" + produtos.id
                                        return (
                                            <BotaoComprar props={produtos} link={linkProd}></BotaoComprar>
                                        )
                                    })
                            ) : (
                                this.state.produtos.map(produtos => {
                                    const linkProd = "/produto/" + produtos.id
                                        return (
                                            <BotaoComprar props={produtos} link={linkProd}></BotaoComprar>
                                        )
                                    })
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default produtos