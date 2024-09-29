"use client"
import { useState } from 'react';
import Akis from "@/app/Sections/Akis.jsx";
import Hakkimda from "@/app/Sections/Hakkimda.jsx";
import Blog from "@/app/Sections/Blog.jsx";
import Yorumun from "@/app/Sections/Yorumun.jsx";


const Menu = () => {
    const [activeMenu, setActiveMenu] = useState('Akış');
    const menuItems = ['Akış', 'Hakkımda', 'Blog', 'Yorumun'];

    const handleMenuClick = (item) => {
        setActiveMenu(item);

        const section = document.getElementById(item.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Section ${item.toLowerCase()} bulunamadı.`);
        }
    };

    return (
        <div className="w-full px-4">
            <ul className="flex flex-row md:flex-row justify-evenly items-center">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        onClick={() => handleMenuClick(item)}
                        className={`${
                            activeMenu === item
                                ? 'px-4 md:px-12 py-2 bg-green-700 rounded-xl font-bold cursor-pointer'
                                : 'px-4 md:px-12 py-2 border-b-2 border-green-600 font-light cursor-pointer hover:bg-gray-800'
                        }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                {activeMenu === 'Akış' && <Akis />}
                {activeMenu === 'Hakkımda' && <Hakkimda />}
                {activeMenu === 'Blog' && <Blog />}
                {activeMenu === 'Yorumun' && <Yorumun />}
            </div>
        </div>
    );
}

export default Menu;