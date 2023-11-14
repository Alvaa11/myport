import { twMerge } from "tailwind-merge";
import Image from "next/image";
import styles from "../styles/name.module.css";

export default function About() {
  return (
    <>
      <section className='w-full min-h-screen bg-slate-800 lg:bg-[url("../../public/img/tech.jpg")] bg-[url("../../public/img/prog.jpg")] bg-center bg-no-repeat bg-cover lg:bg-contain lg:bg-right flex flex-col justify-center lg:items-start items-center p-10'>
        <div className={twMerge(styles.animationLeft, "w-full lg:w-[350px]")}>
          <h1 className="text-5xl font-bold text-gray-50">
            Olá, meu nome é{" "}
            <span className={twMerge(styles.name, "text-transparent")}>
              Alvaro José,
            </span>
          </h1>
          <h3 className="text-4xl font-bold text-cyan-500">
            Desenvolvedor{" "}
            <span className={twMerge(styles.stack, "")}>Full-stack</span>
          </h3>
        </div>
        <div
          className={twMerge(
            styles.animationRight,
            "w-[85%] lg:w-[330px] mt-5 lg:text-left text-justify text-gray-50 font-semibold"
          )}
        >
          <p>
            Comecei a estudar programação em janeiro de 2023 primeiramente foquei em aprender a lógica de programação e logo em seguida comecei meus estudos em Python um mês depois, então comecei meus estudos no front-end básico. Atualmente domino a área do front-end e back-end com facilidade, pois estudei muito sobre essas áreas. Também tenho um conhecimento básico na área de Ciência de Dados
          </p>
        </div>
        <div className="w-[100%] absolute bottom-[10px] left-0">
          <p className="flex flex-col justify-center items-center text-lg text-cyan-500 lg:text-gray-50">Arraste para mais! <Image 
          src={'/icons/arrow.png'}
          alt='seta para baixo'
          height={50}
          width={50}
          className='animate-bounce mt-5'
          /></p>
        </div>
      </section>
    </>
  );
}
