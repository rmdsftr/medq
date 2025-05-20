import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import Dokter from '../assets/dokter.png';


const Navs = () => {
  const [active, setActive] = useState('Beranda');
  const menus = [
    { name: 'Beranda', link: '/' },
    { name: 'Rumah Sakit', link: '/rumahSakit' },
    { name: 'Reservasi', link: '/reservasi' }
  ];

  return (
    <div className="max-w-[100rem]  absolute top-0 w-full bg-transparent z-50 px-10">
      <nav className="flex items-center justify-between py-4 mr-10">
        <div className="mr-auto">
          <img src={Logo} alt="Logo" className="h-15 w-auto" link= "/" />
        </div>

        <div className="flex space-x-8">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.link} 
              onClick={() => setActive(menu.name)}
              className={`border-b-2 text-md transition duration-200
                ${active === menu.name
                  ? 'border-gray-500 text-orange-700 font-bold'
                  : 'border-transparent text-black hover:text-gray-500'}
              `}
            >
              {menu.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navs;