import React, { Component } from 'react';

import BotaoComprar from '../CardProduto'

import axios from 'axios';

class ProdutosApresenta extends Component {

  state = {
    produtos: []
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
  render() {
    return (
      <>
          {
            this.state.produtos.map(produtos => {
              const linkProd = "/produto/" + produtos.id
              return (
                <BotaoComprar props={produtos} link={linkProd}></BotaoComprar>
              )
            })
          }
      </>
    )
  }
}
 
export default ProdutosApresenta;