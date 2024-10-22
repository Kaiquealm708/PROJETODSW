import React from "react";
import './style.css';

const Produtos = () => {
  const carros = [
    { id: 1, nome: "Volkswagen Fusca 1969 Amarelo", img: "./assets/fusca1.jpg", preco: "R$ 20.000" },
    { id: 2, nome: "Volkswagen Fusca 1993 Preto", img: "./assets/fusca6.jpg", preco: "R$ 22.000" },
    { id: 3, nome: "Volksvagen Fusca 1972 Azul", img: "./assets/fusca3.jpg", preco: "R$ 18.000" },
    { id: 4, nome: "Volksvagen Fusca 1993 Laranja", img: "./assets/fusca4.jpg", preco: "R$ 25.000" },
  ];

  return (
    <section id="produtos">
      <div className="secao-produtos center">
        <h2 className="titulos" id="pro">NOSSOS PRODUTOS</h2>
        <div className="text">
          <p>
            Trabalhamos com vendas de carros novos e semi-novos, a maioria de nosso estoque são relacionados ao <strong>VolksWagen Fusca</strong>.
          </p>
          <p>
            Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado!
          </p>
        </div>
        <div className="carros-imgs">
          {carros.map(car => (
            <div className="card-carros" key={car.id}>
              <h3>{car.nome}</h3>
              <picture>
                <img src={car.img} alt={car.nome} />
              </picture>
              <p>{car.preco}</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
