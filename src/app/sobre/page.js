"use client";
import "./sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-content">
        <h1>Sobre a Calculadora</h1>
        <p>
          Esta calculadora foi desenvolvida com o propósito de unir simplicidade,
          funcionalidade e estética. Criada utilizando <strong>React</strong> e <strong>Next.js</strong>,
          ela oferece uma interface intuitiva, leve e responsiva.
        </p>
        <p>
          Inspirada no conceito de que <em>"A matemática é a linguagem com a qual
          Deus escreveu o universo"</em> — <strong>Galileu Galilei</strong>, essa calculadora busca
          não apenas realizar operações, mas também representar a beleza da lógica e da exatidão.
        </p>
        <p>
          Projeto desenvolvido por <strong>Estevão</strong> com foco em aprimorar habilidades de
          desenvolvimento front-end e design UI/UX.
        </p>
        <p className="assinatura">© {new Date().getFullYear()} Estevão — Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
