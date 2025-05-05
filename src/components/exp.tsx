import Image from "next/image"


interface Props{
  id: number,
  cargo: string,
  description: string,
  img: string,
  company: string,
  time: string
}

export default async function Expirence() {
  const data : Props[] = await fetch("https://apiexperiencemyport-dsfzc7hbctdfdxa7.canadacentral-01.azurewebsites.net/api/v01/exp").then(res => res.json())
  
  console.log(data)
  return (
    <>
      <section
        id="exp"
        className="w-full bg-slate-300 flex flex-col lg:flex-wrap justify-center lg:items-start items-right p-5 overflow-auto"
      >
        <h1 className="text-4xl lg:text-6xl font-bold m-auto mb-5 ">Experiencias</h1>
        <div className="flex gap-10 flex-nowrap md:ml-[90%] lg:ml-[0%]">
          {data.map(exp => (
            <div key={exp.id} className="shadow-black shadow-sm w-[350px] h-[300px] rounded-md flex justify-center items-center flex-col">
              <div className="w-[100%] h-[50%] flex flex-col">
                <Image
                    src={`/img/experience/${exp.img}`}
                    alt="imagem da experiencia"
                    width={350}
                    height={150} 
                    className="w-[100%] h-[100%]"></Image>
              </div>
              <div className="w-[100%] h-[50%]">
                <h1 className="text-xl lg:text-3xl font-bold">{exp.cargo}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
