'use client'

import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface Props {
  id: number,
  cargo: string,
  description: string,
  img : string,
  company : string,
  time : string
}



export default function Expirence() {

  const [data, setData] = useState<Props[]>([])

  useEffect(() => {
    fetch("https://apiexperiencemyport.azurewebsites.net/api/v01/exp")
    .then((res) => res.json())
    .then((data) => setData(data))
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  })

  function scrollPrev(){
    emblaApi?.scrollPrev();
  }

  function scrollNext(){
    emblaApi?.scrollNext();
  }

  return (
    <>
      <section id='exp' className="bg-gay-200 py-10">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl lg:text-6xl font-bold mb-12">Experiências</h2>

          <div className="relative">
            <button className="bg-white flex items-center justify-center rounded-full shadow-lg shadow-black absolute top-1/2 lg:-left-3 z-10">
              <ChevronLeft 
              onClick={scrollPrev}
              className="w-8 h-8 lg:h-12 lg:w-12 text-gray-600 opacity-50"/>
            </button>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {data.map((exp) => (
                  <div key={exp.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                    <article className="bg-black text-white rounded-xl h-[400px] p-6 flex flex-col">
                      <div className="flex flex-col h-full w-full">
                        <div className="w-full mb-5 rounded-md h-1/2 relative">
                          <Image src={`/img/experience/${exp.img}`}
                                  width={350}
                                  height={50}
                                  alt="imagem da experiencia"
                                  className="w-full h-full"></Image>
                        </div>
                        <div className="w-full h-1/2 relative flex justify-center">
                          <h3 className="text-lg lg:text-xl font-italic mb-2 opacity-70 select-none">{exp.cargo}</h3>
                          <Link href={`/experience/${exp.id}`}>
                          <button className="border-[3px] border-red-600 p-3 rounded-lg text-xl hover:bg-red-600 text-gray-50 text-gray-50 focus:bg-red-700 transition duration-700 absolute bottom-5 right-10">Saber mais!</button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-white flex items-center justify-center rounded-full shadow-lg shadow-black absolute top-1/2 right-0 lg:-right-3 z-10">
              <ChevronRight 
              onClick={scrollNext}
              className="w-8 h-8 lg:h-12 lg:w-12 text-gray-600 opacity-50"/>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
