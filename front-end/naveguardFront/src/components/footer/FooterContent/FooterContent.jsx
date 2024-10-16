import React from "react";
import "./FooterContent.css";

function FooterContent() {
  return (
    <>
        <div className="conteudo-geral-footer">
          <div className="primeira-coluna">
            <div className="main-titulo">
              <h1 className="h1-footer">NAVEGUARD</h1>
            </div>
            <p>Naveguard &copy; 2024</p>
            <p>Todos os direitos reservados</p>
          </div>

          <div className="segunda-coluna">
            <p>Home</p>
            <p>Sobre</p>
            <p>Apoie o Naveguard</p>
            <p>Fale conosco</p>
          </div>

          <div className="terceira-coluna">
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
          </div>

          <div className="quarta-coluna">
            <p>Receba Novidades</p>
            <input
              className="input-email"
              type="email"
              placeholder="Insira seu e-mail"
            />
          </div>
        </div>
    </>
  );
}

export default FooterContent;
