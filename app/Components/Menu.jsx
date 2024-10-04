"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Pathname'i alıyoruz
import { useState, useEffect } from 'react';

const Menu = () => {
    // Menüde görüntülenecek isim ve URL'leri ayırıyoruz
    const menuItems = [
        { name: 'Akış', path: '/akis' },
        { name: 'Hakkımda', path: '/hakkimda' },
        { name: 'Blog', path: '/blog' },
        { name: 'Yorumun', path: '/yorumun' }
    ];

    const pathname = usePathname(); // Mevcut yolu almak için
    const [activeMenu, setActiveMenu] = useState(menuItems[0].name);

    useEffect(() => {
        // Aktif menü yolunu kontrol ediyoruz ve aktif menüyü güncelliyoruz
        const currentMenu = menuItems.find((item) => pathname === item.path);
        if (currentMenu) {
            setActiveMenu(currentMenu.name);
        }
    }, [pathname]);

    return (
        <div className="w-full px-4 my-4">
            <ul className="flex flex-row md:flex-row justify-evenly items-center">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`${
                            activeMenu === item.name
                                ? 'px-4 md:px-12 py-2 bg-green-700 rounded-xl font-bold cursor-pointer'
                                : 'px-4 md:px-12 py-2 border-b-2 border-green-600 font-light cursor-pointer hover:bg-gray-800'
                        }`}
                    >
                        <Link href={item.path}>
                            {item.name} {/* Menüde gösterilecek isim */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
