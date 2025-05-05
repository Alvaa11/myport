import Image from "next/image"
import { twMerge } from "tailwind-merge"
import styles from "../../../styles/exp.module.css"

export default function Experience(){
  return(
    <>
    <section className="bg-gray-100 flex flex-col jsutify-center items-center w-screen h-screen">
      <section className={twMerge(styles.animationBottom, "h-60 lg:h-screen min-w-screen")}>
        <div className="w-screen h-[100%] relative">
         <Image
          src={`/img/experience/Atacadao.jpg`}
          alt="icone"
          width={4000}
          height={4000}
          className="h-[100%] w-[100%]"/>     
          <div className="absolute top-0 bg-zinc-950 h-[100%] w-[100%] opacity-40 z-0">
          </div>
        </div>
      </section>
      <section className="absolute top-[190px] flex flex-col w-[85%] lg:w-[70%] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <article className="w-[100%] py-5 px-2 bg-stone-100 flex flex-col justify-center items-center rounded-lg shadow-sm shadow-zinc-950">
              <h1 className="mb-10 text-2xl font-bold">Auxiliar de Informática</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate nobis dicta explicabo vitae non. Sunt explicabo quasi minus eum a. Ipsa praesentium perferendis blanditiis quod sapiente aperiam incidunt doloribus.</p>
          </article>
        </div>
      </section>
    </section>
  </>
  )
}