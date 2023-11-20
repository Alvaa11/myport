type exp = {
  id: number;
  carg: string;
  desc: string;
  time: string;
};

export default function Expirence({
  exps
} : { exps: exp[] }) {
  return (
    <>
      <section
        id="exp"
        className="w-full bg-slate-300 flex flex-col lg:flex-wrap justify-center lg:items-start items-center p-10 overflow-auto"
      >
        <div className="flex gap-10 flex-nowrap ml-[220%] md:ml-[90%] lg:ml-[0%]">
          {exps?.map((exp) => (
            <div key={exp.id} className="shadow-black shadow-sm w-[300px] h-[300px] p-5 rounded-md flex justify-center items-center flex-col animate-pulse">
              <h1 className="text-5xl font-bold">Em breve</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
