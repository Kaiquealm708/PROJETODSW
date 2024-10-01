import React from "react";
import './style.css'

const Produtos = () =>{
  return (
  <section id="produtos">
    <h2 className="titulos" id="pro">NOSSOS PRODUTOS</h2>
    <div className="text">
      <p>
      Trabalhamos com vendas de carros novos e semi-novos, a maioria de nosso estoque são relacionados ao <strong>VolksWagen Fusca</strong>.
      </p>

      <p>
      Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado!.
      </p>
    </div>
    <div className="carros-imgs">
      <div className="card-carros">
        <h3>Carros Antigos</h3>
          <picture>
            <img src="./assets/fusca1.jpg"></img>
          </picture>
        <p>xx</p>
      </div>
    </div>

    <div className="carros-imgs">
      <div className="card-carros">
        <h3>Carros Antigos</h3>
          <picture>
            <img src="./assets/fusca6.jpg"></img>
          </picture>
        <p>xx</p>
      </div>
    </div>

    <div className="carros-imgs">
      <div className="card-carros">
        <h3>Carros Antigos</h3>
          <picture>
            <img src="./assets/fusca3.jpg"></img>
          </picture>
        <p>xx</p>
      </div>
    </div>

    <div className="carros-imgs">
      <div className="card-carros">
        <h3>Carros Antigos</h3>
          <picture>
            <img src="./assets/fusca4.jpg"></img>
          </picture>
        <p>xx</p>
      </div>
    </div>

  </section>
)
}

export default Produtos;