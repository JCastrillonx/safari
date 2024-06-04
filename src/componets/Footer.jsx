import logoElefante from '../assets/logo-elefante.png'
import { Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      
      <div className="grid grid-cols-2 gap-4">
        {/*Columna logo y creditos*/}
        <div className=" px-4 b  ">
          <a href="/safari" className='text-sm font-semibold flex items-end -space-x-4 uppercase'>
            <img src={logoElefante} alt="Logo Elefante Safari Group HR" className='logo' />
            <span className='text-white hidden md:block ml-10 mb-7'></span>
          </a>


        </div>
        {/*Columna redes sociales*/}
        <div className=" px-4 items-center justify-end flex">
          <div className="flex justify-start md:justify-end space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer"  className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Linkedin />
            </a>
            <a href="#" target="_blank"  rel="noopener noreferrer" className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Instagram />
            </a>
            <a href="#" className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Facebook />
            </a>
            <a href="#" target="_blank"  rel="noopener noreferrer" className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <hr />
      {/*Copy*/}
      <div className="w-full px-4 mt-8 mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-center md:text-start text-sm">&copy; Copyright {currentYear} Jose Castrillon. All rights reserved.</p>
        <p className="text-sm text-center md:text-end">Desarrollado por <a href="https://www.linkedin.com/in/jm-castrillon/" target='blank' rel="noopener noreferrer" className='hover:underline'  title="JCastrillon"  >Jose Castrillon 💜</a></p>
      </div>
    </div>

  )
}

export default Footer