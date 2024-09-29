import React from 'react';
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="px-4">
            <Image
                width="960"
                src="/images/header.webp"
                height="540"
                alt="Goktay.dev header arka planı"
            />

            <div className="flex flex-row flex-wrap justify-between items-center justify-items-center ">
                <div className="-mt-16 w-[150px] mx-auto md:mx-0">
                    <Image
                        src="/images/goktay-gurbuzer.png"
                        alt="Göktay Gürbüzer"
                        width="150"
                        height="150"
                        className="rounded-full border-4 border-green-900 object-cover "
                    />
                </div>
                <div className="p-3 flex flex-row gap-2 mx-auto md:mx-0">
                    <a href="https://twitter.com/GoktayGurbuzer" target="_blank" className="px-6 py-2 text-sm text-white font-semibold rounded-full border border-green-600 flex flex-row items-center gap-2 hover:bg-green-950"><FaSquareXTwitter /> Twitter</a>
                    <a href="https://www.linkedin.com/in/goktaygurbuzer/" target="_blank" className="px-6 py-2 text-sm text-white font-semibold rounded-full border border-green-600 flex flex-row items-center gap-2 hover:bg-green-950"><FaLinkedin /> LinkedIn</a>
                </div>
            </div>
            <div className="pt-2 leading-7 text-center md:text-left">
                <h1 className="text-4xl font-bold">Göktay Gürbüzer</h1>
                <h2 className="text-lg font-semibold underline">Full-stack Web Developer</h2>
                <p className="font-medium text-ellipsis pt-2">Web Geliştirici ve Google Ürünleri Uzmanı</p>
                <p className="font-light text-ellipsis text-xs leading-normal">.NET Core, PHP, NodeJS, React, NextJS, MSSQL, MYSQL, PostgreSQL, RestFul, Windows Server, Linux, Nginx, IIS, Bootstrap, TailwindCSS, CSS3, Javascript, HTML</p>
            </div>
        </div>
    );
};

export default Header;