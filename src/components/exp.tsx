
interface Props{
  id: number,
  carg: string,
  desc: string,
  img: string,
  company: string,
  time: string
}

interface ResponseExp{
  props: Props[]
}

export default async function Expirence() {
  const exps = await fetch("http://localhost:5198/api/v01/exp")
  const data : ResponseExp = await exps.json()
  
  return (
    <>
      <section
        id="exp"
        className="w-full bg-slate-300 flex flex-col lg:flex-wrap justify-center lg:items-start items-right p-5 overflow-auto"
      >
        <div className="flex gap-10 flex-nowrap md:ml-[90%] lg:ml-[0%]">
          {data.props.map(exp => (
            <div key={exp.id} className="shadow-black shadow-sm w-[350px] h-[300px] p-5 rounded-md flex justify-center items-center flex-row">
              <h1 className="text-5xl font-bold">Em breve</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
