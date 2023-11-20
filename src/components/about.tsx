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
            Comecei a estudar programação em janeiro de 2023 primeiramente foquei em aprender a lógica de programação e logo em seguida comecei meus estudos em Python um mês depois, então comecei meus estudos no front-end básico. Atualmente domino a área do front-end e back-end com facilidade, pois estudei muito sobre essas áreas.
          </p>
        </div>
      </section>
    </>
  );
}
