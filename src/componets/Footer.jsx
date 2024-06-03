import logoElefante from '../assets/logo-elefante.png'
import { Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">

      <div className="flex flex-row gap-8">
        {/*Columna logo y creditos*/}
        <div className="md:w-1/2 px-4  ">
          <a href="/safari" className='text-lg font-semibold flex items-center space-x-1 uppercase'>
            <img src={logoElefante} alt="Logo Elefante" className=' inline-block items-center ' />
            <span className='text-white hidden'>Safari Group HR</span>
          </a>


        </div>
        {/*Columna redes sociales*/}
        <div className="md:w-1/2 px-4  items-center justify-end flex">
          <div className="flex justify-start md:justify-end space-x-4">
            <a href="https://www.linkedin.com/company/safarigrouphr" target="_blank" rel="noopener"  className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/safarigrouphr" target="_blank"  rel="noopener" className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Instagram />
            </a>
            <a href="/safari" className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Facebook />
            </a>
            <a href="mailto:jobs@safari-group.com?subject=Asesor%C3%ADa%20&body=Hola!%20%0AQuiero%20recibir%20informaci%C3%B3n%20del%20servicio%2C%20%C2%BFme%20cuentas%20m%C3%A1s%3F" target="_blank"  rel="noopener" className="text-blue-400 hover:text-white inline-flex hover:-translate-y-4 transition-all duration-300">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <hr />
      {/*Copy*/}
      <div className="w-full px-4 mt-8 mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-center md:text-start text-sm">&copy; Copyright {currentYear} Safari Group HR. All rights reserved.</p>
        <p className="text-sm text-center md:text-end">Desarrollado por <a href="https://www.linkedin.com/in/jm-castrillon/" target='blank' rel="noopener" className='hover:underline'  title="JCastrillon"  >Jose Castrillon 💜</a></p>
      </div>
    </div>

  )
}

export default Footer