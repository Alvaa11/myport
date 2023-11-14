"use client";

import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [side, setSide] = useState("translate-x-[250px] hidden");
  const [back, setBack] = useState("hidden");

  function openSideBar() {
    setBack("flex");
    setSide("translate-x-[0px] flex");
  }

  function closeSideBar() {
    setBack("hidden");
    setSide("translate-x-[250px] hidden");
  }

  return (
    <>
      <header className="w-full h-[150px] bg-transparent fixed top-0">
        <div className="w-full h-full flex justify-between items-center px-10">
          <div className="flex items-center justify-center">
            <h1 className="mr-10 text-4xl font-semibold text-gray-50 lg:text-6xl">
              Alvaro <span className="text-red-500">José</span>
            </h1>
            <ul className="hidden lg:flex text-xl text-gray-50">
              <li className="mr-2">
                <Link href={"/#skills"} passHref>
                  Hablidades/
                </Link>
              </li>
              <li className="mr-2">
                <Link href={"/#about"} passHref>
                  Sobre mim/
                </Link>
              </li>
              <li className="mr-2">
                <Link href={"/#exp"} passHref>
                  Experiências
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden lg:flex">
              <button className="border-[3px] border-red-600 p-3 rounded-lg text-xl hover:bg-red-600 text-gray-50 text-gray-50 focus:bg-red-700 transition duration-700">
                <Link
                  href={
                    "https://wa.me/5519991374662?text=Ol%C3%A1%2C+tudo+bem%3F+Vim+pelo+seu+portfolio.+Teria+um+minuto+para+conversarmos%3F+"
                  }
                  passHref
                >
                  Entre em contato!
                </Link>
              </button>
            </div>
            <div className="flex lg:hidden">
              <button onClick={openSideBar}>
                <Image
                  src={"/icons/white-menu.svg"}
                  alt="menu"
                  height={40}
                  width={40}
                ></Image>
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={closeSideBar}
          className={twMerge(
            back,
            "absolute w-full h-screen bg-black opacity-70 top-0"
          )}
        >
          <Image
            src={"/icons/close.svg"}
            alt="close"
            height={50}
            width={50}
            className="absolute top-[30px] right-[255px] cursor-pointer"
          ></Image>
        </div>
        <nav
          className={twMerge(
            side,
            "w-[250px] h-screen fixed top-0 right-0 bg-slate-950 py-10 justify-around items-center flex-col transition-all duration-700"
          )}
        >
          <div
            className={twMerge(
              styles.texto,
              "uppercase text-2xl bg-gradient-to-tl from-red-500 to-red-950 bg-[length:400%_100%] font-semibold"
            )}
          >
            the best of me
          </div>
          <div className="w-full flex justify-center items-center">
            <ul className="flex flex-col text-xl text-gray-50 text-center">
              <li className="mb-8 relative">
                <Link
                  className={twMerge(styles.listMob, "after:bg-red-500")}
                  href={"/#skills"}
                  passHref
                  onClick={closeSideBar}
                >
                  Hablidades
                </Link>
              </li>
              <li className="mb-8 relative">
                <Link
                  className={twMerge(styles.listMob, "after:bg-red-500")}
                  href={"/#about"}
                  passHref
                  onClick={closeSideBar}
                >
                  Sobre mim
                </Link>
              </li>
              <li className="mb-8 relative">
                <Link
                  className={twMerge(styles.listMob, "after:bg-red-500")}
                  href={"/#exp"}
                  passHref
                  onClick={closeSideBar}
                >
                  Experiências
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="border-[3px] border-red-600 p-3 rounded-lg hover:bg-red-600 text-gray-50 text-lg focus:bg-red-700 transition duration-700">
              <Link
                href={
                  "https://wa.me/5519991374662?text=Ol%C3%A1%2C+tudo+bem%3F+Vim+pelo+seu+portfolio.+Teria+um+minuto+para+conversarmos%3F+"
                }
                passHref
              >
                Entre em contato!
              </Link>
            </button>
          </div>
          <div className="absolute bottom-[20px]">
            <p className="text-gray-50">&copy; copyright by Alvaro</p>
          </div>
        </nav>
      </header>
    </>
  );
}
