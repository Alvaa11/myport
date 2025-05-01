import { twMerge } from "tailwind-merge";
import Image from "next/image";
import styles from "../styles/name.module.css";

export default function About() {
  return (
    <>
      <section className='w-full min-h-screen bg-slate-800 lg:bg-[url("../../public/img/tech.jpg")] bg-[url("../../public/img/prog.jpg")] bg-center bg-no-repeat bg-cover lg:bg-contain lg:bg-right flex flex-col justify-center lg:items-start items-center p-10'>
        <div className={twMerge(styles.animationLeft, "w-full lg:w-[350px]")}>
          <h1 className="text-6xl lg:text-8xl font-bold text-white opacity-80">
            <span className={twMerge(styles.name, "text-transparent")}>
              Alvaro José,
            </span>
          </h1>
          <h3 className="text-5xl font-bold text-cyan-500">
            Software{" "}
            <span className={twMerge(styles.stack, "")}>Engineer</span>
          </h3>
        </div>
        <div
          className={twMerge(
            styles.animationRight,
            "w-[97%] lg:w-[330px] mt-5 lg:text-left text- text-gray-50 font-semibold"
          )}
        >
          <h2>
            Cosntruindo soluções inovadoras e eficientes para o mundo digital.
          </h2>
        </div>
      </section>
    </>
  );
}
