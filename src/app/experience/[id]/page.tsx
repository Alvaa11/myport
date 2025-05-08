import Image from "next/image"
import { twMerge } from "tailwind-merge"
import styles from "../../../styles/exp.module.css"
import Link from "next/link";

export default async function Experience({ params }){
  const { id } = params;

  const response = await fetch(
    `https://apiexperiencemyport.azurewebsites.net/api/v01/exp/${id}`);
  
  const exp = await response.json();



  return(
    <>
    <section className="bg-gray-100 flex flex-col jsutify-center items-center w-screen h-screen">
      <section className={twMerge(styles.animationBottom, "h-60 lg:h-screen min-w-screen")}>
        <div className="w-screen h-[100%] relative">
         <Image
          src={`/img/experience/${exp.img}`}
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
              <h1 className="mb-5 text-2xl font-bold">{exp.cargo}</h1>
              <p className="">{exp.description}</p>
              <Link href={`${exp.link}`}>
                <button className="border-[3px] border-red-600 p-3 rounded-lg text-xl mt-4 hover:bg-red-600 hover:text-gray-50 text-zinc-950 focus:bg-red-700 transition duration-700">Saber mais!</button>
              </Link>
          </article>
        </div>
      </section>
    </section>
  </>
  )
}