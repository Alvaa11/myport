import About from "../components/about";
import Expirence from "../components/exp";
import Skills from "../components/skills";

const list = [
  {
    desc: "Anos de experiência com a linguagem Python e com diferentes Frameworks",
    img: "python.png",
    id: 1,
  },
  {
    desc: "Também com quase 1 ano de estudos já possuo um vasto conhecimento sobre a linguagem em JavaScript, principalmente para Front-end",
    img: "js.png",
    id: 2,
  },
  {
    desc: "Não faz muito tempo que comecei a utilizar esse framework, mas por ser uma ferramenta simples posso dizer que sei usar ela muito bem ao meu favor",
    img: "tailwindcss.svg",
    id: 3,
  },
  {
    desc: "Induzido pela fama do React.js e a importância dele para o Front-end comecei a estuda-lo para aprimorar meus projetos e sair do básico de HTML e CSS",
    img: "react.png",
    id: 4,
  },
  {
    desc: "Junto com o React.js comecei meus estudos em Next.js que foi utilizado para contruir esse portfolio, hoje é meu framework preferido para trabalhar com o Front-end",
    img: "nextjs.svg",
    id: 5,
  },
  {
    desc: "Utilizo muito Node.js para criação de API's com o framework Fastify para integrar com o Front-end, essa é minha principal linguagem para criação de API's",
    img: "nodejs.png",
    id: 6,
  },
  {
    desc: "Tive um começo complicado com o Typescript, mas hoje simplesmente não vivo sem, principalmente para usar junto com o Next.js em construção de Aplicativos Web",
    img: "typescript.png",
    id: 7,
  },
  {
    desc: "Atualmente uma das minhas linguagens favoritas que se eu pudesse usaria para tudo que fosse possivel. Minhas habilidades com C++ são muito focadas em sistemas e softwares",
    img: "c-.png",
    id: 8,
  },
  {
    desc: "Minha linguagem favorita para o Backend até o momento, utilizo meu conhecimento nessa linguagem para tratar de desafios Backends, como API's lógicas e etc.",
    img: "Csharp.png",
    id: 9,
  },
];


export default function Home() {
  return (
    <>
      <main>
        <About />
        <Skills desc={list} />
        <Expirence />
      </main>
    </>
  );
}
