import Image from "next/image";
import { twMerge } from "tailwind-merge";
import styles from "../styles/skills.module.css";

interface SkillsType {
  id: number;
  description: string;
  img: string;
};


export default async function Skills() {
  const data : SkillsType[] = await fetch("https://apimyportskills.azurewebsites.net/api/v01/skill").then(res => res.json())

  return (
    <>
      <section id='skills' className={twMerge(styles.section, "w-full bg-slate-400 flex flex-col lg:flex-wrap justify-center lg:items-start items-center p-10")}>
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
          {data.map((skill) => (
            <div key={skill.id}
              className={twMerge(
                styles.gradient,
                "min-h-[300px] w-[300px] md:w-[350px] border-[2px] border-cyan-700 shadow-black shadow-md rounded-lg p-5 flex flex-col justify-center items-center mb-10 lg:mr-10 hover:shadow-lg hover:shadow-black transition duration-300"
              )}
            >
              <div className="mb-3">
                <Image
                  src={`/icons/${skill.img}`}
                  alt="icone"
                  height={50}
                  width={50}
                />
              </div>
              <div className="text-gray-50 text-lg">
                <p>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
