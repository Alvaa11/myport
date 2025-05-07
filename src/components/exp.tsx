'use client'

import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    fetch("https://apiexperiencemyport-dsfzc7hbctdfdxa7.canadacentral-01.azurewebsites.net/api/v01/exp")
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


  return (
    <>
      <section className="bg-gay-200 py-10">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold mb-12">Experiências</h2>

          <div className="relative">

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {data.map((exp) => (
                  <div key={exp.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                    <article className="bg-black text-white rounded-xl p-6 space-y-4 h-[450px] flex flex-col">
                      <div className="flex-1 flex flex-col">
                        <div className="w-full mb-12 rounded-md">
                          <Image src={`/img/experience/${exp.img}`}
                                  width={350}
                                  height={50}
                                  alt="imagem da experiencia"
                                  className="w-full"></Image>
                        </div>
                        <div className="w-full">
                          <h3 className="text-2xl font-italic opacity-70 select-none">{exp.cargo}</h3>
                        </div>
                      </div>
                    </article>

                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
