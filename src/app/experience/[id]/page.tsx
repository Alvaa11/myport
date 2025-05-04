import { twMerge } from "tailwind-merge"
import styles from "./styles/exp.module.css"
import "./src/app/global.css"

export default function Experience(){
  return(
    <>
    <section className={twMerge(styles.animationBottom,  "min-h-[50%] min-w-screen bg-slate-800 bg-[url('../../public/img/experience/Atacadao.jpg')] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center p-20")}>
      <div className="relative min-w-screen min-h-[100%] ">
        <div className="min-h-[100%] min-w-[100%] bg-zinc-950 opacity-40"></div>
      </div>
      <article className="flex flex-col justify-center items-center w-[80%]">
        <h1>Auxiliar de Informática</h1>
        <p></p>
      </article>
    </section>
  </>
  )
}