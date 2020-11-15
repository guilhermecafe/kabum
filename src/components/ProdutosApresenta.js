import React, { Component } from 'react';

import axios from 'axios';
 
class ProdutosApresenta extends Component {
  state = {
    produtos: []
  }
  componentDidMount() {
    return axios.get('https://5fb040687edddb001646834e.mockapi.io/api-products/teste-kabum/products')
      .then(response => {
        this.setState({
          produtos: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <>
          {
            this.state.produtos.map(produtos => {
              const linkProd = "/produto/" + produtos.id
              return (
                <div className="itens" key={produtos.id}>
                  <img src="imagens/produto_fake.png" alt="Produto Fake Kabum"/>
                  <h3>{produtos.name}</h3>
                  <button onClick="">Adicionar no Carrinho</button>
                  <a href={linkProd}>Ver mais</a>
                </div>
              )
            }
            )
          }
      </>
    )
  }
}
 
export default ProdutosApresenta;