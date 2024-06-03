import { Menu, X, MessageCircleHeart } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);
    const toggleNavbar = () => {setMobileDrawerOpen(!mobileDrawerOpen)};

  return (
    
    <nav className=" backdrop-blur-lg md:px-14 z-50 p-4 border-b mx-auto sticky top-0 right-0 left-0">
        {/*sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80*/}
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center  flex-shrink-0">
                    <a href="/"><img className="h-12 w-100 mr-2" src={logo} alt="" /></a>
                    
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 text-purple-800">
                    {navItems.map((item, index) => (
                        
                        <Link activeClass='active' spy={true} smooth={true} offset={-70} key={item.href} to={item.href} className='block cursor-pointer hover:text-[#EE9AE5] hover:font-semibold'>{item.label}</Link>
                       
                        
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="https://wa.me/5491131221328" target='_blank' className="bg-gradient-to-r from-[#EE9AE5] to-purple-800  inline-flex justify-center items-center btn-primary py-2 text-white px-3 border rounded-md hover:-translate-y-1 transition-all duration-300">
                    <MessageCircleHeart className="mr-2" />Let´s Talk
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            { mobileDrawerOpen && (
                <div className="mt-3 fixed right-0 z-20 bg-[#673ab7] text-white w-full py-6 flex flex-col justify-center  lg:hidden">
                    <ul >
                        { navItems.map((item, index) => (

                            <Link activeClass='active' spy={true} smooth={true} offset={-90} key={item.href} to={item.href} className='w-full py-4 block text-center cursor-pointer hover:text-[#EE9AE5] hover:font-semibold' onClick={toggleNavbar}>{item.label}</Link>
                          
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar