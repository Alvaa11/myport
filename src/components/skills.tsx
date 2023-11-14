import Image from "next/image";
import { twMerge } from "tailwind-merge";
import styles from "../styles/skills.module.css";

type SkillsType = {
  id: Number;
  desc: String;
  img: String;
};

export default function Skills({ desc }: { desc: SkillsType[] }) {
  return (
    <>
      <section id='skills' className={twMerge(styles.section, "w-full bg-slate-200 flex flex-col lg:flex-wrap justify-center lg:items-start items-center p-10")}>
        <div className="flex justify-center items-center text-center lg:w-full mb-16 lg:mb-36">
          <h1 className="text-4xl lg:text-6xl font-bold flex justify-center items-center">
            Habilidades
            <Image
              src={"/icons/skills.png"}
              alt="icone"
              height={50}
              width={50}
              className="ml-2"
            />
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center">
          {desc?.map((list) => (
            <div
              className={twMerge(
                styles.gradient,
                "min-h-[300px] w-[300px] mg:w-[350px] border-[2px] border-cyan-700 shadow-black shadow-md rounded-lg p-5 flex flex-col justify-center items-center mb-10 lg:mr-10 hover:shadow-lg hover:shadow-black transition duration-700"
              )}
            >
              <div className="mb-3">
                <Image
                  src={`/icons/${list.img}`}
                  alt="icone"
                  height={50}
                  width={50}
                />
              </div>
              <div className="text-gray-50 text-lg">
                <p>
                  {list.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
